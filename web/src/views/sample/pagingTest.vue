<template>
  <div class="box">
<section>

{{sampleData}}<br/>
<input type="button" value="조회" @click="search()" />
   <g-table
        :headerList="headerList"
        :itemList="itemList"
        :itemKeyList="itemKeyList"
        :currentPage="page.page"
        :totalPages="totalPages"
        :pageChange="onPageChange"
    />

</section>

<br/>
<input type="button" value="사용자조회" @click="getUserList()" />
      <table class="table table-striped">
            <thead>
                <tr>
                    <th v-for="(item, i) in headerList_login" :key="'header-' + i">{{item}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in itemList_login" :key="'item-' + index">
                    <td v-for="(itemKey, subIndex) in itemKeyList_login" :key="'item-key-' + subIndex">
                       <a @click="goToDetail(item.BoardSeq, movepage);" style="cursor:pointer;"> {{item[itemKey]}}
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>



  </div>
</template>

<script>
  import axios from 'axios';
   import {BoardController} from '@/api'

export  default{
  name :'pagintest',
    data(){
    return {
      sampleData : 'paging 테스트',

        headerList_login: ["작성자", "아이디", "이메일", "관리자여부"],
            itemList_login: [],
            itemKeyList_login: ["AuthorName", "userid", "email","AdminYN"],



        headerList: ["분야", "제목", "작성자", "등록일"],
            itemList: [],
            itemKeyList: ["no", "name", "tel","address"],
            sortHeader: 'createdAt',
            sortDirection: 'desc',
            totalPages: 0,
            page: {
                page: 0,
                size: 10,
                sort: "createdAt,desc"
            }

    };
  },
  methods : {

  getUserList(){

    let url =   '/users';


      const body = null

      BoardController.getboardList(url, body).then(result =>{

        console.log(result.data)

        this.itemList_login = result.data

      })

  },
  search(){
        console.log("getNoticeList")
        console.log(this.$route.query)

        let url = 'http://sample.bmaster.kro.kr/contacts'

          axios.get(url)
                .then((response) => {
                    console.log(response.data.contacts);
                    console.log(response.data.currentPage)
                      this.itemList =   response.data.contacts
                          this.totalPages =100
                              this.page.page = response.data.currentPage;

                })

    },
      onPageChange(value) {
            this.page.page = value.requestPage;
            this.search();
        },
        onSortChange(event) {
            this.sortHeader = event.target.value;
            this.page.sort = this.sortHeader + ',' + this.sortDirection;
            this.search();
        },
        onSortDirectionChange(event) {
            this.sortDirection = event.target.value;
            this.page.sort = this.sortHeader + ',' + this.sortDirection;
            this.search();
        }
  }
}
</script>

