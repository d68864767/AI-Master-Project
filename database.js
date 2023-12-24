```javascript
const mongoose = require('mongoose');

// Replace with your MongoDB connection string
const dbURI = 'mongodb://localhost:27017/myproject';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(dbURI, options)
  .then(() => console.log('Database connection established!'))
  .catch(err => console.log('Error connecting to the database: ', err));

module.exports = mongoose;
```

