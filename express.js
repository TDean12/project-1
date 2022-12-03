const { response } = require("express");
const express = require("express");
const { request } = require("http");

const port = 8000;

const app = express();

app.get("/friuts", (request, response) => {
    response.send("use /grapes , /banana , /alim   ")
})

app.get("/grapes", (request, response) => {
    response.send([{ name: 'grapes', price: '30$' }])
})

app.get("/banana", (request, response) => {
    response.send([{ name: 'banana', price: '40$' }])
})

app.get("/alim", (request, response) => {
    response.send([{ name: 'alim', price: '22$' }])
})
app.get("/fruits", (request, response) => {
    response.send([{ name: 'grapes', price: '30$' }, { name: 'banana', price: '40$' }, { name: 'alim', price: '22$' }])
})

// users => 3

app.get("/users", (request, response) =>{
    response.send([{name:'tuugu', age:"12"}, {name:'chingis', age:'11'}, {name:'star', age:'10'}])
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})