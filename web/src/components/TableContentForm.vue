<template>
    <div>
        <!-- {{isAdminYN}} -->


        <main class="mt-3">
            <div class="container">
                <h2 class="text-center">{{pageTitle}}</h2>

               <template v-if="isAdminYN == 'Y'">
                <div class="mb-3 row">
                    <label class="col-md-1 col-form-label">제목</label>
                    <div class="col-md-9">
                        <!-- {{isReadOnly}}    :disabled="isReadOnly ? '' : disabled"-->
                            <input type="text" class="form-control" v-model="itemInfo.title" >

                    </div>
                </div>
                <div class="mb-3 row">
                    <label class="col-md-1 col-form-label">내용</label>
                    <div class="col-md-9">
                        <textarea v-model="itemInfo.Contents" rows="10" class="form-control" placeholder="내용을 입력하세요."></textarea>
                    </div>

                </div>
                  <div align="right" >
                          <button type="button" class="btn btn-lg btn-dark" @click="goList">목록</button>
                          <button type="button" class="btn btn-lg btn-danger" @click="insert">수정</button>
                  </div>
               </template>
               <!-- d일반사용자 -->
               <template v-else>
                <div class="mb-3 row">
                    <label class="col-md-1 col-form-label">제목</label>
                    <div class="col-md-9">
                        <!-- {{isReadOnly}}    :disabled="isReadOnly ? '' : disabled"-->
                            <span class="form-control" align="left">{{itemInfo.title}}</span>

                    </div>
                </div>
                <div class="mb-3 row">
                    <label class="col-md-1 col-form-label">내용</label>
                    <div class="col-md-9">
                        <div class="form-control" style="height:500px;" align="left" v-html="content" >

                        </div>
                    </div>
                </div>
                <div align="right" >
                    <button type="button" class="btn btn-lg btn-dark" @click="goList">목록</button>
                </div>


               </template>

            </div>
        </main>

    </div>
</template>

<script>

export default {
    name: 'Table',
    props: ['itemInfo','pageTitle', 'isReadOnly' , 'isAdminYN'],
    data(){
        return {
            contents : ''
        };
    },
    computed :{

        content() {
            //정규식
            // return this.itemInfo.Contents.replace(/(?:\r\n|\r|\n)/g, '<br>');
            const tmpContents =  this.itemInfo.Contents || ''

            if(tmpContents != '')
                return tmpContents.replace(/(?:\r\n|\r|\n)/g, '<br>')
            else
                return ''
        }
    },
    mounted () {

    },
    watch : {

    },
    methods : {
        goList(){
            this.$router.push({path:'/noticeList'});
        },
        insert(){
            console.log(this.itemInfo)

            this.$emit('event:update', this.itemInfo);
        },
        contentsplit(content){
            return content.split('\n').join('<br>')
        }
    }


}

</script>

<style scoped>

</style>
