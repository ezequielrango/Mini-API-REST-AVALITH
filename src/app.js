const express = require('express');
const app = express();
const env = require('dotenv').config();
const morgan = require('morgan');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running in the port ${PORT}`);
})
