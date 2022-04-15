const express = require('express');
const fs = require('fs');
const { resolve } = require('path');
const { noticeDetail } = require('../../dao/board/boardSql');
//  const app = express();
const router = express.Router();

let sql = require('../../dao/board/boardSql');    
const dbPool = require('../../database/connectDB');
const reqQuery = require('../../database/query');

router.get('/itemlist', function(req, res, next) {

  console.log("itemlist start--------------")
  let body = req.query; //get

  const pageNum = Number(req.query.start) || 1; // 쿼리스트링으로 받을 페이지 번호 값, 기본값은 1
  const contentSize = 5; // 페이지에서 보여줄 컨텐츠 수.
  const pnSize = 100; // 페이지네이션 개수 설정.
  const skipSize = (pageNum - 1) * contentSize; // 다음 페이지 갈 때 건너뛸 리스트 개수.

   
  let queryTotalCnt = `select count(*) as totalCount from tb_item t1 where delyn  = 'N' and t1.title like '%${body.keyword}%' `;

  console.log(queryTotalCnt);
  
  dbPool.query(queryTotalCnt, (error, data, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }

    const totalCount = Number(data[0].totalCount); // NOTE: 전체 글 개수.
    const pnTotal = Math.ceil(totalCount / contentSize) * 10; // NOTE: 페이지네이션의 전체 카운트
    const pnStart = ((Math.ceil(pageNum / pnSize) - 1) * pnSize) + 1; // NOTE: 현재 페이지의 페이지네이션 시작 번호.
        
    //let query = `select t1.BoardSeq,t1.BoardTypeID, t1.title, t1.AuthorName, t1.CreateDate, t1.Contents from t_board t1 where t1.BoardTypeID = '${body.boardtype}' and t1.title like '%${body.keyword}%' order by createdate desc LIMIT ${skipSize}, ${contentSize}`;

    let query = `
                select sub1.itemid, sub1.seqid, sub1.title, concat(startdate , '~', enddate) as termdate, sub1.status, sub1.createdate , sub1.cnt
                from 
                (
                    select itemid, seqid, title,
                    DATE_FORMAT(startdate , "%Y-%m-%d")  as startdate,
                    DATE_FORMAT(enddate , "%Y-%m-%d")  as enddate,
                    case when t1.tempyn  = 'Y' then 'temp'
                        when 
                            (	
                                TIMESTAMPDIFF(day,startdate ,now()) >=0 
                                and
                                TIMESTAMPDIFF(day,enddate ,now()) <=0
                            ) then 'going'		
                        when 	TIMESTAMPDIFF(day,startdate ,now()) < 0 then 'prev'		 
                        else 'close' end status	
                    , cratedate as createdate,
                    (select count(*) from tb_subject ts where ts.itemid  = t1.itemid) as cnt
                    from tb_item t1 where delyn  = 'N'
                ) as sub1
                where sub1.title like '%${body.keyword}%'
                order by sub1.seqid desc, sub1.createdate desc
                LIMIT ${skipSize}, ${contentSize}
                `;

    
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

//test
router.post('/api/:alias', function(req, res, next) {
  console.log("noticeDetailInfo--------------")
   
  console.log(req.body.name);
  console.log('query:' +  req.data);  //request.body.param 
  
  dbPool.query(sql[request.params.alias].query, (error, data, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }

    //res.send({ name: 'Minsu' })
    res.send(data)
  });
});


router.post('/api/:alias', async (request, res) => {
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



module.exports = router;