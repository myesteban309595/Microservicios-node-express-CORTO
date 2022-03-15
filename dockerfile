#Get node image from dockerhub
FROM node:12-alpine
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "app.js"]

# para ejecutar docker build -t docker-node .
# para ver las imagenes docker images
# docker run -p 3000:8080 