

export default {
  props : {
    pageNumber : {
      default : 1
      },
    pageCount:{
      default: 10
    },
    searchkeyword :{
      type : String,
      default : ''
    }
  },
  computed : {

  },
  methods : {
    consolelog(val) {
      console.log(val)

    },
    refresh(){
      let query = {
        pageNumber : 1
      }

      if(!_.isEmpty(this.$route.query)){
        query = _.clone(this.$route.query)

        if(query.pageNumber !== 1 || _.has(query, 'pageNumber'))
          query.pageNumber = 1


      }

      this.$router.push({
        name : this.$route.name,
        query
      })


    }



  }
}


