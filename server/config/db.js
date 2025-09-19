// // db.js
// const mongoose = require('mongoose');
// require('dotenv').config();

// // Use your SRV URI from Atlas
// const dbPath = process.env.MONGO_URI || 'mongodb+srv://Raj:Jalandhar123@cluster0.fddd12w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// mongoose.connect(dbPath, options)
//   .then(() => {
//     console.log('✅ Db Connected');
//   })
//   .catch(err => {
//     console.error('❌ Db Connect Err', err);
//   });
console.log('⚠️ MongoDB disabled — backend running without DB');
