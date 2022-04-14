<template>
   <div class="container" align="center" style="padding:50px;">
        <div class="card align-middle" style="width:20rem; border-radius:20px;">

                <div class="card-title" style="margin-top:30px;">
                    <h2 class="card-title text-center" style="color:#113366;">{{sampleData}}</h2>
                </div>
                    로그인 아이디 : {{this.loginid}}
        </div>

   <button type="button" class="btn btn-lg btn-danger"  @click="openModal">오픈 모달</button>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="모달"

       v-model="show"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
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

    <template slot="contents">
        <slot></slot>
    </template>


    <template #modal-footer="{ ok, cancel }">
      <b-button styled="true" variant="success" @click="ok()">
        확인
      </b-button>
      <b-button styled="true" variant="danger" @click="cancel()">
        취소
      </b-button>
    </template>

 </b-modal>

    </div>
</template>

<script>

import {  mapGetters } from 'vuex'
const userInfoStore = 'userInfoStore'

import qs from 'querystring'


export  default{
    name :'logintest',

    data(){
        return {
            sampleData : '모달 테스트',
            userinfo : {
                userid : '',
                passwd : ''
            },
            loginid : {},
        show: false,
        variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
        headerBgVariant: 'dark',
        headerTextVariant: 'light',
        bodyBgVariant: 'light',
        bodyTextVariant: 'dark',
        footerBgVariant: 'warning',
        footerTextVariant: 'dark'
        };
    },
    computed : {
        ...mapGetters(userInfoStore, {storeUser : 'GE_USER'})
    },
    created (){
        this.loginid = this.storeUser.user.userid
    },
    methods:{
        openModal(){

            var data = {
                    grant_type: '1',
                    client_id: '2'
                }
                var queryString = qs.stringify(data);
                console.log("queryString: ", queryString);


             const paging = true
             const test1 = '1'
             const test2 = '2'
             const test3 = '3'
             const test4 = '4'
             const test5 = '5'
             const param = false ? {test1, test2, test3} : {test4, test5}

             console.log(param)
             const parmasText = '&' +qs.stringify(param)


          console.log(parmasText)




              this.$bvModal.show('modal-prevent-closing')


        },
         resetModal() {
        this.name = ''
        this.nameState = null
      },
      handleOk(bvModalEvt) {
          alert('ok')
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        // this.handleSubmit()


        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })


      }


    }


}


</script>
