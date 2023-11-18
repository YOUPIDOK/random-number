FROM node:20

WORKDIR /app

COPY src src
COPY package.json .
COPY package-lock.json .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]