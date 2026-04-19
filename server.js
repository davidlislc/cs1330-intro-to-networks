const express = require('express');
const crypto = require('crypto');
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

// Demo users (plain text for class/demo only)
const users = [
  { id: 1, username: 'alice', password: 'password123' },
  { id: 2, username: 'bob', password: 'qwerty' }
];

// token -> userId
const sessions = new Map();

// Bearer token middleware
function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization || '';
  const [scheme, token] = authHeader.split(' ');

  if (scheme !== 'Bearer' || !token) {
    return res.status(401).json({
      success: false,
      error: 'Missing or invalid Authorization header. Use: Bearer <token>'
    });
  }

  const userId = sessions.get(token);
  if (!userId) {
    return res.status(401).json({
      success: false,
      error: 'Invalid or expired token'
    });
  }

  req.userId = userId;
  next();
}

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the CS1330 RESTful API Demo',
    endpoints: {
      'GET /': 'This help message',
      'POST /login': 'Login with username/password and get bearer token',
      'GET /me': 'Get current user info (requires Bearer token)',
      'GET /items': 'Get all items',
      'GET /items/:id': 'Get a specific item by ID',
      'POST /items': 'Create a new item (requires Bearer token + JSON body)',
      'GET /health': 'Health check endpoint'
    }
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (
    !username || typeof username !== 'string' || username.trim() === '' ||
    !password || typeof password !== 'string' || password.trim() === ''
  ) {
    return res.status(400).json({
      success: false,
      error: 'username and password are required'
    });
  }

  const user = users.find(
    u => u.username === username.trim() && u.password === password
  );

  if (!user) {
    return res.status(401).json({
      success: false,
      error: 'Invalid credentials'
    });
  }

  const token = crypto.randomBytes(24).toString('hex');
  sessions.set(token, user.id);

  res.json({
    success: true,
    message: 'Login successful',
    token,
    tokenType: 'Bearer'
  });
});

// Current user endpoint (protected)
app.get('/me', requireAuth, (req, res) => {
  const user = users.find(u => u.id === req.userId);
  res.json({
    success: true,
    data: {
      id: user.id,
      username: user.username
    }
  });
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

  // Validate that the ID is a valid positive integer
  if (isNaN(id) || id <= 0 || !Number.isInteger(id)) {
    return res.status(400).json({
      success: false,
      error: 'Invalid ID: must be a positive integer'
    });
  }

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

// POST a new item (protected)
app.post('/items', requireAuth, (req, res) => {
  const { name, description } = req.body;

  // Validate input
  if (!name || typeof name !== 'string' || name.trim() === '' ||
      !description || typeof description !== 'string' || description.trim() === '') {
    return res.status(400).json({
      success: false,
      error: 'Both name and description are required and must be non-empty strings'
    });
  }

  // Create new item (trim whitespace from inputs)
  const newItem = {
    id: nextId++,
    name: name.trim(),
    description: description.trim()
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
