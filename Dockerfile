FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

EXPOSE 8001

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
#  CMD wget -qO- http://localhost:8001/ || exit 1
 CMD node -e "fetch('http://localhost:8001/health').then(res => { if (!res.ok) { process.exit(1); } }).catch(() => process.exit(1));"

CMD ["node", "app.js"]