module.exports = {
    
      noticeList: {
        query: `select t1.title, t1.AuthorName, t1.CreateDate from t_board t1 
      `
      },
      noticeDetailInfo: {
        query: `select t1.title, t1.Contents, t1.BoardSeq from t_board t1 where BoardTypeID  = ? and BoardSeq  = ?
      `
      },
      noticeUpdate: {
        query: `update t_board 
                   set title = ?,
                       Contents = ?
                 where BoardTypeID  = 'notice'
                   and BoardSeq = ?
        
      `
      }    ,  
      noticeInsert: {
        query: `insert into t_board set ?`
      },
      noticeDelete: {
        query: `delete from  t_board where BoardSeq = ? `
      },      

}