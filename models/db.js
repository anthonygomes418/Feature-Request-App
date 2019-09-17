const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/EmployeeDB", { useNEWURLParser: true }, (err) =>
| if(!err) { console.log("MongoDB was connected Successful!") }
    else { console.log('Error in MongoDB Connection to the app ' + err) }

);


require("./employee.model");

