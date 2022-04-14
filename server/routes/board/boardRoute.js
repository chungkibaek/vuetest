const express = require('express');
const fs = require('fs');
const { resolve } = require('path');
const { noticeDetail } = require('../../dao/board/boardSql');
//  const app = express();
const router = express.Router();

let sql = require('../../dao/board/boardSql');    
const dbPool = require('../../database/connectDB');


router.get('/notice/noticeList', function(req, res, next) {

  //'http://sample.bmaster.kro.kr/contacts?pageno=' + currentPag + '&pagesize=' + this.perPage
  let where = ''
  let body = req.query; //get
  
	 if(body.keyword) where += ` where t1.boardseq like '%${body.keyword}%' `; 
   
   console.log(body);

   // 쿼리 날려서 가져오기
  let query = 'select t1.BoardSeq,t1.BoardTypeID, t1.title, t1.AuthorName, t1.CreateDate from t_board t1 ' + where

  console.log(query);

  dbPool.query(query, (error, data, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }

     res.send(data);
  });
});

router.get('/notice/noticeList2', function(req, res, next) {

  let where = ''
  let body = req.query; //get
  
	//  if(body.keyword) where += ` where t1.boardseq like '%${body.keyword}%' `; 
   
   console.log(body);
  //  const tmpkeyword = getNoticeList  || '';
   let start = body.start - 1
   let end = 0

   console.log('start---' + start);
   console.log('end---' + end);

   // 쿼리 날려서 가져오기
  let query = `select t1.BoardSeq,t1.BoardTypeID, t1.title, t1.AuthorName, t1.CreateDate from t_board t1 where t1.title like '%${body.keyword}%' order by createdate desc LIMIT ${start}, ${body.end}`;

  console.log(query);
  
  dbPool.query(query, (error, data, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }

     res.send(data);
  });
});

router.get('/notice/noticeAllCount', function(req, res, next) {

  let body = req.query; //get
   
   console.log(body);  

  let query = `select count(*) as totalCount from t_board t1 where t1.title like '%${body.keyword}%' `;

  console.log(query);
  
  dbPool.query(query, (error, data, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }

    //res.send({ name: 'Minsu' })
    res.send(data)
  });
});




router.get('/notice/noticeListNew', function(req, res, next) {

  console.log("start--------------")
  let body = req.query; //get


  const pageNum = Number(req.query.start) || 1; // 쿼리스트링으로 받을 페이지 번호 값, 기본값은 1
  const contentSize = 5; // 페이지에서 보여줄 컨텐츠 수.
  const pnSize = 100; // 페이지네이션 개수 설정.
  const skipSize = (pageNum - 1) * contentSize; // 다음 페이지 갈 때 건너뛸 리스트 개수.

   
  let queryTotalCnt = `select count(*) as totalCount from t_board t1 where t1.title like '%${body.keyword}%' `;

  console.log(queryTotalCnt);
  
  dbPool.query(queryTotalCnt, (error, data, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }

    const totalCount = Number(data[0].totalCount); // NOTE: 전체 글 개수.
    const pnTotal = Math.ceil(totalCount / contentSize) * 10; // NOTE: 페이지네이션의 전체 카운트
    const pnStart = ((Math.ceil(pageNum / pnSize) - 1) * pnSize) + 1; // NOTE: 현재 페이지의 페이지네이션 시작 번호.
        
    let query = `select t1.BoardSeq,t1.BoardTypeID, t1.title, t1.AuthorName, t1.CreateDate, t1.Contents from t_board t1 where t1.BoardTypeID = '${body.boardtype}' and t1.title like '%${body.keyword}%' order by createdate desc LIMIT ${skipSize}, ${contentSize}`;
    
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

//noticeDetailInfo



router.post('/notice2/:alias', function(req, res, next) {
  console.log("noticeDetailInfo--------------")
   
  console.log(req.body.name);
  console.log('query:' +  req.data);  //request.body.param 
      // console.log('alias:' + req.params.alias);  

  // let query = `select count(*) as totalCount from t_board t1 where t1.title `;

  // console.log(query);
  
  dbPool.query(sql[request.params.alias].query, (error, data, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }

    //res.send({ name: 'Minsu' })
    res.send(data)
  });
});


router.post('/notice/:alias', async (request, res) => {
  try {

    console.log(request.body.param);
    console.log(request.params.alias);

        // res.send(await req.db(request.params.alias));       
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






/*
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



app.post('/notice/:alias', async (request, res) => {
    try {
          res.send(await req.db(request.params.alias));       
          res.send(await req.db(request.params.alias, request.body.param, request.body.where));

    } catch (err) {
      res.status(500).send({
        error: err
      });
    }
  });


  
app.get('/notice/noticeDetail', async (request, res) => {
  try {
       res.send(await req2.db(noticeDetail));       
  } catch (err) {
    res.status(500).send({
      error: err
    });
  }
});

app.get('/', (req, res) => {
	res.send('Hello Node.jsdddddddddddddddd!');
});


*/


module.exports = router;