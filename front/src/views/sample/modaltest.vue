<template>
  <div class="box">
<section>

<datepicker  v-model='startDate' :pickerName="'datepicker0'"></datepicker>
<br/>
<b-button variant="success" @click="ok()">
        날짜확인
</b-button>
<b-button variant="success" @click="confirm1()">
        confirm확인1
</b-button>
<b-button variant="success" @click="confirm2()">
        confirm확인2
</b-button>
<b-button variant="success" @click="confirm3()">
        confirm확인3
</b-button>
</section>


<labelCheckbox :name="'testyn'"
  :id="'testyn'" title="체크1"
  :isChecked="false"
  @updateCheck="updateCheck" />

  <searchInput 
  v-model="searchName"
  :placeholder="'검색조건'">


  </searchInput>

  </div>
</template>



<script>

import datepicker from '../../components/common/datePicker/datePicker'
import labelCheckbox from '../../components/common/checkbox/labelCheckbox'
import searchInput from '../../components/common/input/searchInput'

import {useStore} from 'vuex'
import {ref,  computed, watch, onUnmounted} from 'vue'
import dateStr from '../../utils/date.js'

export  default{
  name :'datePickervue',
 components: {
    datepicker , 
    labelCheckbox,
    searchInput,
    dateStr 
  },
  setup(props){
    const store = useStore()

    const startDate = ref(dateStr.today)
    const searchName = ref('')


    const updateCheck =  (newVal) =>{

      console.log('updateCheck data--->')
      console.log(newVal)
    }

    const ok = ()=>{
      console.log(searchName)
        alert(startDate.value + '/' + searchName.value)



      //  store.commit("temp/setAlterMessage", 'test')
      //  store.commit("temp/setIsAlertPopup") 

    }    

    const confirm1=() =>{
      
      store.commit("temp/setConfirmMessage","저장 하시겠습니까?")
      store.commit("temp/setConfirmType",'userinfo')
      store.commit("temp/setIsConfirmPopup")
    }

    const confirm2=() =>{
      
      store.commit("temp/setConfirmMessage","저장 하시겠습니까?")
      store.commit("temp/setConfirmType",'login')
      store.commit("temp/setIsConfirmPopup")
    }
    
        const confirm3=() =>{
      
      store.commit("temp/setConfirmMessage","저장 하시겠습니까?")
      store.commit("temp/setConfirmType",'datepicker')
      store.commit("temp/setIsConfirmPopup")
    }

    return {
      startDate,
      searchName,
      updateCheck,
      ok,
      confirm1,
      confirm2,
      confirm3

    }

  }
}
</script>

