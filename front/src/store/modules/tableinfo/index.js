export default {
    namespaced : true,
    state : {
        listFetchUrl : '' ,
        pathUrl :{
            reg : '',
            list : '',
            detail : '',
            update : ''
        }       
    },
    mutations : {

        clearPathUrl(state){
            state.pathUrl = {}
        },
        setPathurl(state, paylod){
            state.pathUrl = paylod
        },
        setListFetchUrl(state, payload){
            console.log('setListFetchUrl')
            state.listFetchUrl = payload
        },
        clearListFetchUrl(state){
            console.log('clearListFetchUrl')
            state.listFetchUrl = ''
        },
        

    },
    actions : {

        async fetchTableInfo({state,commit}, payload){

            console.log('fetchTableInfo')

            state.searchData = Object.assign({}, payload['payload'])
        }

     }

}




