FROM node:lts-slim

ENV HOME=/home/app

WORKDIR $HOME/api-triggers

COPY package.json .

RUN npm i

COPY . .

ENTRYPOINT ["npm"]

CMD ["start"]
