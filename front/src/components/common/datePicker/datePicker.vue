
<template>
 <div>
        <input type="text" 
        :value="modelValue"
        :class="pickerName"
        >
  </div>
</template>



<script>
import $ from "jquery";
import datepickerFactory from "jquery-datepicker";
datepickerFactory($);

import { onMounted } from 'vue';

export default {
  props : {
      modelValue : {
        type : String
      },
      pickerName : {
        type : String
      }
  },
  setup(props, {emit}){


    onMounted(() => {
      $(`.${props.pickerName}`).datepicker({
        dateFormat: "yy-mm-dd",
        showMonthAfterYear:true,
        showOn:"button",//button
        buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
        buttonImageOnly:true,
        nextText:'다음 달',
        prevText:'이전 달',
        minDate : 0, // 과거 날짜를 선택하지 못하도록 비활성화
        changeMonth: true, // 월선택 select box 표시 (기본은 false)
        changeYear: true,  // 년선택 selectbox 표시 (기본은 false)
        showButtonPanel: true, //today표시
        dayNamesMin:['일','월','화','수','목','금','토'],
        monthNames:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        monthNamesShort:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        onSelect: () => {
          updateInput()
        }

      });

    })

    const updateInput = () =>{
      const stTempdate =   $(`.${props.pickerName}`).datepicker()[0].value
      emit('update:modelValue', stTempdate);
    }

    return {
      updateInput
    }

  }
  


};
</script>

<style>
</style>
