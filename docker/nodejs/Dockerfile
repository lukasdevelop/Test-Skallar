FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm init -y

RUN npm install

COPY . .

EXPOSE 3000
