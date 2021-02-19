const connection = require('./config');

const insert = {
    name: process.argv[2],
    age:  parseInt(process.argv[3]),
    city: process.argv[4]
}

connection.query( 
    `INSERT INTO persons (name,age,city) VALUES(
        '${insert.name}',
        ${insert.age},
        '${insert.city}'
    )`,
    function(err,results){
        if(err) {
            console.error(err)
        }else{
            console.log(results);
            
            console.log("data inserted suceesfully");
        }
        connection.close()
    }
)