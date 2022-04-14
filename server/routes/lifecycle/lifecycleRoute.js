const express = require('express');
const app = express();


app.get('/list', (req, res) => {
	res.send('Hello lifecycle!');
});




module.exports = app;