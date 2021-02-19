const express = require('express');
const app = express()
const path = require('path')

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine", "hbs")

//routing
app.use('/pages',require('./routes/pages').route)
app.use('/api',require('./routes/api').route)
app.use('/',express.static(path.join(__dirname,'public_static')))


port = 5000
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})