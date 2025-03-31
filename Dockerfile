FROM node:22.11.0-slim as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build -- --output-path=dist/gml-ui

FROM node:22.11.0-slim
WORKDIR /usr/app
COPY --from=build /app/dist/gml-ui ./dist
COPY server ./server
EXPOSE 4000
CMD ["node", "server/server.mjs"]
