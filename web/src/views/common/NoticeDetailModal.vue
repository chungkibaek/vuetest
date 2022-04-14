<template>
    <div>
          <g-ModalForm
          :id = "id"
          :title="modaltitle"
          @ok="handleButtonOK"
          ref="dlguser">

                <template>
                     <main class="mt-3">
                        <div class="container">
                            <h2 class="text-center">상세내용</h2>
                            <div class="mb-3 row">
                                <label class="col-md-3 col-form-label">제목</label>
                                <div class="col-md-9">
                                <input type="text" class="form-control" v-model="noticetitle">
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label class="col-md-3 col-form-label">내용</label>
                                <div class="col-md-9">
                                    <textarea v-model="Contents" rows="10" class="form-control" placeholder="내용을 입력하세요."></textarea>
                                </div>
                            </div>
                        </div>
                    </main>
                </template>
           </g-ModalForm>

    </div>
</template>
<script>


export  default{
    name :'',
    components:{},
    data(){
        return {
            modaltitle : '공지 상세 팝업',
            noticetitle : '' ,
            Contents : '',
            BoardSeq : 0,
            id : 'notice-modal'

        };
    },
    computed : {
        modal(){
            return this.$refs.dlguser
        }

    },
    created(){},
    mounted(){},
    methods:{
        handleShow(){

        },
       show(item){

           this.noticetitle = item.title
           this.Contents = item.Contents
           this.BoardSeq = item.BoardSeq

            this.modal.modalShow()
        },
        hide(){
            // alert('hide')
            this.modal.modalHide()
        },
        handleButtonOK(e){

           e.preventDefault()

             //여기서 저장로직추가
            this.handleFromSubmit()

             //성공시 팝업 닫기
            this.$nextTick(() => {
                this.hide()
            })
        },
        handleFromSubmit(){


            const data = {
                title : this.noticetitle,
                Contents : this.Contents,
                BoardSeq : this.BoardSeq
            }

            console.log(data)

            this.$emit('saveSubmit', {
                sender : this,
                data,
                done : hide =>{

                    if(hide)
                        this.hide()

                }
            })

        }
    }
}
</script>
