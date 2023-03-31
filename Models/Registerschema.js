const mongoose = require('mongoose');

const user = mongoose.user({
    name: ({
        type : String
    }),
    email: ({
        type : String
    }),
    password : ({
        type : String
    })
})

const Models = mongoose.model('pro',user)
module.exports = Models;