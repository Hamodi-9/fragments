# Dockerfile for fragments microservice
# This file defines instructions for building a Docker image

# Use node version 18.13.0
FROM node:18.13.0

# Metadata about the image
LABEL maintainer="Kim Lee <klee@example.com>"
LABEL description="Fragments node.js microservice"

# Set environment variables
ENV PORT=8080
ENV NPM_CONFIG_LOGLEVEL=warn
ENV NPM_CONFIG_COLOR=false

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json /app/

# Install node dependencies defined in package-lock.json
RUN npm install

# Copy src to /app/src/
COPY ./src ./src

# Expose the port our service runs on
EXPOSE 8080

# Start the container by running our server
CMD npm start

# Copy our HTPASSWD file
COPY ./tests/.htpasswd ./tests/.htpasswd
