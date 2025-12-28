FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
# Ensure proto folder is included at root
# It is already copied with COPY . .
EXPOSE 3000
CMD ["node", "dist/main.js"]
