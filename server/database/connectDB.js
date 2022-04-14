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

  module.exports = dbPool;