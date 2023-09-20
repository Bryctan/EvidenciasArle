const express = require('express');
const app = express();
const axios = require('axios')
const responseTime = require('response-time')
const redis = require("redis")
const port = 10101

app.use(responseTime())

const client = redis.createClient()


app.get('/character', async (req,res)=> {
    await client.connect()
    const response = await axios.get('https://rickandmortyapi.com/api/character')

    client.set('character',JSON.stringify(response.data),(err,reply) => {
        if (err) console.log(err);
        console.log(reply);
    })
    res.send(response.data)
});

app.get('/redis', async (req,res)=> {
    await client.connect()
    const response = await client.get('character')
    res.send(response)
});

app.listen(port, ()=>{
    console.log(`Servidor corriendo en http://localhost:${port}/`);
})