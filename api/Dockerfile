# Use official Node.js image with Alpine
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN node -v
RUN npm install

# Copy all files
COPY . .

# Expose port 3001 (common Node.js API port)
EXPOSE 3001

# Start the application
CMD ["npm", "start"]
