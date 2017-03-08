# node-docker-kubernetes
Simple example of dockerising a node app, then using kubernetes

## USefule resources:

* dockerise a node app: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

## Instructions

Follow these steps:

### create node app

* create a simple node application, for example that returns 'Hello' on port 8080 using express
* include a package.json with dependencies and a 'start' script. (docker will assume these exist and use them by default)

### Dockerise

* Install docker
* create a Dockerfile. See: https://github.com/thisisdavidbell/node-docker-kubernetes/blob/master/Dockerfile

* create .dockerignore
* build docker image: `docker build -t <name> .`
* verify image exists: `docker images`
* run the docker image: `docker run -p 8081:8080 -d <name>`
* confirm docker image running: `docker ps`
* if not, confirm it exited: `docker ps -a`
* check app output: docker logs <container id from ps>
* invoke node app, on redirected port (8081)
* log into docker container: `docker exec -it <container id> /bin/bash`
