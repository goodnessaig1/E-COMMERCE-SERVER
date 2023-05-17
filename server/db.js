const mongoose = require('mongoose');

const mongoUrl = "mongodb+srv://goodnessaig1:osemudiame12@cluster0.uhn05xg.mongodb.net/?retryWrites=true&w=majority" 
// "mongodb://goodnessaig1:osemudiame12@ac-1v8qw6d-shard-00-00.uhn05xg.mongodb.net:27017,ac-1v8qw6d-shard-00-01.uhn05xg.mongodb.net:27017,ac-1v8qw6d-shard-00-02.uhn05xg.mongodb.net:27017/?ssl=true&replicaSet=atlas-kce3mr-shard-0&authSource=admin&retryWrites=true&w=majority"
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
mongoose
    .connect(mongoUrl, options)
    .then(() => {
        // eslint-disable-next-line
        return console.log('Mongo connected');
    })
    .catch(err => {
        // mongoose connection error will be handled here
        // eslint-disable-next-line
        console.error('App starting error:', err.stack);
        process.exit(1);
    });

    module.exports = mongoose;