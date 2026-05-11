FROM node:24

RUN mkdir /var/app
COPY backend  /var/app/backend
COPY game /var/app/game

WORKDIR /var/app/game
RUN npm install
RUN npm run build
RUN rm -rf /var/app/game

WORKDIR /var/app/backend
RUN npm install

CMD ["npm", "start"]