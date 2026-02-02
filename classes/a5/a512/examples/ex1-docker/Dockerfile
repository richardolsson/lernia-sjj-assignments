FROM node

RUN mkdir /var/app
COPY ./src /var/app/src
COPY ./index.js /var/app/index.js
COPY ./package.json /var/app/package.json
COPY ./package-lock.json /var/app/package-lock.json
COPY ./templates /var/app/templates
COPY ./static /var/app/static

WORKDIR /var/app

RUN npm install

CMD ["npm", "start"]
