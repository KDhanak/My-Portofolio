FROM node:21-alpine

WORKDIR /app

COPY package.json /app/package.json

COPY package-lock.json /app/package-lock.json

COPY . /app

RUN npm install

EXPOSE 3000
