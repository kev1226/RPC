# gRPC en Node.js

Este proyecto es un ejemplo de cómo implementar un servidor y un cliente gRPC en Node.js. El servidor expone un método `sayHello`, y el cliente realiza una llamada RPC para probar la funcionalidad.

## Pasos para ejecutar el proyecto

### 1. Instala las dependencias

Instala las dependencias:
   ```
   npm install
   ```

Asegúrate de tener Node.js instalado y ejecuta:

```bash
npm install @grpc/grpc-js @grpc/proto-loader
```

### 2. Ejecuta el servidor

```bash
node server.js
```

Verás un mensaje en la consola:
```
Server running at http://localhost:50051
```

### 3. Ejecuta el cliente

En otra terminal, ejecuta:

```bash
node client.js
```

Deberías ver una salida como:
```
Respuesta: { message: 'Hello, Mundo' }
```

## Probar la implementación

- El cliente debería imprimir la respuesta del servidor: `Respuesta: { message: 'Hello, Mundo' }`.

## Estructura del archivo `service.proto`

```proto
syntax = "proto3";

package greeterPackage;

service Greeter {
  rpc sayHello (HelloRequest) returns (HelloReply);
}

message HelloRequest {
  string name = 1;
}

message HelloReply {
  string message = 1;
}
```

---

¡Listo para probar y documentar tu proyecto! ¿Te gustaría que añada más detalles o instrucciones? 😊