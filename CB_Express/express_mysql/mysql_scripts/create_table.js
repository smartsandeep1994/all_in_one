const connection = require('./config');

connection.query( 
    `CREATE TABLE IF NOT EXISTS persons (
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        age INTeGER NOT NULL,
        city VARCHAR(50))`,
    function(err,results){
        if(err) {
            console.error(err)
        }else{
            console.log("table created suceesfully");
        }
        connection.close()
    }
)