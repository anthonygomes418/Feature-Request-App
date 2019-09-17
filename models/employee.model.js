const mongoose = require('mongoose');

var EmployeeSchema = new mongoose.Schema({

        Title: {

            type: String
        },

        Description : {
            type: String
        },

        Client: {

            type: String
        },

        Client Priority: {

            type: Integer
        },

        Target Date: {

            type: String
        },

        Product Area: {

            type: String
        },

});


// Custom validation for email
employeeSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

mongoose.model('Employee', employeeSchema);



