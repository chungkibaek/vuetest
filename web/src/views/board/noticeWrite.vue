<template>
    <div>
            query :   {{ this.$route.query}} <br>
            param : {{param.id}}<br>
            props로 받기 : {{boardseq}}

        <main class="mt-3">
            <div class="container">
                <h2 class="text-center">{{pageTitle}}</h2>
                <div class="mb-3 row">
                    <label class="col-md-3 col-form-label">제목</label>
                    <div class="col-md-9">
                    <input type="text" class="form-control" v-model="notice.Title">
                    </div>
                </div>
                <div class="mb-3 row">
                    <label class="col-md-3 col-form-label">내용</label>
                    <div class="col-md-9">           
                        <textarea v-model="notice.Contents" rows="10" class="form-control" placeholder="내용을 입력하세요."></textarea>
                    </div>
                </div>
                <div align="right" > 
                    <button type="button" class="btn btn-lg btn-dark" @click="goList">취소하기</button>
                    <button type="button" class="btn btn-lg btn-danger" @click="insert">저장하기</button>
                </div>
            </div>
        </main>
        
    </div>
</template>

<script>

const defaultOption = {
    boardseq : 0
}

// (BoardTypeID,  AuthorID, AuthorName, Title, Contents,  DelYN)
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
            pageTitle : "공지사항 작성화면",
           notice: {
               BoardTypeID : 'notice',
               AuthorID : 'zz17779',
               AuthorName : '백충기',
                Title: '',
                Contents : '',
                DelYN : 'N'
            }
        }

    },
    computed: {
            param: function () {
                return this.$route.query;
            }
        },
    created() {
                        
    } ,
    mounted(){
     
    },
    methods : {
        goList(){
            this.$router.push({path:'/noticeList'}); 
        },
        insert(){
            this.$swal.fire({
                title: '정말 등록 하시겠습니까?',
                showCancelButton: true,
                confirmButtonText: `생성`,
                cancelButtonText: `취소`
            }).then(async (result) => {
                if (result.isConfirmed) { ///board/notice/noticeUpdate
                    await this.$api("/board/notice/noticeInsert",{param:[this.notice]});
                    this.$swal.fire('저장되었습니다!', '', 'success');
                    this.$router.push({path:'/noticeList'}); 
                } 
            });            

        }

    }

}
</script>




