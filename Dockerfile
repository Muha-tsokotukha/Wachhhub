# Use an official Node.js runtime as the parent image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the current directory contents into the container
COPY . .

# Install the project's dependencies
RUN npm install

# Install Angular CLI and http-server globally
RUN npm install -g @angular/cli http-server

# Build your Angular app
RUN ng build --configuration production

# Expose port 8080 (default port for http-server)
EXPOSE 8080

# Serve the application's dist directory
CMD ["http-server", "dist/wachhhub"]
