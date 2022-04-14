<template>
    <div>

    로그인 사용자 : {{this.storeUser.user.userid}}
 {{this.$store.state.user}}
         
        <!-- <iframe
            :src="'http://www.ipostock.co.kr/sub03/ipo04.asp'"
            width="100%"
            height="300px"
            frameborder="0" >
           </iframe> -->

         
        <g-TableForm :headerList="headerList" 
        :itemList="itemList" 
        :itemKeyList="itemKeyList" 
        :movepage="movepage" 
        :perPage ="perPage"
        :currentPage="currentPage"
        :rows="rows"
        v-on:movepage="goToDetail"
        v-on:pagelink="getNoticeList">           
  
        </g-TableForm>

      
    </div>
</template>
<script>
 import axios from 'axios';
 import {  mapGetters } from 'vuex'
const userInfoStore = 'userInfoStore'

export  default{
    name :'tableList',
    components:{},
    data(){
        return {
            headerList: ["번호", "이름", "연락처","주소"],
            itemList: [],
            movepage : 'naver',
           itemKeyList: ["no", "name", "tel","address"],            
         // 몇개 씩 보여줄지
          perPage :10,
         // 현재 페이지
          currentPage : 1,       
            rows: 0,  
           
        };
    },
    computed : {
         ...mapGetters(userInfoStore, {storeUser : 'GE_USER'})
     
    },
    created(){
        this.getNoticeList(1)
        },
    methods : {   
    
        async getNoticeList(currentPag){  
  
            let url = 'http://sample.bmaster.kro.kr/contacts?pageno=' + currentPag + '&pagesize=' + this.perPage


            axios.get(url)
                    .then((response) => {
                        console.log(response.data.contacts);               
                        this.itemList =   response.data.contacts
                        //total count
                            this.rows =100                      
                    })
                    
        } ,
        goToDetail(boardseq,movepage){
            alert("부모전달")
            alert(boardseq + '/' + movepage)
          
        }
    } 



}
</script>