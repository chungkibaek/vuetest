module.exports = {
    
    login: {
      query: `select userid, AuthorName, email, AdminYN from t_login where  userid = ? and passwd = ?;
      `
    },
    userList: {
      query: `select userid, AuthorName , email , AdminYN from t_login where DelYN ='N'
      `
    },    
    memberInsert: {
      query: `insert into t_login set ?;
      `
    }

    


}