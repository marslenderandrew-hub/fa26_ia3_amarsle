# ---- Build stage: install everything and build the React app ----
FROM node:22-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ---- Runtime stage: only what the Express server needs ----
FROM node:22-slim
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm install --omit=dev
COPY --from=build /app/dist ./dist
COPY server ./server
COPY src/data ./src/data
# Cloud Run sets PORT (default 8080)
EXPOSE 8080
CMD ["node", "server/server.js"]
