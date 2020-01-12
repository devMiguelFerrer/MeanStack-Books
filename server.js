const http = require('http');
const app = require('./backend');

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));