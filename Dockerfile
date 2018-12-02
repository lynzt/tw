FROM node:10.14-alpine

# create app directory
RUN mkdir -p /usr/src/app

# install and cache app dependencies
ADD package.json /tmp/package.json
RUN cd /tmp && npm install

RUN mkdir -p /usr/src/app/node_modules && cp -r /tmp/node_modules/* /usr/src/app/node_modules/

RUN npm install -g mocha

WORKDIR /usr/src/app
COPY . /usr/src/app
