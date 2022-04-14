<template>
  <div>

      <div align="right">
        
        <slot name="searchAdd">          
        </slot>
        <input type="text" v-model="searchKeyword" placeholder="검색내용 입력"  v-on:change="handlerSearchClick">    
       
        <button @click="handlerSearchClick">검색</button>    
   
      </div>

  </div>
</template>

<script>

  const EVENT_CLICK ={
    CLICK : "click"
  }

  export default {
    name: 'searchForm',
    // props:{searchData : String},
    props: ['searchData'],
    data: function () { //부모에서 props를 통해 값을 받을경우 초기화를 선언하여 다른변수로 받는다.
      return {
        searchKeyword: this.searchData
      }
    }    ,
    methods: {
      handlerSearchClick () {
         
          this.$emit(EVENT_CLICK.CLICK,1,this.searchKeyword);
        
        // this.$emit(EVENT_CLICK.CLICK, e); 
      }
    }
  }
</script>

<style scoped>
  div {
    padding: 20px
  }

  div span {
    margin: 20px
  }
</style>