<template>
  <div class="box">
<section>

{{sampleData}}<br/>
<g-DatePicker  :seldate.sync='seldate'></g-DatePicker>
 <g-newDatePicker :seldate.sync="seldate2" :predYN="predYN2" > </g-newDatePicker>

<br/>
<b-button styled="true" variant="success" @click="ok()">
        날짜확인
</b-button>

<br>
<p>동적추가 테스트(ex.방문자정보)</p>
<b-button styled="true" variant="success" @click="addtable()">추가</b-button>

 <table class="table" style="width:1000px;" >
   <thead>
   <colgroup>
        <col width="30%"/>
        <col width="40%"/>
        <col width="40%"/>
        <col width="10%"/>
    </colgroup>
  <!-- <tr>
    <th scope="col">이름</th>
    <th scope="col">회사</th>
    <th scope="col">연락처</th>
    <th scope="col">삭제</th>
  </tr> -->
  </thead>
  <tbody>
     <tr v-for="(item, index) in itemList" :key="index">
        <td>{{item.name}}</td>
        <td>1</td>
        <td>1</td>
         <!-- <td><a @click="removeRow(item-index)">삭제</a></td> -->
         <td><a @click="removeRow(index)">삭제</a></td>
    </tr>
  </tbody>
</table>


<div class="container">
  <div class="row"  v-for="(item, index) in itemList" :key="index" >
    <div class="col">
      {{item.name}}
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
        <div class="col">
      삭제
    </div>
  </div>
</div>

</section>

  </div>
</template>



<script>

  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';
export  default{
  name :'datePickervue',
    components: { DatePicker },
    data(){
    return {
      sampleData : 'datepicker 테스트',
      seldate : '',
      seldate2 : '',
      predYN2 : "Y",
      itemList : [],
       value1:null
    };
  },
  methods : {
    ok(){
          // alert(this.seldate)
          alert(this.seldate2)
    },
    addtable(){
        // alert('addtable')
        this.itemList.push({
                      name: "222222",
                      job: "",
                      tel : ""
                  });

    },
     removeRow(index) {

            //  this.itemList.$remove(item);
              this.itemList.splice(index,1);
      }
  }
}
</script>

