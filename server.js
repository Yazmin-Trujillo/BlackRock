const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("restData.json");
const middlewares = jsonServer.defaults({ static: "./build" });
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);