

<template>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th v-for="(item, i) in headerList" :key="'header-' + i">{{item}}</th>
                    <th>버튼</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in itemList" :key="'item-' + index">
                    <td v-for="(itemKey, subIndex) in itemKeyList" :key="'item-key-' + subIndex">
                       <a @click="goToDetail(item.BoardSeq, movepage);" style="cursor:pointer;"> {{item[itemKey]}}
                        </a>
                    </td>
                    <td>
                        <button class="btn btn-xs btn-info row_edit_btn" @click="noticedetail(item)">수정</button>
                        <button class="btn btn-xs btn-danger row_delete_btn" @click.prevent="noticedelete(item)">삭제 </button>


                    </td>
                </tr>
            </tbody>
        </table>
     <!-- {{this.currentPage}} -->
       <b-pagination v-model="currentPage" :per-page="perPage" :total-rows="rows" align="center" @page-click="pageClick"  last-number></b-pagination>
    </div>


</template>

<script>

export default {
    name: 'Table',
    props: ['headerList', 'itemList', 'itemKeyList', 'perPage', 'currentPage', 'rows', 'movepage'],
    data(){
        return {
            itemData  : this.itemList,
            // currentpage : this.currentPage

        };
    },
    computed :{
            newpage(){
            console.log("computed---->" + this.$props.currentPage)
                  return this.currentPage
            }
    },
  mounted () {
      console.log("mounted---->" + this.$props.currentPage)

  },
  watch : {
      currentpage(){
         console.log("watch---->" + this.$props.currentPage)
            this.currentpage = this.currentPage
      }
  },
    methods : {
      pageClick(button, page){
        this.currentpage = page
        this.$emit('pagelink', page);
      },
      goToDetail(boardseq,movepage){
            this.$emit('movepage', boardseq,movepage);

      },
      noticedetail(item){
        //   alert('noticedetail---->' + item.BoardSeq)
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
