const route = require('express').Router()
const db = require('../db')

route.get('/persons',(req,res) => {
    db.getAllPersons()
        .then((persons)=>{
            res.send(persons)
        })
        .catch((err)=>{
            // console.error(err)
            res.send({error:err})
        })

    // to send data after some time    
    // setTimeout(()=>{
    //     db.getAllPersons()
    //     .then((persons)=>{
    //         res.send(persons)
    //     })
    //     .catch((err)=>{
    //         // console.error(err)
    //         res.send({error:err})
    //     })
    // },2000)
    
})

route.post('/persons',(req,res) => {
    db.addNewPerson(req.body.name, req.body.age, req.body.city)
        .then(()=>{
            res.redirect('/api/persons')
        })
        .catch((err)=>{
            res.send({error:err})
        })
})

exports = module.exports = {
    route
}