const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

const db = new Sequelize('codingblocks','root','',{
    host:'localhost',
    dialect:'mysql'
})

const Student = db.define('student',{
    name:{
        type:DataTypes.STRING(40),
        allowNull:false
    },
    age:{
        type:DataTypes.INTEGER(2),
        allowNull:false,
        defaultValue:-1
    }    
})

module.exports = {
    db,Student
}




//db.sync({alter:true})=>alter true for making tables columns key editable alterable
//db.sync({force:true}) => it will delete existing table and create new one
//db.sync() => it will not create existing table

// db.sync({alter:true})
//     .then(()=>console.log('db synced'))
//     .catch((err)=>console.log(err))
