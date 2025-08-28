#!/bin/bash

# Tyler Cyert Portfolio Deployment Script
# This script builds and deploys the portfolio using Docker

set -e

echo "🚀 Starting portfolio deployment..."

# Build the production Docker image
echo "📦 Building production Docker image..."
docker build -t tyler-cyert-portfolio:latest .

# Stop and remove existing container if it exists
echo "🛑 Stopping existing container..."
docker stop tyler-cyert-portfolio 2>/dev/null || true
docker rm tyler-cyert-portfolio 2>/dev/null || true

# Run the new container
echo "🚀 Starting new container..."
docker run -d \
  --name tyler-cyert-portfolio \
  --restart unless-stopped \
  -p 3000:3000 \
  -e NODE_ENV=production \
  tyler-cyert-portfolio:latest

# Wait for the container to be healthy
echo "⏳ Waiting for container to be ready..."
sleep 10

# Check if the container is running
if docker ps | grep -q tyler-cyert-portfolio; then
  echo "✅ Portfolio deployed successfully!"
  echo "🌐 Access your portfolio at: http://localhost:3000"
  echo "📊 Container status:"
  docker ps | grep tyler-cyert-portfolio
else
  echo "❌ Deployment failed!"
  echo "📋 Container logs:"
  docker logs tyler-cyert-portfolio
  exit 1
fi
