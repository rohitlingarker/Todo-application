FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN node utils/populateConfig.js

EXPOSE 4000

CMD ["node", "index.js"]
