FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install && mv node_modules ../

COPY . .

RUN npm install -g nodemon

CMD npm run dev
