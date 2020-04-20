const express=require('express');

const server = express();
server.use('/static', express.static('static'));

server.listen(6000, () => {
    console.log('server start....');
});