const Sequelize = require('sequelize')
const db = new Sequelize('codingblocks','root','',{
    host:'localhost',
    dialect:'mysql',
    pool:{
        min:0,
        max:5
    }
})

const User = db.define('users',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    }
})

const Product = db.define('products',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    manufacturer:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    price:{
        type:Sequelize.FLOAT,
        allowNull:false,
        defaultValue:0.0
    },
})

db.sync()
    .then(()=> console.log("db has been synced"))
    .catch((err)=> console.log("error creating database"))

exports = module.exports = {
    User, Product
}