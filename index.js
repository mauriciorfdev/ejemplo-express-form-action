const express = require('express')

const app = express()
app.use( express.json() )
app.use( express.urlencoded({extended:false}) )

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('index.html');
})
app.post('/', (req, res)=>{
    /* const data = req.body;
    res.send(data); */
    res.redirect('/');
})

app.listen(PORT, ()=>{console.log(`Server listen on ${PORT}` );})