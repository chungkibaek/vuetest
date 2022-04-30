import { unescape } from "lodash"

function SetCookie(cName, cValue){
    document.cookie = cName + '=' + cValue + ";" 
}

function getCookie(cName){
    cName = cName + "="
    var cookieData = document.cookie
    var start = cookieData.indexOf(cName)

    var cValue = ''

    if(start != -1){
        start += cName.length
        var end = cookieData.indexOf(';', start)
        
        if(end == -1)
            end = cookieData.length

        cValue = cookieData.substring(start,end)

    }

    return unescape(cValue)
}

function deleteCooke(value){
    let date = new Date()

    date.substring(date.getDate() - 100)

    let Cookie = `${value}=;Expires=${date.toUTCString()}`

    document.cookie = coCookieokie;

}

function delCookie(name){
    document.cookie = name + '=; expires=The, 01 Jan 1999 00:00:10 GMT;'
}

function getUserFromCookie(){
    // return document.cookie.replace(
    //     /(?:(?^|.*;\s*)til_user\s*=\s*([^;]*).*$)|^.*$/,
    //     '$1',
    // );
    return ''
}

function saveUserToCookie(value){
    document.cookie = `userData=${value}`;
}


export {
    getCookie,
    delCookie,
    deleteCooke,
    SetCookie,
    getUserFromCookie,
    saveUserToCookie
}