const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory data storage for demo purposes
let items = [
  { id: 1, name: 'Item 1', description: 'This is the first item' },
  { id: 2, name: 'Item 2', description: 'This is the second item' }
];
let nextId = 3;

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the CS1330 RESTful API Demo',
    endpoints: {
      'GET /': 'This help message',
      'GET /items': 'Get all items',
      'GET /items/:id': 'Get a specific item by ID',
      'POST /items': 'Create a new item (requires JSON body with name and description)',
      'GET /health': 'Health check endpoint'
    }
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// GET all items
app.get('/items', (req, res) => {
  res.json({
    success: true,
    count: items.length,
    data: items
  });
});

// GET a specific item by ID
app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);
  
  if (!item) {
    return res.status(404).json({
      success: false,
      error: `Item with ID ${id} not found`
    });
  }
  
  res.json({
    success: true,
    data: item
  });
});

// POST a new item
app.post('/items', (req, res) => {
  const { name, description } = req.body;
  
  // Validate input
  if (!name || !description) {
    return res.status(400).json({
      success: false,
      error: 'Both name and description are required'
    });
  }
  
  // Create new item
  const newItem = {
    id: nextId++,
    name,
    description
  };
  
  items.push(newItem);
  
  res.status(201).json({
    success: true,
    message: 'Item created successfully',
    data: newItem
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Try visiting http://localhost:${PORT}/ for API documentation`);
});
