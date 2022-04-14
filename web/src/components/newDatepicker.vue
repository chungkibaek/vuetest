
<template>
  <div class="box">
    <section>
      <date-picker v-model="value1"
      :lang = "lang"
      :editable="false"
       :disabled-date="notBeforeToday"
        :disabled-time="notBeforeTodayTwelveOClock"
       type="date" placeholder="Select date"  format="YYYY-MM-DD">

       </date-picker>
    </section>

    {{value1}}
  </div>
</template>

<script>
  import DatePicker from 'vue2-datepicker'
  import 'vue2-datepicker/index.css'

  export default {
    components: { DatePicker },
      props: ['predYN'],
    data() {
      return {
        selectedDate1: "",
        value1:null,
        lang : {
          days : ['일','월','화','수','목','금','토'],
          months:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
          yearForamt : 'YYYY년',
          monthFormat : 'MM월',
          monthBeforeYear : false
        }
      }
    },
    computed : {
      computedpredYN(){
        console.log('computedpredYN---->' + this.predYN)
        return parseInt(this.predYN)
      },
    },
    watch : {
      value1(date){



          if(date != null){
            this.value1 =date

              const year = date.getFullYear();
              const month = ('0' + (date.getMonth() + 1)).slice(-2);
              const day = ('0' + date.getDate()).slice(-2);

            this.$emit('update:seldate' , year+'-' + month +'-' + day)
          }
      }
    },
  methods: {
    disabledBeforeTodayAndAfterAWeek(date) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      return date < today || date > new Date(today.getTime() + 7 * 24 * 3600 * 1000);
    },
    notBeforeNineOClock(date) {
      return date.getHours() < 9;
    },
    notBeforeToday(date) {
      if(this.predYN == "N")
        return date < new Date(new Date().setHours(0, 0, 0, 0));
    },
    notBeforeTodayTwelveOClock(date) {
      return date < new Date(new Date().setHours(12, 0, 0, 0));
    },
  },


  };
</script>
