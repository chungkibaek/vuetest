export default {
    namespaced : true,
    state : {
        selected : -1,
        parentIndex : -1,
        currentPath : '',
        currentIndex : -1,
        currentKeys : '',
        currentKey : '',
        tabKey : '',
        searchData : {},
        pagingBean : {},
        pagingNum : 1

        
    },
    mutations : {


        setPagingNum(state, payload){
            console.log('setPagingNum------->' + payload)
            state.pagingNum = payload
        },
        setPagingBean(state, payload){
            state.pagingBean = payload
        },
        setSearchData(state, payload){
            state.searchData = payload
        },
        setTabKey(state, payload){
            state.tabKey = payload
        },
        setCurrentKey(state, payload){
            state.currentKey = payload
        },
        setCurrentKeys(state, payload){
            state.currentKeys = payload
        },
        setCurrentIndex(state, payload){
            state.currentIndex = payload
        },
        setCurrentPath(state, payload){
            state.currentPath = payload
        },
        setParentIndex(state, payload){
            state.parentIndex = payload
        },
        setSelected(state, payload){
            state.selected = payload
        },        
        setClear(state){
            state.selected = -1
            state.parentIndex = -1
            state.currentPath = ''
            state.currentIndex = -1
            state.currentKeys = ''
            state.currentKey =  ''
            state.tabKey =  ''          
            state.pagingNum = 1
        },
        clearSearchData(state){
            state.searchData = {}
        },
        clearPaingNum(state){
            state.pagingNum = 1
        },
        clearPagingBean(state){
            state.pagingBean = {}
        },
        setUpdateSearchData(state, paylod){
            for(let t in paylod){
                state.searchData[paylod[t].type] = paylod[t].value
            }
        }
        

    },
    actions : {
        async fetchPaging({state, commit}, payload){

            commit("clearPagingBean")
            console.log("fetchPaging")

            let tempPagingBean = {
                totalRecordCount : payload.payload.pageBean.totalRecordCount,
                totalPageCount : payload.payload.pageBean.totalPageCount,
                pageNo : state.pagingNum,
                endNo : payload.payload.pageBean.endRow,
                totalGroupCount : payload.payload.pageBean.totalGroupCount,
                groupNo : payload.payload.pageBean.groupNo,
                pageStartNo : payload.payload.pageBean.pageStartNo,
                pageEndNo : payload.payload.pageBean.pageEndNo
            }

            console.log(tempPagingBean)
            commit("setPagingBean", tempPagingBean)




        },
        async fetchSearchData({state,commit}, payload){
            commit("clearSearchData")

            state.searchData = Object.assign({}, payload['payload'])
        }

     }

}




