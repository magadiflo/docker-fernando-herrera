# Siempre iniciamos con el FROM
# Le decimos que usaremos la imagen de node con el tag 19.2-alpine3.16
# En pocas palabras, esta imagen de node está dentro de un SO Linux (alpine)
# Esta versión de Linux (alpine) viene con varias carpetas /usr, /lib, etc. aunque hay
# una carpeta interna que nos interesa, el /app, el cual lo usaremos
# para alojar nuestra aplicación, aunque también podríamos crear nuestro propio directorio
FROM node:19.2-alpine3.16

# Es como si nos estuviéramos moviendo haciendo un cd a la carpeta /app
WORKDIR /app

# app.js package.json: son los archivos que están en la raiz de este Dockefile y que serán copiados.
# La última instrucción (./) será el destino al cual copiaremos, en este caso es nuestro workdir definido, 
# eso significa que los dos archivos se copiarán en el WORKDIR definido (/app). 
# Es decir, el ./ definido aquí abajo es nuestro /app
### COPY app.js package.json ./
# Haremos el copy por separado
COPY package.json ./

# Instalamos las dependencias que requiere nuestro proyecto. 
# El RUN es como ejecutáramos mediante el cmd la instrucción que le sigue: npm install
RUN npm install

#COPY app.js ./

# Como agregamos más directorios y archivos le diremos que copie todo lo que hay en el directorio raíz (/cron-ticker)
# y lo pegue en el WORKDIR de nuestra imagen. Ahora, anteriormente, copiaba también el directorio node_modules, 
# el archivo Dockerfile, pero ahora le agregamos el .dockerignore y dentro de él definimos qué archivos y directorios 
# no queremos que copie (node_modules/, Dockerfile, .dockerignore, etc.). Este comportamiendo es similar al .gitignore
COPY . .

# Realizar testing
RUN npm run test

# Este comando se ejecutará CUANDO SE ARRANQUE UN CONTENEDOR.
# Con este comando CMD le decimos a la imagen de docker, luego de que se empiece a correr un
# contenedor de esta imagen, ejecutarás este comando para iniciar la aplicación.
CMD ["node", "app.js"]
