const express = require('express');
const fs = require('fs');
const { resolve } = require('path');

const router = express.Router();

let sql = require('../../dao/user/userSql');    
const dbPool = require('../../database/connectDB');

router.post('/login2/:alias', async (request, res) => {
  try {

    console.log(request.body.param);
    console.log(request.params.alias);
    
        res.send(await req.db(request.params.alias, request.body.param, request.body.where));

  } catch (err) {
    res.status(500).send({
      error: err
    });
  }
});


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




router.get('/login2/userList', function(req, res, next) {

  console.log("/admin/userList start--------------")
  let body = req.query; //get


  const pageNum = Number(req.query.start) || 1; // 쿼리스트링으로 받을 페이지 번호 값, 기본값은 1
  const contentSize = 5; // 페이지에서 보여줄 컨텐츠 수.
  const pnSize = 100; // 페이지네이션 개수 설정.
  const skipSize = (pageNum - 1) * contentSize; // 다음 페이지 갈 때 건너뛸 리스트 개수.

   
  let queryTotalCnt = `select count(*) as totalCount from t_login t1 where t1.AuthorName like '%${body.keyword}%' `;

  console.log(queryTotalCnt);
  
  dbPool.query(queryTotalCnt, (error, data, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }

    const totalCount = Number(data[0].totalCount); // NOTE: 전체 글 개수.
    const pnTotal = Math.ceil(totalCount / contentSize) * 10; // NOTE: 페이지네이션의 전체 카운트
    const pnStart = ((Math.ceil(pageNum / pnSize) - 1) * pnSize) + 1; // NOTE: 현재 페이지의 페이지네이션 시작 번호.
        
    let query = `select userid, AuthorName , email , AdminYN from t_login where DelYN ='N' and AuthorName like '%${body.keyword}%' order by createdate desc LIMIT ${skipSize}, ${contentSize}`;
    
    console.log(query)

    dbPool.query(query, (error, data, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }

      const result = {
        totalCount,
        pnTotal,
        contents: data
      };

      res.send(result)

    });    

  });


});




module.exports = router;