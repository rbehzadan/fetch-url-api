FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y \
        nodejs npm \
        libatk1.0-0 libatk-bridge2.0-0 libcups2 libatspi2.0-0 libxdamage1 \
        libpango-1.0-0 libcairo2 libasound2t64 libnss3 libnspr4 libxkbcommon0 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . .

RUN npm install

RUN npx playwright install firefox

EXPOSE 8080

CMD ["node", "server.js"]
