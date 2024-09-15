FROM node:18-alpine

# Set the working directory
WORKDIR /src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your application
COPY . .

# Expose the application port
EXPOSE 3001

# Start the backend server
CMD ["npm", "start"]
