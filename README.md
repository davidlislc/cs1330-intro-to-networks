# CS1330 - Intro to Networks

Code used in CS1330: Introduction to Computer Networks

## HTTP RESTful API Microservice Demo

This is a simple microservice that demonstrates HTTP GET and POST RESTful services without user authentication. It's designed for educational purposes to understand how RESTful APIs work.

### Quick Start with Docker

```bash
# Clone and start
git clone https://github.com/davidlislc/cs1330-intro-to-networks.git
cd cs1330-intro-to-networks
docker compose up

# In another terminal, test the API
curl http://localhost:3000/
```

### Features

- **No Authentication Required**: Simple demo without login/security
- **In-Memory Storage**: Data is stored in memory (resets on server restart)
- **RESTful Endpoints**: Standard HTTP GET and POST operations
- **JSON Response Format**: All responses are in JSON format

### Prerequisites

**Option 1: Node.js (Native)**
- Node.js (version 12 or higher)
- npm (Node Package Manager)

**Option 2: Docker (Recommended)**
- Docker
- Docker Compose

### Installation & Running

#### Option 1: Running with Docker Compose (Recommended)

1. Clone the repository:
```bash
git clone https://github.com/davidlislc/cs1330-intro-to-networks.git
cd cs1330-intro-to-networks
```

2. Start the service with Docker Compose:
```bash
docker-compose up
```

Or run in detached mode:
```bash
docker-compose up -d
```

3. Stop the service:
```bash
docker-compose down
```

The server will be available at `http://localhost:3000`.

**Docker Compose Features:**
- Automatic container build and startup
- Port mapping (3000:3000)
- Health checks for monitoring
- Automatic restart on failure

**Docker Compose Commands:**
```bash
# Start the service
docker compose up

# Start in detached mode (background)
docker compose up -d

# View logs
docker compose logs -f

# Stop the service
docker compose down
```

#### Option 2: Running with Node.js

1. Clone the repository:
```bash
git clone https://github.com/davidlislc/cs1330-intro-to-networks.git
cd cs1330-intro-to-networks
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The server will start on `http://localhost:3000` by default.

### API Endpoints

#### 1. Root Endpoint (GET /)
Returns API documentation and available endpoints.

**Request:**
```bash
curl http://localhost:3000/
```

**Response:**
```json
{
  "message": "Welcome to the CS1330 RESTful API Demo",
  "endpoints": {
    "GET /": "This help message",
    "GET /items": "Get all items",
    "GET /items/:id": "Get a specific item by ID",
    "POST /items": "Create a new item",
    "GET /health": "Health check endpoint"
  }
}
```

#### 2. Health Check (GET /health)
Returns server health status.

**Request:**
```bash
curl http://localhost:3000/health
```

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2025-11-04T02:12:13.762Z"
}
```

#### 3. Get All Items (GET /items)
Retrieves all items from the in-memory storage.

**Request:**
```bash
curl http://localhost:3000/items
```

**Response:**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": 1,
      "name": "Item 1",
      "description": "This is the first item"
    },
    {
      "id": 2,
      "name": "Item 2",
      "description": "This is the second item"
    }
  ]
}
```

#### 4. Get Item by ID (GET /items/:id)
Retrieves a specific item by its ID.

**Request:**
```bash
curl http://localhost:3000/items/1
```

**Response (Success):**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Item 1",
    "description": "This is the first item"
  }
}
```

**Response (Not Found):**
```json
{
  "success": false,
  "error": "Item with ID 99 not found"
}
```

#### 5. Create New Item (POST /items)
Creates a new item in the storage.

**Request:**
```bash
curl -X POST http://localhost:3000/items \
  -H "Content-Type: application/json" \
  -d '{
    "name": "New Item",
    "description": "This is a new item created via POST"
  }'
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Item created successfully",
  "data": {
    "id": 3,
    "name": "New Item",
    "description": "This is a new item created via POST"
  }
}
```

**Response (Validation Error):**
```json
{
  "success": false,
  "error": "Both name and description are required"
}
```

### Testing the API

You can test the API using:

1. **cURL** (command line):
   ```bash
   # GET request
   curl http://localhost:3000/items
   
   # POST request
   curl -X POST http://localhost:3000/items \
     -H "Content-Type: application/json" \
     -d '{"name": "Test Item", "description": "Testing POST"}'
   ```

2. **Web Browser**: 
   - Simply navigate to `http://localhost:3000/` or `http://localhost:3000/items`
   - (POST requests require a tool like Postman or cURL)

3. **Postman** or other API testing tools

### Architecture

This is a simple Node.js/Express microservice that:
- Uses Express.js framework for routing
- Stores data in-memory (array)
- Returns JSON responses
- Uses standard HTTP status codes (200, 201, 400, 404)
- No database or authentication layer for simplicity

### Learning Objectives

This demo helps understand:
- HTTP methods (GET, POST)
- RESTful API design principles
- JSON data format
- HTTP status codes
- Client-server architecture
- API endpoints and routing

### Notes

- Data is stored in memory and will be lost when the server restarts
- No authentication/authorization implemented (not suitable for production)
- This is for educational purposes only

### License

MIT License - See LICENSE file for details
