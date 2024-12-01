const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const { WebServer } = require('@improbable-eng/grpc-web');

const PROTO_PATH = './proto/service.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const greeterPackage = protoDescriptor.greeterPackage;

function sayHello(call, callback) {
  callback(null, { message: 'Hello, ' + call.request.name });
}

const server = new grpc.Server();
server.addService(greeterPackage.Greeter.service, { sayHello: sayHello });

const PORT = '50051';
server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


