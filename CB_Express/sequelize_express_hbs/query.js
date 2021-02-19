const {db,Student} = require('./model')

const task = async () => {
    try {
        await db.sync()
        const students= await Student.findAll({
            // where: {age:  20},
            order:[
                ['age','DESC']
            ]
        })
        // console.log(students);
        students.forEach(student => console.log(student.dataValues))
        
    } catch (error) {
        console.error(error)
    }
}
task();