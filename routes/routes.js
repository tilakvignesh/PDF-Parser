const express = require('express');
const multer = require('multer');
const { extractPDFData } = require('../controller/pdf.controller');

const router = express.Router();
const upload = multer();

/**
 * @swagger
 * /v1/extract/pdf:
 *   post:
 *     summary: Extract data from a PDF file
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Extracted data
 *       400:
 *         description: Bad request
 */ 
router.post('/extract/pdf', upload.single('file'), extractPDFData);


module.exports = router;
