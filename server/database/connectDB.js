const mysql = require('mysql');

const dbcon = {
    database: "product",
    connectionLimit: 10,
    host: "localhost",
    port: 3306,
    user: "root",
    password: "qlalf1"
  };

  const dbPool = require('mysql').createPool(dbcon);
  

  
const req = {
  async db(alias, param = [], where = '') {
    console.log(sql[alias].query + where);
    console.log(param)
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




  module.exports = dbPool;