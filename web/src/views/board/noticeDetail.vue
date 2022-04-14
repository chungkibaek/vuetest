<template>
    <div>
            <!-- query :   {{ this.$route.query}} <br>
            param : {{param.id}}<br>-->
            props로 받기 : {{boardseq}}

  {{this.storeUser.user.AuthorName}}

        <g-TableContentForm
            :pageTitle="pageTitle"
            :itemInfo="itemInfo"
            :isReadOnly="readonly"
            :isAdminYN="adminCheck"
            @event:update="updateNotice" >

        </g-TableContentForm>

    </div>
</template>

<script>

 import {  mapGetters } from 'vuex'
const userInfoStore = 'userInfoStore'

//   import axios from 'axios';
const defaultOption = {
    boardseq : 0
}

export default {
    name : "NoticeDetail",
    props : {
        boardseq : {
            type: [String, Number],
            default : defaultOption.boardseq
        }
    },
    data() {
        return {
            pageTitle : "공지사항 상세화면",
            readonly : "",
            itemInfo : {}
        }

    },
    computed: {
        //로그인 정보를 store를 통해서 가져온다.
        ...mapGetters(userInfoStore, {storeUser : 'GE_USER'}),

            param: function () {
                return this.$route.query;
            },

            adminCheck : function(){
                const isAdminyn = this.storeUser.user.AdminYN  || 'N';
                return isAdminyn
            }
        },
    created() {


        //get 방식으로 받을때
        // this.boardseq = this.$route.query.id;

    //  console.log(this.lodash.random(20))
    //    console.log(this._.random(20))
    //     console.log(this.custom.random(20))
    //     let query = this._.merge(this._.clone('test'))
    //     console.log(query);

        // param으로 받을때
    //     this.boardseq = this.$route.params.id;
    //    console.log(this.$route.params.id);

    } ,
    mounted(){
        this.getNoticeDetailInfo()
    },
    methods : {
        async getNoticeDetailInfo(){


            const url = '/board/notice/noticeDetailInfo'
            const param = [ 'notice', this.boardseq]

            console.log(param)
            let itemInfoResult = await this.$api(url,{param : param});

            if(itemInfoResult.length > 0) {
                this.itemInfo = itemInfoResult[0];

            }
            console.log(this.itemInfo)

        },
        async updateNotice(iteminfo){

            console.log(iteminfo)
            const url = '/board/notice/noticeUpdate'
             const param = [iteminfo.title,iteminfo.Contents,iteminfo.BoardSeq]

             console.log(iteminfo.BoardSeq)

            this.$swal.fire({
                title: '저장 하시겠습니까?',
                showCancelButton: true,
                confirmButtonText: `저장`,
                cancelButtonText: `취소`
            }).then(async (result) => {
                if (result.isConfirmed) {

                     await this.$api(url,{param : param});
                    this.$swal.fire('저장되었습니다!', '', 'success');
                    this.$router.push({path:'/noticeList'});
                }
            });
        }

    }

}
</script>




