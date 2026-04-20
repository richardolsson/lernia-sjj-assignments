FROM node:24

RUN mkdir /var/app
ADD backend /var/app/backend
ADD frontend /var/app/frontend

RUN cd /var/app/frontend && npm install && npm run build

WORKDIR /var/app/backend
RUN npm install

CMD [ "npm", "start" ]