//숫자형식 여부
const numberTest = (source) =>{
    const pattern = /([0-9])/
    return pattern.test(source)
}

//이메일 형식 여부
const emailTest =(source) =>{
    const pattern = /^[_\-\.0-9a-zA-Z]{3,}@[-.0-9a-zA-z]{2,}\.[a-zA-Z]{2,4}$/    
    return pattern.test(source)
}

/*
* 인터넷 주소(IP) 형식 여부
*/
const ipTest = (source) =>{
    const pattern = /^(([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3}))$/
    return pattern.test(source)
}

/*
* 인터넷 주소(URL) 형식 여부
*/
const isUrl = (source) => {
    var pattern = /^(([a-z]+):\/\/|)((?:[a-z\d\-]{2,}\.)+[a-z]{2,})(:\d{1,5})?(\/[^\?]*)?(\?.+)?$/i
    return pattern.test(source)
}

/*
/*
* 이미지 형식 여부
*/
const isImage= (source) =>{
return (/.gif$/i.test(source) || /.jpg$/i.test(source) || /.bmp$/i.test(source) || /.png$/i.test(source))
}

/*
* 사업자 등록 번호로 포맷
*/
const biznum_format = (biznum)  =>{ 
    return biznum.replace(/([0-9]{3})([0-9]{2})([0-9]{5}$)/,"$1-$2-$3")
}		


/*
* NULL 여부
*/
const isNull = (source) => {
    return (source === null) ? true : false;
}

/*
* 공백 문장 여부
*/
const isEmpty = (source) =>{
    if(source === "") {
        return true
    }
    return false
}


/*
* 주민번호 형식 여부
*/
const isJuminNo = (source) =>{
    var pattern = /^([0-9]{6})-?([0-9]{7})$/

    if(!pattern.test(source)) {
        return false
    } else {
        return true
    }
}


export {
     numberTest,
     emailTest,
     ipTest,
     isUrl,
     isImage,
     biznum_format,
     isNull,
     isEmpty,
     isJuminNo
}