<template>
    <div>
      {{pageTitle}}
{{searchkeyword}}
      <g-SearchForm @click="handlerSearchClick" id="search" :searchData='keyword' />


<!-- <b-form-input
      v-model="keyword"
      class="mb-2 mr-sm-2 mb-sm-0"
    ></b-form-input>
    <button @click="handlerSearchClick">검색</button> -->


        <p align="left">전체 : {{totalCount}} 건</p>

        <g-tableList :headerList="headerList"
                :itemList="itemList"
                :itemKeyList="itemKeyList"
            />

      <g-pagingNav
          :per-page = "pageCount"
          :total-rows = "totalCount"
          :value = "pageNumber"
          aria-controls = "tblTest"
        />

    </div>

</template>
<script>
 import axios from 'axios';
 import {ItemController} from '@/api'
import noticinfoComponent from '../common/NoticeDetailModal.vue'
 import {  mapGetters } from 'vuex'
const userInfoStore = 'userInfoStore'
import listviewMixins from '@/mixins/listview'

const defaultOption = {
  pageNumber : 1, //현재번호
  pageCount : 10,//한화면에 표시할 개수
  keyword : '' //검색조건
}


function getItemList({query}){

  console.log("getItemList start------------")

  let url =   '/item/itemlist';

  query = _.merge(_.clone(defaultOption), query  || {})

  console.log(query)

  return Promise.all([
       ItemController.getItemList(url, query)
  ])

}

export  default{
    name :'tableList',
    components:{noticinfoComponent},
    mixins : [listviewMixins],
    // props : {
    //   searchkeyword :{
    //     type : String,
    //     default : ''
    //   }
    // },

    data(){
        return {
            pageTitle : "아이템 목록",
            headerList: ["회차", "제목", "기간","상태", "건수", "등록일"],
            itemList: [],
            itemKeyList:  ["seqid", "title", "termdate","status", "cnt", "createdate"],
            totalCount : 0,
              keyword : ''
        };
    },
    computed: {
        //로그인 정보를 store를 통해서 가져온다.
       ...mapGetters(userInfoStore, {storeUser : 'GE_USER'}),

      searchkeyword(){
               this.keyword = this.$route.query.keyword
      console.log("searchkeyword_keyworkd-----------" +  this.$route.query.keyword)
      }
    },
    mountd() {
      // console.log(this.$route.query.pageNumber)
       this.keyword = this.$route.query.keyword
 console.log("mounted_keyworkd-----------" + keyword)

    },
    beforeRouteEnter(to, from, next) {
      getItemList({query : to.query})
        .then(response =>{
             console.log( response[0].data.contents)
          next(vm => vm.setViewData(response))
        })
    },
    beforeRouteUpdate(to, from, next){
      getItemList({query : to.query})
        .then(response =>{
            this.setViewData(response)
            next()
        })
    },
    mounted(){


    },
    methods : {

      setViewData(response){
        this.itemList =   response[0].data.contents
        this.totalCount =response[0].data.totalCount
      },
      handlerSearchClick(page, keyword){
        console.log('pageNumber----->' + this.pageNumber)
        console.log('pageCount----->' + this.pageCount)
         console.log('keyword----->' +keyword)

        const query = _.pickBy({
          pageNumber :  this.pageNumber,
          pageCount :  this.pageCount,
          keyword : keyword
        })

        const oldquery = this.$route.query

        if(oldquery.pageNumber !== 1 || _.has(oldquery, 'pageNumer'))
          query.pageNumber = 1

        this.$router.push({
          name : this.$route.name,
          query
        }).catch(()=>{})


      }


    }



}
</script>
