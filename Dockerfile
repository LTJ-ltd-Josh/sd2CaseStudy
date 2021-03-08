# base image to use

FROM node:latest

# Create the application directory

WORKDIR /usr/src/app

# install dependencies
# copy across project configuration information

COPY package*.json ./

# Ask NPM to install the dependencies

RUN npm install

# copy across all our files
# copy from current local directory to image working directory
COPY . .

# Expose our application port
EXPOSE 3000

# on start run the applicatoin using npm
ENTRYPOINT [ "npm", "start"]