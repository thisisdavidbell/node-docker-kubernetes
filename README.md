# node-docker-kubernetes
Simple example of dockerising a node app, then using kubernetes

## Instructions

Follow these steps:

### create node app

* create a simple node application, for example that returns 'Hello' on port 8080 using express
* include a package.json with dependencies and a 'start' script. (docker will assume these exist and use them by default)

### Dockerise

* Install docker
* create a Dockerfile:
```
FROM node:boron
EXPOSE 8080

# Install dependencies
COPY package.json .
RUN npm install

# Copy over files (ignoring those in .dockerignore)
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]
```
* create .dockerignore
* build docker image: `docker build -t <name> .
* verify image exists: `docker images`
* run the docker image: `docker run -p 8081:8080 -d <name>`
