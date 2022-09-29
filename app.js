const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv').config();

//middleware
app.use(cors());
app.use(express.json());


//Port
const PORT = process.env.PORT || 8000;
//Database Connection
mongoose.connect(process.env.DATABASE).then(() => {
    console.log('Connected to the Database.');
})

const tourRoutes = require('./routes/tours/v1/tours.route');




app.use('/api/v1/tours', tourRoutes);






app.listen(PORT, () => {
    console.log('Listening to Port', PORT);
})



app.get('/', (req, res) => {
    res.send('Tour management server is running.');
});


module.exports = app;



/* const allTours = [
    {
        name: 'Etiam placerat dictum consequat an pellentesque habitant a.',
        cost: 88.00,
        image: 'https://i.ibb.co/N2RJ3XL/p-alpha1.png'
    },
    {
        name: 'Varius condimentum consequat frin Aenean pretium risus s.',
        cost: 89.00,
        image: 'https://i.ibb.co/T2DQjsp/p-alpha8.png'
    },
    {
        name: 'Praesent sed elit mil In risus nullaam efficitur none d.',
        cost: 99.00,
        image: 'https://i.ibb.co/cYXq32F/p-alpha7.png'
    },
    {
        name: 'Sed ultricies sapien arcu, sed cong feugiat sapien f.',
        cost: 299.00,
        image: 'https://i.ibb.co/CPjRgpy/p-alpha5.png'
    },
    {
        name: 'Pellentesque habitant morbi malesua tristique senectus e.',
        cost: 265.00,
        image: 'https://i.ibb.co/s3tj1Fp/p-alpha3.png'
    },
    {
        name: 'San francisco golden gate bridge, cable & fog e.',
        cost: 199.00,
        image: 'https://i.ibb.co/dcDwm7x/p-alpha2.png'
    },
    {
        name: 'Etiam placerat dictum consequat an pellentesque habitant y.',
        cost: 120.00,
        image: 'https://i.ibb.co/cYXq32F/p-alpha7.png'
    },
    {
        name: 'Varius condimentum consequat frin Aenean pretium risus r.',
        cost: 119.00,
        image: 'https://i.ibb.co/10P31j0/p-alpha4.png'
    },
    {
        name: 'Praesent sed elit mil In risus nullaam efficitur none i.',
        cost: 159.00,
        image: 'https://i.ibb.co/s3tj1Fp/p-alpha3.png'
    },
    {
        name: 'Sed ultricies sapien arcu, sed cong feugiat sapien l.',
        cost: 195.00,
        image: 'https://i.ibb.co/CPjRgpy/p-alpha5.png'
    },
    {
        name: 'Pellentesque habitant morbi malesua tristique senectus m.',
        cost: 142.00,
        image: 'https://i.ibb.co/N2RJ3XL/p-alpha1.png'
    },
    {
        name: 'San francisco golden gate bridge, cable & fog p.',
        cost: 174.00,
        image: 'https://i.ibb.co/T2DQjsp/p-alpha8.png'
    },
] */