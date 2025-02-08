// index.js
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Optionally, if you want to explicitly send the index.html for the root route:
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

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
    //console.log("Request Body:", req.body); // Debug log

    const receivedData = req.body;

  // Add an additional field (for example, a timestamp)
  const modifiedData = {
    ...receivedData,
    status: 'SUCCESS',
    additionalField: 'Server has recevied your message.',
    receivedAt: new Date().toISOString(),
  };

  res.json(modifiedData);
});


/**
 * GET /sap/opu/odata/sap/API_BUSINESS_PARTNER_SRV/
 * Returns test business partner data from a local JSON file.
 */
app.get('/sap/opu/odata/sap/API_BUSINESS_PARTNER_SRV/', (req, res) => {
    const jsonFilePath = path.join(__dirname, 'data', 'API_BUSINESS_PARTNER_SRV.json');
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading business partner file:', err);
        return res.status(500).json({ error: 'Error reading business partner data file' });
      }
  
      try {
        const jsonData = JSON.parse(data);
        res.json(jsonData);
      } catch (parseErr) {
        console.error('Error parsing business partner JSON:', parseErr);
        res.status(500).json({ error: 'Invalid JSON format in business partner file' });
      }
    });
  });
  
  /**
   * POST /sap/opu/odata/sap/API_BUSINESS_PARTNER_SRV/
   * Accepts a JSON payload, adds an additional field, and returns the modified payload.
   */
  app.post('/sap/opu/odata/sap/API_BUSINESS_PARTNER_SRV/', (req, res) => {
    const receivedData = req.body;
  
    const modifiedData = {
      ...receivedData,
      status: 'SUCCESS',
      additionalField: 'Server has recevied your message.',
      receivedAt: new Date().toISOString(),
    };
  
    res.json(modifiedData);
  });

/**
 * GET /sap/opu/odata/sap/API_PRODUCT_SRV/
 * Returns test product data from a local JSON file.
 */
app.get('/sap/opu/odata/sap/API_PRODUCT_SRV/', (req, res) => {
    const jsonFilePath = path.join(__dirname, 'data', 'API_PRODUCT_SRV.json');
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading product file:', err);
        return res.status(500).json({ error: 'Error reading product data file' });
      }
      try {
        const jsonData = JSON.parse(data);
        res.json(jsonData);
      } catch (parseErr) {
        console.error('Error parsing product JSON:', parseErr);
        res.status(500).json({ error: 'Invalid JSON format in product file' });
      }
    });
  });
  
  /**
   * POST /sap/opu/odata/sap/API_PRODUCT_SRV/
   * Accepts a JSON payload, adds an additional field, and returns the modified payload.
   */
  app.post('/sap/opu/odata/sap/API_PRODUCT_SRV/', (req, res) => {
    const receivedData = req.body;
    const modifiedData = {
      ...receivedData,
      status: 'SUCCESS',
      additionalField: 'Server has recevied your message.',
      receivedAt: new Date().toISOString(),
    };
    res.json(modifiedData);
  });
  
/**
 * GET /sap/opu/odata/sap/API_COSTCENTER_SRV/
 * Returns test cost center data from a local JSON file.
 */
app.get('/sap/opu/odata/sap/API_COSTCENTER_SRV/', (req, res) => {
    const jsonFilePath = path.join(__dirname, 'data', 'API_COSTCENTER_SRV.json');
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading cost center file:', err);
        return res.status(500).json({ error: 'Error reading cost center data file' });
      }
      try {
        const jsonData = JSON.parse(data);
        res.json(jsonData);
      } catch (parseErr) {
        console.error('Error parsing cost center JSON:', parseErr);
        res.status(500).json({ error: 'Invalid JSON format in cost center file' });
      }
    });
  });
  
  /**
   * POST /sap/opu/odata/sap/API_COSTCENTER_SRV/
   * Accepts a JSON payload, adds an additional field, and returns the modified payload.
   */
  app.post('/sap/opu/odata/sap/API_COSTCENTER_SRV/', (req, res) => {
    const receivedData = req.body;
    const modifiedData = {
      ...receivedData,
      status: 'SUCCESS',
      additionalField: 'Server has recevied your message.',
      receivedAt: new Date().toISOString(),
    };
    res.json(modifiedData);
  });
  

/**
 * GET /sap/opu/odata/sap/API_GLACCOUNT_SRV/
 * Returns test GL account data from a local JSON file.
 */
app.get('/sap/opu/odata/sap/API_GLACCOUNT_SRV/', (req, res) => {
  const jsonFilePath = path.join(__dirname, 'data', 'API_GLACCOUNT_SRV.json');
  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading GL Account file:', err);
      return res.status(500).json({ error: 'Error reading GL Account data file' });
    }
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseErr) {
      console.error('Error parsing GL Account JSON:', parseErr);
      res.status(500).json({ error: 'Invalid JSON format in GL Account file' });
    }
  });
});

/**
 * POST /sap/opu/odata/sap/API_GLACCOUNT_SRV/
 * Accepts a JSON payload, adds an additional field, and returns the modified payload.
 */
app.post('/sap/opu/odata/sap/API_GLACCOUNT_SRV/', (req, res) => {
  const receivedData = req.body;
  const modifiedData = {
    ...receivedData,
    status: 'SUCCESS',
    additionalField: 'Server has recevied your message.',
    receivedAt: new Date().toISOString(),
  };
  res.json(modifiedData);
});


/**
 * GET /sap/opu/odata/sap/API_SUPPLIER_SRV/
 * Returns test supplier data from a local JSON file.
 */
app.get('/sap/opu/odata/sap/API_SUPPLIER_SRV/', (req, res) => {
  const jsonFilePath = path.join(__dirname, 'data', 'API_SUPPLIER_SRV.json');
  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading supplier file:', err);
      return res.status(500).json({ error: 'Error reading supplier data file' });
    }
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseErr) {
      console.error('Error parsing supplier JSON:', parseErr);
      res.status(500).json({ error: 'Invalid JSON format in supplier file' });
    }
  });
});

/**
 * POST /sap/opu/odata/sap/API_SUPPLIER_SRV/
 * Accepts a JSON payload, adds an additional field, and returns the modified payload.
 */
app.post('/sap/opu/odata/sap/API_SUPPLIER_SRV/', (req, res) => {
  const receivedData = req.body;
  const modifiedData = {
    ...receivedData,
    status: 'SUCCESS',
    additionalField: 'Server has recevied your message.',
    receivedAt: new Date().toISOString(),
  };
  res.json(modifiedData);
});

/**
 * GET /odata/v2/User
 * Returns test user data from a local JSON file.
 */
app.get('/odata/v2/User', (req, res) => {
    const jsonFilePath = path.join(__dirname, 'data', 'odata_v2_User.json');
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading user file:', err);
        return res.status(500).json({ error: 'Error reading user data file' });
      }
      try {
        const jsonData = JSON.parse(data);
        res.json(jsonData);
      } catch (parseErr) {
        console.error('Error parsing user JSON:', parseErr);
        res.status(500).json({ error: 'Invalid JSON format in user file' });
      }
    });
  });
  
  /**
   * POST /odata/v2/User
   * Accepts a JSON payload, adds an additional field, and returns the modified payload.
   */
  app.post('/odata/v2/User', (req, res) => {
    const receivedData = req.body;
    const modifiedData = {
      ...receivedData,
      status: 'SUCCESS',
      additionalField: 'Server has recevied your message.',
      receivedAt: new Date().toISOString(),
    };
    res.json(modifiedData);
  });
  

  /**
 * GET /odata/v2/JobRequisition
 * Returns test job requisition data from a local JSON file.
 */
app.get('/odata/v2/JobRequisition', (req, res) => {
    const jsonFilePath = path.join(__dirname, 'data', 'odata_v2_JobRequisition.json');
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading job requisition file:', err);
        return res.status(500).json({ error: 'Error reading job requisition data file' });
      }
      try {
        const jsonData = JSON.parse(data);
        res.json(jsonData);
      } catch (parseErr) {
        console.error('Error parsing job requisition JSON:', parseErr);
        res.status(500).json({ error: 'Invalid JSON format in job requisition file' });
      }
    });
  });
  
  /**
   * POST /odata/v2/JobRequisition
   * Accepts a JSON payload, adds an additional field, and returns the modified payload.
   */
  app.post('/odata/v2/JobRequisition', (req, res) => {
    const receivedData = req.body;
    const modifiedData = {
      ...receivedData,
      status: 'SUCCESS',
      additionalField: 'Server has recevied your message.',
      receivedAt: new Date().toISOString(),
    };
    res.json(modifiedData);
  });

  /**
 * GET /odata/v2/EmployeeTime
 * Returns test employee time data from a local JSON file.
 */
app.get('/odata/v2/EmployeeTime', (req, res) => {
    const jsonFilePath = path.join(__dirname, 'data', 'odata_v2_EmployeeTime.json');
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading employee time file:', err);
        return res.status(500).json({ error: 'Error reading employee time data file' });
      }
      try {
        const jsonData = JSON.parse(data);
        res.json(jsonData);
      } catch (parseErr) {
        console.error('Error parsing employee time JSON:', parseErr);
        res.status(500).json({ error: 'Invalid JSON format in employee time file' });
      }
    });
  });
  
  /**
   * POST /odata/v2/EmployeeTime
   * Accepts a JSON payload, adds an additional field, and returns the modified payload.
   */
  app.post('/odata/v2/EmployeeTime', (req, res) => {
    const receivedData = req.body;
    const modifiedData = {
      ...receivedData,
      status: 'SUCCESS',
      additionalField: 'Server has recevied your message.',
      receivedAt: new Date().toISOString(),
    };
    res.json(modifiedData);
  });

/**
 * GET /api/invoicing/v1/prod/
 * Returns test invoicing data from a local JSON file.
 */
app.get('/api/invoicing/v1/prod/', (req, res) => {
    const jsonFilePath = path.join(__dirname, 'data', 'api_invoicing_v1_prod.json');
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading invoicing file:', err);
        return res.status(500).json({ error: 'Error reading invoicing data file' });
      }
      try {
        const jsonData = JSON.parse(data);
        res.json(jsonData);
      } catch (parseErr) {
        console.error('Error parsing invoicing JSON:', parseErr);
        res.status(500).json({ error: 'Invalid JSON format in invoicing file' });
      }
    });
  });
  
  /**
   * POST /api/invoicing/v1/prod/
   * Accepts a JSON payload, adds an additional field, and returns the modified payload.
   */
  app.post('/api/invoicing/v1/prod/', (req, res) => {
    const receivedData = req.body;
    const modifiedData = {
      ...receivedData,
      status: 'SUCCESS',
      additionalField: 'Server has recevied your message.',
      receivedAt: new Date().toISOString(),
    };
    res.json(modifiedData);
  });  

/**
 * GET /api/supplier/v1/prod/
 * Returns test supplier data from a local JSON file.
 */
app.get('/api/supplier/v1/prod/', (req, res) => {
    const jsonFilePath = path.join(__dirname, 'data', 'api_supplier_v1_prod.json');
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading supplier file:', err);
        return res.status(500).json({ error: 'Error reading supplier data file' });
      }
      try {
        const jsonData = JSON.parse(data);
        res.json(jsonData);
      } catch (parseErr) {
        console.error('Error parsing supplier JSON:', parseErr);
        res.status(500).json({ error: 'Invalid JSON format in supplier file' });
      }
    });
  });
  
  /**
   * POST /api/supplier/v1/prod/
   * Accepts a JSON payload, adds an additional field, and returns the modified payload.
   */
  app.post('/api/supplier/v1/prod/', (req, res) => {
    const receivedData = req.body;
    const modifiedData = {
      ...receivedData,
      status: 'SUCCESS',
      additionalField: 'Server has recevied your message.',
      receivedAt: new Date().toISOString(),
    };
    res.json(modifiedData);
  });   

/**
 * GET /concur/expense/reports
 * Returns test expense report data from a local JSON file.
 */
app.get('/expense/reports', (req, res) => {
    const jsonFilePath = path.join(__dirname, 'data', 'concur_expense_reports.json');
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading expense reports file:', err);
        return res.status(500).json({ error: 'Error reading expense reports data file' });
      }
      try {
        const jsonData = JSON.parse(data);
        res.json(jsonData);
      } catch (parseErr) {
        console.error('Error parsing expense reports JSON:', parseErr);
        res.status(500).json({ error: 'Invalid JSON format in expense reports file' });
      }
    });
  });
  
  /**
   * POST /concur/expense/reports
   * Accepts a JSON payload, adds an additional field, and returns the modified payload.
   */
  app.post('/expense/reports', (req, res) => {
    const receivedData = req.body;
    const modifiedData = {
      ...receivedData,
      status: 'SUCCESS',
      additionalField: 'Server has recevied your message.',
      receivedAt: new Date().toISOString(),
    };
    res.json(modifiedData);
  });
  
/**
 * GET /expense/entries
 * Returns test expense entries data from a local JSON file.
 */
app.get('/expense/entries', (req, res) => {
    const jsonFilePath = path.join(__dirname, 'data', 'expense_entries.json');
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading expense entries file:', err);
        return res.status(500).json({ error: 'Error reading expense entries data file' });
      }
      try {
        const jsonData = JSON.parse(data);
        res.json(jsonData);
      } catch (parseErr) {
        console.error('Error parsing expense entries JSON:', parseErr);
        res.status(500).json({ error: 'Invalid JSON format in expense entries file' });
      }
    });
  });
  
  /**
   * POST /expense/entries
   * Accepts a JSON payload, adds an additional field, and returns the modified payload.
   */
  app.post('/expense/entries', (req, res) => {
    const receivedData = req.body;
    const modifiedData = {
      ...receivedData,
      status: 'SUCCESS',
      additionalField: 'Server has recevied your message.',
      receivedAt: new Date().toISOString(),
    };
    res.json(modifiedData);
  });

  /**
 * GET /sap/c4c/odata/v1/OpportunityCollection
 * Returns test opportunity data from a local JSON file.
 */
app.get('/sap/c4c/odata/v1/OpportunityCollection', (req, res) => {
    const jsonFilePath = path.join(__dirname, 'data', 'OpportunityCollection.json');
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading opportunity file:', err);
        return res.status(500).json({ error: 'Error reading opportunity data file' });
      }
      try {
        const jsonData = JSON.parse(data);
        res.json(jsonData);
      } catch (parseErr) {
        console.error('Error parsing opportunity JSON:', parseErr);
        res.status(500).json({ error: 'Invalid JSON format in opportunity file' });
      }
    });
  });
  
  /**
   * POST /sap/c4c/odata/v1/OpportunityCollection
   * Accepts a JSON payload, adds an additional field, and returns the modified payload.
   */
  app.post('/sap/c4c/odata/v1/OpportunityCollection', (req, res) => {
    const receivedData = req.body;
    const modifiedData = {
      ...receivedData,
      status: 'SUCCESS',
      additionalField: 'Server has recevied your message.',
      receivedAt: new Date().toISOString(),
    };
    res.json(modifiedData);
  });
  
  /**
 * GET /sap/c4c/odata/v1/LeadCollection
 * Returns test lead data from a local JSON file.
 */
app.get('/sap/c4c/odata/v1/LeadCollection', (req, res) => {
    const jsonFilePath = path.join(__dirname, 'data', 'LeadCollection.json');
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading lead collection file:', err);
        return res.status(500).json({ error: 'Error reading lead collection data file' });
      }
      try {
        const jsonData = JSON.parse(data);
        res.json(jsonData);
      } catch (parseErr) {
        console.error('Error parsing lead collection JSON:', parseErr);
        res.status(500).json({ error: 'Invalid JSON format in lead collection file' });
      }
    });
  });
  
  /**
   * POST /sap/c4c/odata/v1/LeadCollection
   * Accepts a JSON payload, adds an additional field, and returns the modified payload.
   */
  app.post('/sap/c4c/odata/v1/LeadCollection', (req, res) => {
    const receivedData = req.body;
    const modifiedData = {
      ...receivedData,
      status: 'SUCCESS',
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
