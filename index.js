const express = require('express')

const app = express()
app.use( express.json() )
app.use( express.urlencoded({extended:false}) )

const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send('GET Request...');
})
app.post('/', (req, res)=>{
    res.send('POST Request...');
})

app.listen(PORT, ()=>{console.log(`Server listen on ${PORT}` );})