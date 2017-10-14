var Car = require('../models/cars');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/EcoRide');

var cars = [
    new Car({
        imagePath: 'https://img.gaadicdn.com/car-images/carexteriorimages/large/Maruti/Maruti-Ritz/front-right-view-120.jpg',
        modelName: 'Maruti Ritz',
        carId: 10101,
        distanceDriven: 1000,
        category : 'normal',
        capacity : 4,
        dateofMfd: '23/04/2015',
        numberplate: 'DL 1AF 8139',
        price: 450000
    }),
    new Car({
        imagePath: 'https://media.zigcdn.com/media/model/2017/May/sift_600x300.jpg',
        modelName: 'Maruti Swift',
        carId: 10103,
        distanceDriven: 3000,
        category : 'prime',
        capacity : 5,
        dateofMfd: '23/04/2013',
        numberplate: 'DL 2AC 4157',
        price: 550000
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
