const io = require('socket.io')();
const port = 8000;
io.listen(port);
console.log(`Listening on port: ${port}`);
io.on('conenction', (client) => {

});
