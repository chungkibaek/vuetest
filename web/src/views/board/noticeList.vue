<template>
    <div>
         {{this.storeUser.user.AuthorName}}
      <g-SearchForm @click="getNoticeList" id="search" :searchData='keyword'>

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
                v-on:pagelink="getNoticeList"
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
  import axios from 'axios';
import noticinfoComponent from '../common/NoticeDetailModal.vue'
 import {  mapGetters } from 'vuex'
const userInfoStore = 'userInfoStore'


export  default{
    name :'tableList',
    components:{noticinfoComponent},
    data(){
        return {
            headerList: ["분야", "제목", "작성자","등록일"],
            itemList: [],
            keyword:'',
            movepage : 'naver',
           itemKeyList:  ["BoardTypeID", "title", "AuthorName","CreateDate"],
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
    created(){
        this.getNoticeList(1,'')
    },
    mounted() {

    },
    methods : {

        getNoticeList(currentPage, getNoticeList){

         this.curpage = currentPage
        let url =   '/board/notice/noticeListNew';

        const tmpkeyword = getNoticeList  || '';

        console.log('keyworkd--->' + getNoticeList);

            this.body = {
                        boardtype : 'notice',
                        keyword:tmpkeyword,
                        start : currentPage,
                        end : this.perPage

                    }

            axios.get(url,{params:this.body})
                    .then((response) => {
                        console.log(response);
                        this.itemList =   response.data.contents
                        //total count
                        console.log('response.data.pnTotal--' + response.data.pnTotal)
                            this.rows = response.data.pnTotal
                            this.totalCount =response.data.totalCount
                    })



         } ,
        getNoticeTotalCount(getNoticeList){


           const tmpkeyword = getNoticeList  || '';

            this.body = { // 데이터 전송
             keyword:tmpkeyword
            }

            let url =   '/board/notice/noticeAllCount'
            axios.get(url,{params:this.body})
            .then((response) => {
                console.log('total-> ' + response.data[0].totalCount);
                this.totalCount = response.data[0].totalCount
            })

        },

        goToDetail(boardseq,movepage){
            // alert("부모전달")
            //  alert(boardseq + '/' + movepage)

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
