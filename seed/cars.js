var Car = require('../models/cars');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/EcoRide');

var cars = [
    new Car({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        model_name: 'Ritz',
        carId: 10101,
        distanceDriven: 1020,
        category: 'prime',
        capacity: 4,
        year: 2015,
        numberplate: 'DL 1AC 9392',
        insuranceId: 1123
    }),
    new Car({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        model_name: 'Swift',
        carId: 10104,
        distanceDriven: 3020,
        category: 'prime',
        capacity: 5,
        year: 2016,
        numberplate: 'DL 1AC 9811',
        insuranceId: 1126
    }),
    new Car({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        model_name: 'Honda City',
        carId: 10110,
        distanceDriven: 10200,
        category: 'sedan',
        capacity: 5,
        year: 2014,
        numberplate: 'DL 2AC 6191',
        insuranceId: 1023
    })
];

var done = 0;
for(var i = 0; i < cars.length; ++i){
    cars[i].save(function(){
        done++;
        if(done === cars.length){
            exit();
        }
    });//asynch so disconnect ho  jaega pehle
}

function exit(){
    mongoose.disconnect();
}
// mongoose.disconnect();
