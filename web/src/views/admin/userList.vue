<template>
    <div>
         {{this.storeUser.user.AuthorName}}
      <g-SearchForm @click="getUserList" id="search" :searchData='keyword'>

      </g-SearchForm> 

        <p align="left">전체 : {{totalCount}} 건</p>

        <g-TableForm :headerList="headerList" 
                :itemList="itemList" 
                :itemKeyList="itemKeyList" 
                :movepage="movepage" 
                :perPage ="perPage"
                :currentPage="curpage"
                :rows="rows"
                v-on:pagelink="getUserList"
                @detailClick="detailButtonClick"
                @deleteClick="deleteButtonClick"
            >           
        
        </g-TableForm>

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
    name :'userList',
    components:{noticinfoComponent},
    data(){
        return { //select userid, AuthorName , email , AdminYN from t_login where DelYN ='N'
            headerList: ["아이디", "이름", "이메일","관리자여부"],
            itemList: [],
            keyword:'',
            movepage : 'naver',
           itemKeyList:  ["userid", "AuthorName", "email","AdminYN"],          
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
        this.getUserList(1,'')        
    },
    mounted() {

    },
    methods : {   
    
        getUserList(currentPage, paramKeyword){  

// alert('a')
         this.curpage = currentPage                
        let url =   '/user/login2/userList';      

        const tmpkeyword = paramKeyword  || '';

        console.log('keyworkd--->' + paramKeyword);

            this.body = { 
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