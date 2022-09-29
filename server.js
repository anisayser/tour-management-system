const mongoose = require('mongoose');
require('dotenv').config();

const app = require('./app');

//Database Connection
mongoose.connect(process.env.DATABASE).then(() => {
    console.log('Connected to the Database.');
})


//Port
const PORT = process.env.PORT || 8000;


app.listen(PORT, () => {
    console.log('Listening to Port', PORT);
})