FROM node:boron
EXPOSE 8080

# create a working dir
RUN mkdir /usr/hello
WORKDIR /usr/hello

# Copy over files (ignoring those in .dockerignore)
COPY . .

# Install dependencies
RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]
