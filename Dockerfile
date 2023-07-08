FROM node:latest

WORKDIR /usr/src/node-app

COPY package*.json ./

RUN npm install --omit=dev

COPY build/* ./

CMD [ "node", "app.js" ]

EXPOSE 5001