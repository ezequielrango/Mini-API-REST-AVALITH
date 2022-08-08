const express = require('express');
const app = express();
const env = require('dotenv').config();
const morgan = require('morgan');

//variables
const PORT = process.env.PORT || 3000;
const v1SocialApp = require('./v1/routes');
// middlewares
app.use(express.json());
app.use(morgan('dev'));

//routes

app.use('/api/v1/',v1SocialApp );

app.listen(PORT, () => {
    console.log(`Server running in the port ${PORT}`);
})
