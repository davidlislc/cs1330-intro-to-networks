#!/bin/bash
# Example script demonstrating how to interact with the RESTful API

echo "==================================="
echo "CS1330 RESTful API Demo Examples"
echo "==================================="
echo ""
echo "Make sure the server is running with: npm start"
echo ""

# Wait for user to confirm
read -p "Press Enter when the server is running on http://localhost:3000..."

echo ""
echo "1. Getting API documentation:"
echo "   Command: curl http://localhost:3000/"
curl -s http://localhost:3000/ | jq .
echo ""

echo "2. Checking server health:"
echo "   Command: curl http://localhost:3000/health"
curl -s http://localhost:3000/health | jq .
echo ""

echo "3. Getting all items (GET request):"
echo "   Command: curl http://localhost:3000/items"
curl -s http://localhost:3000/items | jq .
echo ""

echo "4. Getting a specific item by ID (GET request):"
echo "   Command: curl http://localhost:3000/items/1"
curl -s http://localhost:3000/items/1 | jq .
echo ""

echo "5. Creating a new item (POST request):"
echo "   Command: curl -X POST http://localhost:3000/items -H 'Content-Type: application/json' -d '{\"name\": \"Example Item\", \"description\": \"Created via example script\"}'"
curl -s -X POST http://localhost:3000/items \
  -H "Content-Type: application/json" \
  -d '{"name": "Example Item", "description": "Created via example script"}' | jq .
echo ""

echo "6. Verifying the new item was added:"
echo "   Command: curl http://localhost:3000/items"
curl -s http://localhost:3000/items | jq .
echo ""

echo "7. Testing error handling - requesting non-existent item:"
echo "   Command: curl http://localhost:3000/items/999"
curl -s http://localhost:3000/items/999 | jq .
echo ""

echo "8. Testing validation - POST without required fields:"
echo "   Command: curl -X POST http://localhost:3000/items -H 'Content-Type: application/json' -d '{\"name\": \"Only Name\"}'"
curl -s -X POST http://localhost:3000/items \
  -H "Content-Type: application/json" \
  -d '{"name": "Only Name"}' | jq .
echo ""

echo "==================================="
echo "Demo completed!"
echo "==================================="
