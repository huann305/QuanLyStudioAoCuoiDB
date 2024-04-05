const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://bahuan305:bahuan305@databasexuong.lgfudox.mongodb.net/DatabaseXuong?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(response=>{
    console.log('MongoDB Connection Succeeded.')
}).catch(error=>{
    console.log('Error in DB connection: ' + error)
});