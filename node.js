const { appendFile } = require('fs');
const http = require('http');
const port = 8000;


const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text / plain");
    response.end("Hi/n vbc2x");
})

app.get('/users', (request, response) => {
    // 3 
    response.send([{name: 'Chingis', age :'16'}]);
})


server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})  