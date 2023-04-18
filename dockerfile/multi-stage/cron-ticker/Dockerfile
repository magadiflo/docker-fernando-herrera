# Se usará como imagen uno que tenga node y cuyo S.O. sea alpine de Linux
FROM node:19.2-alpine3.16

# cd a /app
WORKDIR /app

# Copiamos el package.json al workdir (./)
COPY package.json ./

# Instalamos las dependencias. 
RUN npm install

# Copiamos todo (primer punto) al workdir (segundo punto)
COPY . .

# Realizar testing
RUN npm run test

# Eliminar archivos y directorios no necesarios en producción
RUN rm -rf tests && rm -rf node_modules

# Instalamos sólo las dependencias de producción
RUN npm install --prod

# Este comando se ejecutará CUANDO SE ARRANQUE UN CONTENEDOR.
CMD ["node", "app.js"]
