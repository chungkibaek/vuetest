module.exports = {
    productList: {
        query: `select t1.product_name from t_product t1`
      },

      noticeList: {
        query: `select t1.BoardTypeID, t1.title, t1.AuthorName, t1.CreateDate from t_board t1`
      }      
}