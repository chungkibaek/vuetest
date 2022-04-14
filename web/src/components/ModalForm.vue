<template>
        <div>
        <b-modal
        :id.sync="id"
        :title="title"
        :no-close-on-backdrop="noCloseOnBackdrop"
        :scrollable ="scrollable"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleButtonEvents"
        ref="modal"
        >
            <template slot="modal-header">
                <slot name="header"></slot>
            </template>


            <template slot="modal-header-close">
            <button class="close" data-dismiss="modal" type="button">
                <i class="ds-ico-close"></i>
            </button>
            </template>

            <template slot="modal-title">
                <slot name="title"></slot>
            </template>

            <template slot>
                <slot></slot>
            </template>

            <template #modal-footer="{ ok, cancel }">
                <b-button styled="true"  variant="success" @click="ok()">
                    확인
                </b-button>
                <b-button styled="true"  variant="danger" @click="cancel()">
                    취소
                </b-button>
            </template>

        </b-modal>
    </div>
</template>
<script>
export  default{
    name :'modalForm',
    props : {
        noCloseOnBackdrop : { //모달여부체크
            type : Boolean,
            default : true
        },
        scrollable : { //스크롤 여부
            type : Boolean,
            default : true
        },
        title :{ //제목
            type : String,
            default : '모달팝업22222222'
        },
        id :{
            type : String,
            required : true
        }
    },
    data(){
        return {
            sample : ''
        };
    },
    computed : {

    },
    created(){},
    mounted(){},
    methods:{
        resetModal(){
        },
        modalShow(){
            this.$bvModal.show(this.id)
        },
        modalHide(){
              this.$bvModal.hide(this.id)
        },
      handleButtonEvents(e) {

        this.$emit(e.trigger, e)
      }

    }
}
</script>
