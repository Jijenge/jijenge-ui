const express = require('express');
const path = require('path');

const server = express();
const PORT = process.env.PORT || 3000

server.use(express.static(path.join(__dirname, '../client/public')));

server.listen(PORT, () => console.log('serving static files on port ', PORT));
