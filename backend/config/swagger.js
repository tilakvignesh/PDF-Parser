const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "PDF Extraction API",
      version: "1.0.0",
      description: "API for extracting data from PDFs and storing in MongoDB",
    },
  },
  apis: ["./routes/*.js"], // Ensure this path is correct
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
