FROM node:19-alpine3.15 AS dev-deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --frozen-lockfile


FROM node:19-alpine3.15 AS builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
# RUN yarn test
RUN yarn build


# nginx:1.23.3, imagen del servidor nginx donde subiremos nuestro proyecto de react (el ya construido).
# --from=builder /app/dist /usr/share/nginx/html, le decimos que use el stage (escenario) llamado builder,
# y de dicho stage que copie los archivos y directorios contenidos en /app/dist y los pegue en el
# directorio de la imagen de nginx (/usr/share/nginx/html)
FROM nginx:1.23.3 AS prod
EXPOSE 80
COPY --from=builder /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
# nginx/nginx.conf, correponde al archivo en nuestra pc local /nginx/nginx.conf
# /etc/nginx/conf.d, corresponde al directorio en la imagen del servidor nginx 
# donde pegará el archivo nginx.conf que copiaremos
COPY nginx/nginx.conf /etc/nginx/conf.d

# Con este comando corrempos nuestra aplicación en nginx
CMD [ "nginx","-g", "daemon off;"]