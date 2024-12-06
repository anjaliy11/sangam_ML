const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');
const connectDB = require('./models/db-models');
// const apiRoutes = require('./routes/ml');

require('dotenv').config();

const app = express();


connectDB();

app.use(bodyParser.json());


app.use('/api', apiRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
