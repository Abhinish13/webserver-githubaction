FROM node:12-stretch

COPY . /app

WORKDIR /app

CMD ["npm", "start"]
