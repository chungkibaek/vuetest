const express = require('express');
const fs = require('fs');
// const app = express();
const app = express.Router();

let sql = require('../../dao/product/productSql');    
const dbPool = require('../../database/connectDB');

const req = {
    async db(alias, param = [], where = '') {
      return new Promise((resolve, reject) => dbPool.query(sql[alias].query + where, param, (error, rows) => {
        if (error) {
          if (error.code != 'ER_DUP_ENTRY')
            console.log(error);
          resolve({
            error
          });
        } else resolve(rows);
      }));
    }
  };



app.post('/api/:alias', async (request, res) => {
    try {
       res.send(await req.db(request.params.alias));       

    } catch (err) {
      res.status(500).send({
        error: err
      });
    }
  });


app.get('/', (req, res) => {
	res.send('Hello Node.jsdddddddddddddddd!');
});

app.get('/product', (req, res) => {
	res.send('tsess');
});


app.get('/test', (req, res) => {
	res.send('aaaaaaaaaaa');
});



module.exports = app;