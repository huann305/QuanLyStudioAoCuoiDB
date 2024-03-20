const mongoose = require('mongoose');

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb://localhost:27017/DatabaseXuong', {
    useNewUrlParser: true,
}).then(() => {
    console.log('Successfully connected to MongoDB.');
}).catch(err => {
    console.error('Connection error', err);
});
