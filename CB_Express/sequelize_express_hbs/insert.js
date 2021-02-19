const {db,Student} = require('./model')

const task = async () => {
    try {
        await db.sync()
        await Student.create({
            name:(['Tom','Dick','harry','ram','shyam','nancy',
                    'sally','neha','shalini','Thomas'])[parseInt(Math.random() * 10)],
            age:10 + parseInt(Math.random() * 10)
        })
    } catch (error) {
        console.log(error)
    }
}
task();