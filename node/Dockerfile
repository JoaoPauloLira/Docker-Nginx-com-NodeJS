FROM node:15

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm install express
RUN npm install mysql2

RUN apt update && \
    apt install -y wget netcat && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

EXPOSE 3000


CMD [ "node", "index.js" ]
