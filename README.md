# Node - vs - Java

Se han creado dos aplicaciones de prueba con la misma funcionalidad que permite comparar el rendimiento de un lenguaje para los siguientes casos de uso:

1. Acceso a bases de datos MongoDB para recuperar 10 registros.
2. Acceso a bases de datos MongoDB para realizar una búsqueda.
3. Acceso a ficheros para escritura de información.

## Instalación

Es necesario en ambos casos disponer de una base de datos MongoDB. Para realizar una prueba sin latencia de red se ha partido de una base de datos MongoDB portable que se puede descargar desde el siguiente enlace:

https://github.com/lightchpa/MongoDBPortable/releases/tag/v0.4.0.1

### Nodejs

Para iniciar el proceso basado en nodejs basta con realizar los siguientes pasos:

1. Descargar los fuentes del repositorio git.
2. Acceder al directorio llamado node.
3. Ejecutar el siguiente comando `npm install`.
4. Ejecutar el siguiente comando `npm start`.
5. El proceso se habrá iniciado en el puerto 4000. Para validarlo acceder a la url: [http://localhost:4000/](http://localhost:4000/)
 

### Java

Para iniciar el proceso basado en java basta con realizar los siguientes pasos:

1. Descargar los fuentes del repositorio git.
2. Acceder al directorio llamado java.
3. Ejecutar el siguiente comando `mvn install`.
4. Ejecutar el siguiente comando `npm start`.
5. El proceso se habrá iniciado en el puerto 4000. Para validarlo acceder a la url: [http://localhost:4000/](http://localhost:4000/)
