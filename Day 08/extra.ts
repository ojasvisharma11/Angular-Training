class date{
    constructor(year, month, date){
        this.year = year
        this.month = month
        this.date = date
        
        // if(year == undefined || year == null){
        //     this.year = Date.getYear()
        // }   
        // else this.year = year
        // if(month == undefined || month == null){
        //     this.month = Date.getMonth()
        // }
        // else this.month = month
        // if(date == undefined || date == null){
        //     this.date = Date.getDate()
        // }
        // else this.date = date
    }
    display(){
        console.log(this.month, "/", this.date, "/", this.year)
    }
}
today = new date(2020, 08, 20)
today.display()
console.log(Date.now())
class library{
    constructor(name, address){
        this.name = name
        this.address = address
    }
}


var mpp = new Map()
i = 2
date = new Date(2020, 08, 21)
bookData = []
bookData.push({id:3, dateOfPublishing:date})
// mpp.set('a', bookData)
if(mpp.get('a')==undefined){
    bookData = []
    bookData.push(null)
    mpp.set('a', bookData)
}
else{
    bookData = mpp.get('a')
    bookData.push({id:i, dateOfPublishing:date})
    mpp.set('a', bookData)
}
// mpp.set('a',2)
bookDate = mpp.get('a')

mpp.set('c','d')
console.log(mpp.get('a'), mpp.get('c'))

item = []
item.push(mpp)
for(i=0;i<bookData.length;i++){
    if(bookData[i] == null){
        console.log("Hi")
        bookData[i] = {id:i, dateOfPublishing:date}
    }
}
console.log(item[0])
obj = {
    str:2
}
console.log(obj.str)

// class Book





