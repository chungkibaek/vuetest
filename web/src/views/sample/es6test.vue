<template>
  <div>
    {{sampleData}}
    <br/>
    <input type="button" value="arrow" @click="getTest()" />
  </div>
</template>
<script>
export  default{
  name :'Es6test',
  components:{},
  data(){
    return {
      sampleData : '[JavaScript] '
    };
  },
  watch : {},
  computed : {},
  created(){},
  mounted(){},
  unmounted(){},
  methods:{
    getTest(){

      // var evens = [2, 4, 6, 8,];
      // var odds = evens.map(v => v + 1);   // [3, 5, 7, 9]
      // console.log(odds)

      var bob = {
        _name: "Bob",
        _friends: ["John, Brian"],
        printFriends() {
          this._friends.forEach(f =>
            console.log(this._name + " knows " + f));
        }
      }
    }


  }
}
</script>
