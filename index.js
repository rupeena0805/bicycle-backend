const express = require('express');
// const db = require('./server/config/db'); // COMMENTED OUT
const cors = require('cors');
const app = express();
const PORT = 9000;

const apiRoutes = require('./server/routes/apiRoutes'); // make sure this file has dummy data

app.use(cors());
app.use(express.static(__dirname + '/server/public/'));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false, parameterLimit: 500000000 }));

app.get('/', (req, res) => {
    res.send('This is Backend of Bicycle Renter/Hirer Server (Dummy Mode)');
});

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log("Server Listening to port", PORT);
    console.log("⚠️ MongoDB disabled — running in Dummy Mode");
});
