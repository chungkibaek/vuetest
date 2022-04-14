
<template>
 <div>
   {{date}}
   <br/>
        <input type="text" id="datepicker" autocomplete="off" v-model="date" style="width:100px;">
  </div>
</template>



<script>
import $ from "jquery";
import datepickerFactory from "jquery-datepicker";
datepickerFactory($);

export default {
  name: "DatePicker",
  //props : ['seldate'],
  data() {
    return {
      date:'',
      dateformat : 'YYYY'
    };
  },
  mounted: function() {


    $("#datepicker").datepicker({
      dateFormat: "yy-mm-dd",
      showMonthAfterYear:true,
      showOn:"button",
       buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
      buttonImageOnly:true,
      nextText:'다음 달',
      prevText:'이전 달',
      minDate : 0, // 과거 날짜를 선택하지 못하도록 비활성화
  	 changeMonth: true, // 월선택 select box 표시 (기본은 false)
      changeYear: true,  // 년선택 selectbox 표시 (기본은 false)
       showButtonPanel: true, //today표시
      dayNamesMin:['일','월','화','수','목','금','토'],
      monthNamesShort:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
      onSelect: seldate => {
         this.date = seldate;
          this.$emit('update:seldate', seldate);
      }

    });
  }
};
</script>

<style>
</style>
