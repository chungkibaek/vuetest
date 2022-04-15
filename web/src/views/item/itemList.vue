<template>
    <div>
      {{pageTitle}}
      <g-SearchForm @click="getItemList" id="search" :searchData='keyword'>

      </g-SearchForm>

        <p align="left">전체 : {{totalCount}} 건</p>

        <g-TableForm :headerList="headerList"
                :itemList="itemList"
                :itemKeyList="itemKeyList"
                :movepage="movepage"
                :perPage ="perPage"
                :currentPage="curpage"
                :rows="rows"
                v-on:movepage="goToDetail"
                v-on:pagelink="getItemList"
                @detailClick="detailButtonClick"
                @deleteClick="deleteButtonClick"
            >

        </g-TableForm>

        <div align="right" v-if="this.storeUser.user.userid != undefined ">
            <button type="button" class="btn btn-lg btn-danger"  @click="noticeInsert">추가</button>
        </div>

        <noticinfoComponent :id="'dignotice'" ref="dlgnotice" @saveSubmit="saveSubmit">
        </noticinfoComponent>

    </div>

</template>
<script>
// import axios from 'axios';
 import {BoardController} from '@/api'
import noticinfoComponent from '../common/NoticeDetailModal.vue'
 import {  mapGetters } from 'vuex'
const userInfoStore = 'userInfoStore'


function getItemList({query}){

    let url =   '/item/itemlist';

      const body = {
                  boardtype : 'notice',
                  keyword:'',
                  start : 1,
                  end : 10

              }


  return Promise.all([
       BoardController.getboardList(url, body)
  ])

}

// --회차, itemid, 제목, 내용, 기간(start~end), 상태 , 건수, 등록일
//  sub1.itemid, sub1.seqid, sub1.title, concat(startdate , '~', enddate) as termdate, sub1.status, sub1.createdate , sub1.cnt

export  default{
    name :'tableList',
    components:{noticinfoComponent},
    data(){
        return {
            pageTitle : "아이템 목록",
            headerList: ["회차", "제목", "기간","상태", "건수", "등록일"],
            itemList: [],
            keyword:'',
            movepage : 'naver',
           itemKeyList:  ["seqid", "title", "termdate","status", "cnt", "createdate"],
          perPage :10,          // 몇개 씩 보여줄지
          curpage : 1,
            rows: 10,
            totalCount : 0,
            test : ''

        };
    },
    computed: {
        //로그인 정보를 store를 통해서 가져온다.
       ...mapGetters(userInfoStore, {storeUser : 'GE_USER'}),


    },
    watched (){

    },
    mounted() {

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
        .then(result =>{
            console.log( response[0].data.contents)
            this.setViewData(result)
            next()
        })
    },
    methods : {

      setViewData(response){

        // console.log(response)
         this.itemList =   response[0].data.contents
        this.rows = response[0].data.pnTotal
        this.totalCount =response[0].data.totalCount

      },
        getItemList(currentPage, pKeyworrd){

         this.curpage = currentPage
        let url =   '/item/itemlist';

        const tmpkeyword = pKeyworrd  || '';

          this.body = {
                      keyword:tmpkeyword,
                      start : currentPage,
                      end : this.perPage

                  }

            BoardController.getboardList(url, this.body)
                .then(response =>{

                  console.log( response.status)
                  console.log( response.data.contents)
                    this.itemList =   response.data.contents
                    this.rows = response.data.pnTotal
                      this.totalCount =response.data.totalCount
                })

         } ,


        goToDetail(boardseq,movepage){
            const param = {
                        id: boardseq,
                        page : movepage

                    }

            //get방식
            this.$router.push({path:'/noticedetail/', query:param});
            //post방식
            //  this.$router.push({ name: "NoticeDetail", params: param});
        },
        noticeInsert(){
             this.$router.push({path:'/noticeWrite/'});
        },
        detailButtonClick(item){
            // alert('detailButtonClick-->' + item.AuthorName)
             console.log(item)

            this.$refs.dlgnotice.show(item)


        },
        deleteButtonClick(BoardSeq){

                alert('deleteButtonClick--->' +  BoardSeq)

            const url = '/board/notice/noticeDelete'
             const param = [BoardSeq]

            this.$swal.fire({
                title: '삭제 하시겠습니까?',
                showCancelButton: true,
                confirmButtonText: `저장`,
                cancelButtonText: `취소`
            }).then(async (result) => {
                if (result.isConfirmed) {

                     await this.$api(url,{param : param});
                    this.$swal.fire('삭제되었습니다!', '', 'success');
                    this.getNoticeList(1,'')
                }
            });


        },
         saveSubmit(e){
            console.log(e.data)

            //저장로직추가 noticeUpdate
            const url = '/board/notice/noticeUpdate'
            const param = [ e.data.title, e.data.Contents, e.data.BoardSeq]

            console.log(param)
            this.$api(url,{param : param});

            this.getNoticeList(1,'')

            const result = 'success'
            e.done(result)

        }
    }



}
</script>
