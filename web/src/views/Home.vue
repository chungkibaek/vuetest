<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  <!-- @row-clicked="goDetail" -->
       <div class="overflow-auto">
           <!-- <b-table show-empty bordered striped hover
        id="my-table"
        :items="items"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        >
          <template #cell(no)="data">
                <a @click="myRowClickHandler(data.value);" style="cursor:pointer;">{{data.value}}</a>
          </template>

        </b-table>  -->


<table class="table table-striped">
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

<b-pagination v-model="currentPage"   :per-page="perPage" :total-rows="rows" align="center" @page-click="pageClick"  last-number></b-pagination>

    </div>

<br/>



  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
    data(){
      return{
         // 몇개 씩 보여줄지
          perPage :10,
         // 현재 페이지
          currentPage : 1,

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
  mounted() {
    this.getNoticeList(this.currentPage).catch(error => {
      console.error(error)
    });
    }  ,
    computed : {
        user (){
            console.log(this.$store.state.user)
            return this.$store.state.user
        }
    },

  methods : {

    myRowClickHandler(value){
      alert(value);
    },
    goDetail(items) {
        alert(items.id)
        console.log(items.id)
      },
      pageClick(button, page){

         alert(page);
        this.currentPage = page;
        this.getNoticeList(page)
      },
    async getNoticeList(page){

console.log(page);

        let url = 'http://sample.bmaster.kro.kr/contacts?pageno=' + this.currentPage + '&pagesize=' + this.perPage


          axios.get(url)
                .then((response) => {
                    console.log(response.data.contacts);

                      this.items =   response.data.contacts
                          this.rows =100

                })

    }
  }

}
</script>
