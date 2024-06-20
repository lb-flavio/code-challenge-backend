# Use the official Node.js image as the base image
FROM node:16-alpine

# Create a directory for the app
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Start the application
CMD ["npm", "run", "start"]
