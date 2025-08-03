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

# Build the application
#RUN npm run build

# Expose port 9000 (API port)
EXPOSE 9000

# Start the application
CMD ["npm", "start"]
