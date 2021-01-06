FROM node:12

RUN apt-get update && apt-get install -y build-essential && apt-get install -y python && apt-get install -y zip

RUN npm install -g typescript
WORKDIR app/

ADD package*.json ./

RUN npm install

ADD . .

EXPOSE 8071

RUN npm run build

CMD [ "node", "./www/server.js" ]