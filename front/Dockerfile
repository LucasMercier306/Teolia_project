
# STAGE 1 : Copy all files and build project in the App directory
FROM node:14 AS builder

WORKDIR /app

COPY yarn.lock package.json ./

RUN yarn

COPY . ./

RUN yarn build

# STAGE 2 : Copy projet in an Nginx server
FROM nginx:1.19.0

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/build .

EXPOSE 8080

# Run the front builded
ENTRYPOINT ["nginx", "-g", "daemon off;"]