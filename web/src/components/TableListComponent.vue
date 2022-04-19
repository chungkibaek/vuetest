

<template>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th v-for="(item, i) in headerList" :key="'header-' + i">{{item}}</th>
                    <!-- <th>버튼</th> -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in itemList" :key="'item-' + index">
                    <td v-for="(itemKey, subIndex) in itemKeyList" :key="'item-key-' + subIndex">
                       <a @click="goToDetail(item.BoardSeq, movepage);" style="cursor:pointer;"> {{item[itemKey]}}
                        </a>
                    </td>
                    <!-- <td>
                        <button class="btn btn-xs btn-info row_edit_btn" @click="noticedetail(item)">수정</button>
                        <button class="btn btn-xs btn-danger row_delete_btn" @click.prevent="noticedelete(item)">삭제 </button>


                    </td> -->
                </tr>
            </tbody>
        </table>

    </div>


</template>

<script>

export default {
    name: 'Table',
    props: ['headerList', 'itemList', 'itemKeyList'],
    data(){
        return {
            itemData  : this.itemList
        };
    },
    computed :{

    },
  mounted () {


  },
  watch : {

  },
    methods : {

      goToDetail(boardseq,movepage){
            this.$emit('movepage', boardseq,movepage);

      },
      noticedetail(item){

         console.log( item.BoardSeq)

         this.$emit("detailClick", item)


      },
      noticedelete(item){
         console.log( item.BoardSeq)

            this.$emit("deleteClick", item.BoardSeq)


      }

    }


}

</script>

<style scoped>

</style>
