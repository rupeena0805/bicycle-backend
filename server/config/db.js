let mongoose = require('mongoose')
const dbPath = 'mongodb+srv://jaspreet:1Jaspreet@student.civhn6j.mongodb.net/bicycleDb'
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(dbPath, options).then(res => {
    console.log("Db Connected")
}).catch(err => {
    console.log("Db Connect Err", err)
})
