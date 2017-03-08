FROM node:boron
EXPOSE 8080

# Install dependencies
COPY package.json .
RUN npm install

# Copy over files (ignoring those in .dockerignore)
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]
