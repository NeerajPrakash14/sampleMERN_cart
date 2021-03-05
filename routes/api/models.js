const express = require('express');
const router = express.Router();
const request = require('request');

const model_json = {
    "cars": 
    [
        {
         "id":1,
         "name": "Renault",
         "model":" ZOE ZE50",
         "efficiency": "17kWh",
         "price" : "$450/month",
         "min_months":"6 months",
         "features":" 5 seats, 5 doors, front, 140 mph, Titanium Grey",
         "charging":"85kW",
         "range":"100 miles"
         
     },
     {
         "id":2,
         "name": "2020 MG",
         "model":" ZS EV",
         "price" : "$450/month",
         "min_months":"6 months",
         "features":" 5 seats, 5 doors, front, 140 mph, Titanium Grey",
         "charging":"85kW",
         "range":"100 miles"
     },
     {
         "id":3,
         "name": "Renault ZOE ZE50",
         "efficiency": "17kWh",
         "price" : "$450/month",
         "min_months":"6 months",
         "features":" 5 seats, 5 doors, front, 140 mph, Titanium Grey",
         "charging":"85kW",
         "range":"100 miles"
     },
     {
         "id":4,
         "name": "2020 MG",
         "model":" ZS EV",
         "efficiency": "17kWh",
         "price" : "$450/month",
         "min_months":"6 months",
         "features":"5 seats, 5 doors, front, 87 mph, Black Pearl",
         "charging":"85kW",
         "range":"100 miles"
         
     },
     {
         "id":5,
         "name": "Nissan",
         "model":"leaf",
         "efficiency": "17kWh",
         "price" : "$450/month",
         "min_months":"6 months",
         "features":"5 seats, 5 doors, front, 87 mph, Black Pearl",
         "charging":"85kW",
         "range":"100 miles"
     },
     {
         "id":6,
         "name": "Nissan",
         "model":"leaf",
         "efficiency": "17kWh",
         "price" : "$450/month",
         "min_months":"6 months",
         "features":"5 seats, 5 doors, front, 87 mph, Black Pearl",
         "charging":"85kW",
         "range":"100 miles"
     },
     {
         "id":7,
         "name": "Renault",
         "model":"ZOE",
         "efficiency": "17kWh",
         "price" : "$450/month",
         "min_months":"6 months",
         "features":"5 seats, 5 doors, front, 87 mph, Black Pearl",
         "charging":"85kW",
         "range":"100 miles"
     },
     {
         "id":8,
         "name": "Renault",
         "model":"ZOE",
         "efficiency": "17kWh",
         "price" : "$450/month",
         "min_months":"6 months",
         "features":" 5 seats, 5 doors, front, 140 mph, Titanium Grey",
         "charging":"85kW",
         "range":"100 miles"
     },
     {
         "id":9,
         "name": "Renault",
         "model":"ZOE",
         "efficiency": "17kWh",
         "price" : "$450/month",
         "min_months":"6 months",
         "features":" 5 seats, 5 doors, front, 140 mph, Titanium Grey",
         "charging":"85kW",
         "range":"100 miles"
     } ,
     {
         "id":10,
         "name": "Renault ",
         "model" : "ZOE ZE50",
         "efficiency": "17kWh",
         "price" : "$450/month",
         "min_months":"6 months",
         "features":" 5 seats, 5 doors, front, 140 mph, Titanium Grey",
         "charging":"85kW",
         "range":"100 miles"
     }
 ]
 
 }

router.get('/models', (req, res) => {

    console.log("MyModel API success ");
    return res.status(200).json(model_json);

});


module.exports = router;