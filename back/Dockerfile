FROM node:alpine

WORKDIR /app

COPY ./package*.json /app/

RUN npm install

COPY . .

CMD ["node" , "index.js"]

EXPOSE 3000