const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = './proto/service.proto';

// Cargar el archivo .proto
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

// Cargar el paquete
const greeterPackage = grpc.loadPackageDefinition(packageDefinition).greeterPackage;

// Verifica si greeterPackage es una definición válida y si contiene el servicio esperado
console.log(greeterPackage);

// Crear el cliente
const client = new greeterPackage.Greeter('localhost:50051', grpc.credentials.createInsecure());

// Realizar una llamada de prueba
client.sayHello({ name: 'Mundo' }, (error, response) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Respuesta:', response);
  }
});
