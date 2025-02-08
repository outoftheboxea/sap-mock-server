// index.js
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

/**
 * GET endpoint at /sap/opu/odata/sap/API_SALES_ORDER_SRV/
 * Reads data from a local JSON file and sends it in the response.
 */
app.get('/sap/opu/odata/sap/API_SALES_ORDER_SRV/', (req, res) => {
    const jsonFilePath = path.join(__dirname, 'data', 'API_SALES_ORDER_SRV.json');
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).json({ error: 'Error reading data file' });
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseErr) {
      console.error('Error parsing JSON:', parseErr);
      res.status(500).json({ error: 'Invalid JSON format in file' });
    }
  });
});

/**
 * POST endpoint at /sap/opu/odata/sap/API_SALES_ORDER_SRV/
 * Receives a JSON payload, adds an additional field, and returns the modified payload.
 */
app.post('/sap/opu/odata/sap/API_SALES_ORDER_SRV/', (req, res) => {
    console.log("Request Body:", req.body); // Debug log

  // Add an additional field (for example, a timestamp)
  const modifiedData = {
    ...receivedData,
    additionalField: 'Server has recevied your message.',
    receivedAt: new Date().toISOString(),
  };

  res.json(modifiedData);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`SAP OData mock server running on port ${PORT}`);
});
