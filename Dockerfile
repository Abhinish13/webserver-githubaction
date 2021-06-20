FROM node:12-stretch

EXPOSE 3000

COPY . /app

WORKDIR /app

CMD ["npm", "start"]
