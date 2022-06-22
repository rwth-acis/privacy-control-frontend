#stage 1
FROM node:14.17.4 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/privacy-control-service-frontend /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80
