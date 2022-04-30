import {getUserFromCookie} from '@/utils/cookies.js'

export default {
    namespaced : true,
    state : {
        isUserPopup : false,
        isAlterPopup : false,
        isConfirmPopup : false,
        alterMessage : '',
        confirmMessage : '',
        popupInfo : {size : '', contentkey : '',headerName : '' },
        authUserId : getUserFromCookie() | ''
    },
    mutations : {

        setIsAlertPopup(state){
            state.isAlterPopup = !state.isAlterPopup
        },
        setAlterMessage(state, paylod){
            console.log('setAlterMessage-------')
            state.alterMessage = paylod
        },
        setIsConfirmPopup(state){
            state.isConfirmPopup = !state.isConfirmPopup

            console.log(state.isAlterPopup)
        },
        setConfirmMessage(state, paylod){
            state.confirmMessage= paylod
        },
        clearAllPopup(state){
            state.isUserPopup = false
            state.isAlterPopup = false
            state.isConfirmPopup = false
        },
        clearAlterMessage(state){
            state.alterMessage = ''
        },
        clerarConfirmMessage(state){
            state.confirmMessage = ''
        }
    },
    actions : {
        
    }


}