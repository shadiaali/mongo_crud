//require mongoose
var mongoose = require('mongoose');

//new schema
//objects are specified in curly braces
//strings can be put in arrays
//if data is stored in a date format you can do much more query wise
//Eg, using greater than or less than in the query.
//You can also subtract this date from this date and it’ll give you the number, etc.
//It is a lot more efficient than strings. 
//you can nest arrays and objects

var userSchema = new mongoose.Schema({
    //these required fields need to be there for any user created to protect the integrity of the data. 

    lname: {
        type: String,
        required: [true, 'last name is required']
    },
    fname: {
        type: String,
        required: [true, 'first name is required']
    },
    email: {
        type: String,
        required: [true, 'email is required']
    },
    password: {
        type: String,
        required: [true, 'you need a password']
    },
    age: Number

}, { collection: 'users' });



module.exports = mongoose.model('User', userSchema);