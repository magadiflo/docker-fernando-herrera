# A esta primera etapa o stage, le asignaremos un alias llamado dependencias (deps)
# Dependencias de desarrollo
#############################################################################
FROM node:19.2-alpine3.16 AS deps
# cd a /app
WORKDIR /app
# Copiamos el package.json al workdir (./)
COPY package.json ./
# Instalamos las dependencias. 
RUN npm install


# Siempre que inicie con un FROM indicamos una nueva etapa (stage)
# Build y Tests
#############################################################################
FROM node:19.2-alpine3.16 AS builder
WORKDIR /app
# --from=desp, le decimos que el origen de donde copiará está en la imagen o el stage con alias deps.
# /app/node_modules, dentro de dicho stage (deps) se vaya al directorio /app/node_modules para copiar.
# ./node_modules, el destino donde copiará los archivos será en el workdir de este nuevo stage directorio de node_modules.
COPY --from=deps /app/node_modules ./node_modules
# Copiar todo lo que está en el host (local) (recordar los archivos ignorados en .dockerignore) y pegarlos en el 
# workdir (/app) del stage builder
COPY . .
# Realizar testing
RUN npm run test


# Stage para generar dependencias de producción
# Dependencias de producción
#############################################################################
FROM node:19.2-alpine3.16 AS prod-deps
WORKDIR /app
COPY package.json ./
RUN npm install --prod


# Stage final - creando imagen final
# Ejecutar la App
#############################################################################
FROM node:19.2-alpine3.16 AS runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY app.js ./
COPY tasks/ ./tasks
# Este comando se ejecutará CUANDO SE ARRANQUE UN CONTENEDOR.
CMD ["node", "app.js"]
