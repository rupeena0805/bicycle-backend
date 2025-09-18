let mongoose = require('mongoose')
const dbPath = 'mongodb+srv://Raj:Jalandhar123@cluster0.fddd12w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(dbPath, options).then(res => {
    console.log("Db Connected")
}).catch(err => {
    console.log("Db Connect Errr", err)
})
