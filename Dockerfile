# Build stage: compile native dependencies
FROM node:20-slim AS builder
RUN apt-get update && apt-get install -y --no-install-recommends build-essential python3 g++ make && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev

# Runtime stage: clean image without build tools
FROM node:20-slim
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 8096
CMD ["node", "src/index.js"]
