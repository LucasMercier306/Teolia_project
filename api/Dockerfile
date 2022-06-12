
FROM node:10-alpine

RUN mkdir -p /app/node_modules && chown -R node:node /app

WORKDIR /app

COPY package*.json ./

USER node
# Install dependencies
RUN npm install

# Set project to port 3OOO
EXPOSE 3000

# Command to run the API
CMD [ "npm", "start" ]