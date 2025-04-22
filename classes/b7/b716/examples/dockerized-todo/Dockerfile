FROM node:22

RUN mkdir /var/app
ADD backend /var/app/backend
ADD frontend /var/app/frontend

WORKDIR /var/app/frontend
RUN npm install
RUN npm run build

WORKDIR /var/app/backend
RUN npm install

CMD ["npm", "start"]