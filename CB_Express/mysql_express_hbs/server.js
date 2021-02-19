const express = require('express');
const app = express()
const db = require('./db')

port = 5000
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set("view engine", "hbs")


app.get('/',(req,res) => {
    db.getAllPersons()
        .then((persons)=>{
            res.render('persons', {persons})
        })
        .catch((err)=>{
            // console.error(err)
            res.send(err)
        })
    
})

app.get('/add',(req,res) => {
    res.render('persons_add')
})

app.post('/add',(req,res) => {
    db.addNewPerson(req.body.name, req.body.age, req.body.city)
        .then(()=>{
            res.redirect('/')
        })
        .catch((err)=>{
            res.send(err)
        })
})

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})