const pdfParse = require('pdf-parse');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { saveExtractedData } = require('../queries/pdf.queries');
const {GEMINI_KEY} = require('../config/constants');

const genAI = new GoogleGenerativeAI(GEMINI_KEY);
console.log(genAI);

const extractPDFData = async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

        // Extract text from PDF using pdf-parse
        const data = await pdfParse(req.file.buffer);
        const extractedText = data.text;

        // use gemini to extract user info
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `
        Extract the following details from the given text:
        - Name
        - Address
        - Date of Birth (DOB)
        - Phone Number

        Provide ONLY the JSON output, without any markdown formatting, backticks, or extra text.
        For Example,
        {
            "name": "John Doe",
            "address": "123 Main St, New York, NY",
            "dob": "01-02-1990",
            "phone": "1234567890"
        }
        

        Text:
        """${extractedText}"""
        `;

        const result = await model.generateContent(prompt);
        const extractedData = JSON.parse(result.response.text());

        // Store user info in MongoDB
        const newData = await saveExtractedData(extractedData);

        res.status(201).json({ data: newData });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error processing PDF' });
    }
};

module.exports = { extractPDFData };

