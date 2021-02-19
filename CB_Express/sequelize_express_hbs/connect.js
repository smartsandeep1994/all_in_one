const Sequelize = require('sequelize')

const db = new Sequelize('codingblocks','root','',{
    host:'localhost',
    dialect:'mysql'
})

db.authenticate()
    .then(()=>console.log("connection succesful"))
    .catch((err)=>console.log(err))