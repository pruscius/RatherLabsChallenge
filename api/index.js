const server = require("./src/server.js");

server.listen(process.env.PORT || 3001, () => {
    console.log("Server Running");
})
