const express = require('express');
const app = express();
const env = require('dotenv').config();
const morgan = require('morgan');

//variables
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(morgan('dev'));


app.listen(PORT, () => {
    console.log(`Server running in the port ${PORT}`);
})
