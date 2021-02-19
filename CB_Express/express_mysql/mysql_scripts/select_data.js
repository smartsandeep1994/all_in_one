const connection = require('./config');

connection.query( 
    `SELECT * FROM persons`,
    function(err,rows,cols){
        if(err) {
            console.error(err)
        }else{
            console.log(rows);
            console.log(cols)
            // console.log("the fetched data is:");
        }
        connection.close()
    }
)