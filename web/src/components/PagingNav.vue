<template>

<nav class="pt-2 d-flex justify-content-center pb-2 ds-paginate ds-pagination-nav">
    <b-pagination-nav
        :aria-controls="ariaControls"
        :link-gen="linkGen"
        :number-of-pages= "numberOfPages"
        class="ds-paginate-list"
        v-model="value_"
        use-router >


        <span :class="{'ds-active' : active }"
          class="ds-paginate-num"
          slot="page"
          slot-scope="{page, active}">{{page}}
        </span>

        </b-pagination-nav>
</nav>

</template>
<script>

export  default{
    name :'pagingNav',
    props : {
        value : {

          type : Number | String,
          defualt : () => 1
        },
        perPage : {
          type : Number | String,
          defualt : 10
        },
        totalRows : {
          type : Number | String,
          default : 0
        },
        ariaControls : {
          type : String,
          required : false
        }
    },
        data(){
            return {
                value_ : 1
        };
    },
    computed : {
      computedPerPage(){
        console.log('computedPerPage---->' + this.perPage)
        return parseInt(this.perPage)
      },
      computedTotalRows(){
        console.log('computedTotalRows----> ' + this.totalRows)
        return parseInt(this.totalRows)
      },
      numberOfPages(){

        if(this.computedPerPage < 1 || this.computedTotalRows < 1){
          console.log('numberOfPages- return ---> ' + 1)
          return 1
        }

         console.log('numberOfPages-->' +parseInt(Math.ceil(this.computedTotalRows / this.computedPerPage)) )

          return parseInt(Math.ceil(this.computedTotalRows / this.computedPerPage))
      }
    },
    watch:{
      value(newVal){
        // alert('watch_value' + newVal)
        this.value_ = newVal
      },
      value_(newVal){
        // alert('watch_value_' + newVal)
        this.$emit('update:value', newVal)
      }
    },
    created() {
      this.value_ = this.value
    },

    methods:{

        linkGen(pageNumber){

            let query = _.merge(_.clone(this.$route.query), {
              pageNumber,
              pageCount : this.computedPerPage
            })

             console.log('query--->' +  query)

            return {
              name : this.$route.name,
              query
            }


        }
    }
}
</script>
