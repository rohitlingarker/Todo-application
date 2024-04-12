# Use the official Node.js image as a base
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Run the script to populate config.json
RUN node utils/populateConfig.js

# Expose the port your app runs on
EXPOSE 4000

# Command to run the application
CMD ["node", "index.js"]
