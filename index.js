const http = require("http");
const { router } = require("./SimpleRouter");
const httpServer = http.createServer();
/** Config Variables */
const PORT = 8080

/** Bussiness logic here */
const onListen = ()=> {
    console.log(`listening on port ${PORT}`)
}

/** Attach event listeners */
httpServer.on("listening",onListen);
httpServer.on("request", router);

httpServer.listen(8080);
