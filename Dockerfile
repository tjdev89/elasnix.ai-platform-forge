FROM node:22-slim AS build
WORKDIR /app

COPY package.json package-lock.json* bun.lock* ./
RUN npm ci || npm install

COPY . .
RUN npm run build && node scripts/docker-static-index.mjs


FROM node:22-slim AS runtime
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8080

COPY package.json package-lock.json* bun.lock* ./
RUN npm ci || npm install

COPY --from=build /app/dist ./dist

EXPOSE 8080
CMD ["npx", "wrangler", "dev", "--local", "--ip=0.0.0.0", "--port=8080", "--config=dist/server/wrangler.json"]

