const mongoose = require('mongoose');

//connect to DB
mongoose.connect(
  'mongodb+srv://ppratiksharma2000:test_pwd@cluster0.d46hvsc.mongodb.net/Demodb?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to db'));

db.once('open', function () {
  console.log('Successfully connected to db');
});
