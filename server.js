const express = require('express');
const app = express();
const cores = require('cors');
const bodyparser = require('body-parser');


const http = require('http');
const server = http.createServer(app);
app.use(cores());
app.use(express.json());
app.use(bodyparser.json());

// middlewares
const Pythonroute = require('./ServerFiles/Routes/Python');
app.use('/python', Pythonroute);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}`);
})