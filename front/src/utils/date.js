class DateCalc {
    constructor(timestamp){
         this.year = timestamp.getFullYear()
         this.month = timestamp.getMonth() + 1
         this.date = timestamp.getDate()       
    }

    get dateStr(){
        return this.setDateStr()
    }

    setDateStr(){
        return `${this.year}-${this.month >= 10 ? this.month : '0' + this.month}-${this.date >=10 ? this.date : '0' + this.date}`
    }

    getTodayLabel(){
        var week  = new Array('일요일','월요일','화요일','수요일','목요일','금요일','토요일')

        var today = new Date.getDay()
        var todayLabel = week[today]

        return todayLabel
    }
}

const now = new Date()
const nowStr = new DateCalc(now)

const todayLabel = new DateCalc(now).getTodayLabel

export default{
    today : nowStr.dateStr,
    todayLabel : todayLabel,
    firstDate : '1990-01-01',
    lastDate : '2099-12-31',
    setDateStr(date) { 
        return new DateCalc(date).setDateStr
    }


}