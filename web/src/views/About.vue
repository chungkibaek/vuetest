<template>
  <div class="home">
       <div class="overflow-auto">
<!-- test : {{getcurrencyFormat(100000000000000000000)}}<br/> -->
<!-- pagenumber  :{{pageNumber}} <br/>
pagecount  :{{pageCount}} <br/> -->


        <table class="table table-striped" id="tblTest">
            <thead>
            <tr>
                <th>분야</th>
                <th>제목</th>
                <th>작성자</th>
                <th>등록일</th>
            </tr>
            </thead>
            <tbody>

                <tr :key="i" v-for="(notice,i) in items" >
                    <td> {{notice.no}}</td>
                    <td>{{notice.name}}</td>
                    <td>{{notice.tel}}</td>
                    <td>{{notice.address}}</td>
                </tr>

            </tbody>
        </table>


        <!-- 페이징 테스트 -->
        <g-pagingNav
          :per-page = "pageCount"
          :total-rows = "100"
          :value = "pageNumber"
          aria-controls = "tblTest"
        >

        </g-pagingNav>



        <button @click="excel">엑셀</button>

    </div>

<br/>



  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';


const defaultOption = {
  pageNumber : 1, //현재번호
  pageCount : 10 //한화면에 표시할 개수
}
function fnDataList({query}){

  // console.log(defaultOption.pageNumber + '/' + defaultOption.pageCount)
  // console.log(query)

  query = _.merge(_.clone(defaultOption), query  || {})

          //  let url = 'http://sample.bmaster.kro.kr/contacts'
      let url = 'http://sample.bmaster.kro.kr/contacts?pageno=' + query.pageNumber+ '&pagesize=' + query.pageCount


    // return Promise.all([
    //      BoardController.getboardList(url, body)
    // ])

    return axios.get(url)


}

import listviewMixins from '@/mixins/listview'
import XLSX from 'xlsx'

export default {
  name: 'Home',
  components: {

  },
    mixins : [listviewMixins],
    data(){
      return{
         // 몇개 씩 보여줄지
          // perPage :10,
         // 현재 페이지
          // currentPage : 1,
       rows: 0,
      fields: [ //
          {
            key: 'no'
          },
          {
            key: 'name',
            sortable: false
          },
          {
            key: 'tel',
            sortable: false
          }
        ],
        items : []
      }
  },
  beforeRouteEnter(to, from, next) {
      fnDataList({query : to.query})
        .then(response => {
          console.log(response.data.contacts)
          next(vm => vm.setDataView(response))
        })

  },
 beforeRouteUpdate (to, from, next) {



      fnDataList({query : to.query})
        .then(response => {
          console.log(response.data.contacts)
          this.setDataView(response)
          next()
        })
  },

  mounted() {

    console.log(this.$route.query.pageNumber)
      // this.getNoticeList(this.currentPage).catch(error => {
      //   console.error(error)
      // });
   }
     ,
    computed : {
        user (){
            console.log(this.$store.state.user)
            return this.$store.state.user
        }
    },

  methods : {
    getcurrencyFormat(val){
      console.log(val)
        return this.$currencyFormat(val)
    },
    setDataView(response){

        this.items =   response.data.contacts

    },

    myRowClickHandler(value){
      alert(value);
    },
    goDetail(items) {
        alert(items.id)
        console.log(items.id)
      },
    async getNoticeList(page){


        console.log("getNoticeList")
        console.log(this.$route.query)

        let url = 'http://sample.bmaster.kro.kr/contacts'
    // let url = 'http://sample.bmaster.kro.kr/contacts?pageno=' + this.currentPage + '&pagesize=' + this.perPage

          axios.get(url)
                .then((response) => {
                    console.log(response.data.contacts);

                      this.items =   response.data.contacts
                          this.rows =100

                })

    },
    excel(){
      this.$logtest2('excel download')
      this.consolelog('dddddddddd')

        const workBook =XLSX.utils.book_new()
        const workSheet = XLSX.utils.json_to_sheet(  this.items )
       XLSX.utils.book_append_sheet(workBook, workSheet, 'example')
       XLSX.writeFile(workBook, 'example.xlsx')

    }
  }

}
</script>
