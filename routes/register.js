var express = require('express')

// const register = require('../Models/Registerschema');
const register = require('../Models/Registerschema')
const { model } = require('mongoose');
const { Route } = require('express');
var router = express.Router();


router.post('/' , async function (req, res, next) {
    try {
        data = await register.create(req.body)
        console.log(data);
        res.status(201).json({
            status: 'success',
            data
        })
    }
    catch (error) {
        console.log(error);
    }
})
module.exports = router
