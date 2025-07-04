# Stage 1: Dependency installation stage
FROM node:21-alpine as dependencies
# Env
ENV NODE_OPTIONS="--max_old_space_size=4096"
WORKDIR /app
COPY package*.json ./
#RUN rm package-lock.json
RUN npm install
# Stage 2: Build stage
FROM dependencies as builder
WORKDIR /app
COPY . .
RUN rm -rf node_modules/.vite
RUN npm run build
# Stage 3: Production stage
FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist .
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]