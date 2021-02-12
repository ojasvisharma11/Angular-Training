
class Book{
    constructor(name, author,id){
        this.name = name
        this.author = author
        this.id = id
        this.stocks = []
    }
    addStock(no_of_stock = 1){
        for(var i=0;i<no_of_stock;i++){
            this.stocks.push({studentId:null, due_on = null})
        }
    }
    rentBookStock(stock_id, student_id){
        if(stock_id >= this.stocks.length){
            console.log("No Such Stock")
        }
        else{
            if(this.stocks[stock_id].studentId == null){
                console.log("Sorry Book Currently not Available")
            }
            else{
                this.stocks[stock_id].studentId = student_id
                console.log("Book Assigned")
            }
        }
    }
    requestRent(student_id, book_id = null){
        if(book_id != null){
            if(this.stocks[book_id].studentId ==  null){
                this.stocks[book_id].studentId = student_id
                console.log("Book", book_id, "ASSIGNED!")
            }
            else console.log("Book Stock not available. Please check out later")
            return
        }
        var available = this.checkAvailabity()
        if(available == null){
            console.log("Please check out later")
        }
        else{
            this.stocks[available].studentId = student_id
            console.log("Book", this.stocks[available].bookId, "ASSIGNED!")
        }
    }
    checkAvailabity(){
        var availables = []
        for(var i=0;i<this.stocks.length;i++){
            if(this.stocks[i].studentId == null){
                availables.push(i)
            }
        }
        if(availables.length == 0){
            console.log("Sorry Book Currently not Available")
            return null
        }
        else{
            if(availables.length == 1){
                console.log(availables.length, "is available:", availables)
            }
            else console.log(availables.length, "are available:", availables)
            return availables[0] // The first book that is available
        }
    }
    returnBook(book_id){
        for(var i=0;i<this.stocks.length;i++){
            if(this.stocks[i].bookId == book_id){
                this.stocks[i].studentId = null
                console.log("Book returned")
                return
            }
        }
        console.log("Books not recognised")
    }
    display(){
        console.log(this.name, this.author)
        console.log(this.stocks)
    }
}
// var answer = prompt("How are you? ")
console.log("It Works!")
var creatingAbundance = new Book()
console.log("creatingAbundance.addStock(1)")
creatingAbundance.addStock(1)
console.log("creatingAbundance.addStock(1)")
creatingAbundance.addStock(1)
console.log("creatingAbundance.addStock(1)")
creatingAbundance.addStock(1)
console.log("creatingAbundance.checkAvailabity()")
creatingAbundance.checkAvailabity()
console.log("creatingAbundance.requestRent(2,1)")
creatingAbundance.requestRent(2,1)
console.log("creatingAbundance.requestRent(2)")
creatingAbundance.requestRent(2)
console.log("")
creatingAbundance.requestRent(2)
console.log("")
creatingAbundance.requestRent(2)
console.log("")
creatingAbundance.returnBook(23)
console.log("")
creatingAbundance.requestRent(2)

class Date{
    static lower_year_limit = 2050
    static upper_year_limit = 2000
    constructor(year, month, day){
        this.year = year
        this.month = month
        this.day = day
        this.valid = true
        if(this.validate){
            console.log("Data Not Stored")
            return
        }
        console.log("Data saved!")
    }
    get isLeapYear(){
        if(this.valid){
            if(this.year%400 || (this.year%100!=0 && this.year%4==0)){
                return true
            }
            return false
        }
        console.log("Not Valid Input")
        return false
    }
    get no_of_days(){
        if(this.valid){
            if(this.month == 3 || this.month == 5 || this.month == 8 || this.month == 11){
                return 30
            }
            if(this.month == 1){
                if(this.isLeapYear){
                    return 29
                }
                else  return 28
            }
            else  return 31
        }
        console.log("Not Valid Input")
        return -1
    }
    get validate(){
        if(this.year == undefined || this.year == null){
            console.log("Enter valid year")
            return false
        }
        if(typeof this.year != "number" || Number.isInteger(this.year) == false){
            console.log("Enter valid year")
            return false
        }
        if(this.year<Date.lower_year_limit || this.year > Date.upper_year_limit){
            console.log("The allowed year range is", Date.lower_year_limit, "-", Date.upper_year_limit)
            return false
        }
        
        if(this.month == undefined || this.month == null){
            console.log("Enter valid Month")
        }
        if(typeof this.month != "number" || Number.isInteger(this.month) == false){
            console.log("Enter valid month")
            return false
        }
        if(this.month < 1 || this.month > 12){
            console.log("Month should be in range of 1 to 12")
            return false
        }
        
        if(this.day == undefined || this.day == null){
            console.log("Enter valid day")
            return false
        }
        var no_of_days = this.no_of_days
        if(this.day < 1 || this.day > this.no_of_days){
            console.log("Enter valid day")
            return false
        }
        this.valid = true
        return this.valid
    }        
    get getYear(){
        return this.year
    }
    get getMonth(){
        return this.month
    }
    get getDay(){
        return this.day
    }
    set setYear(year){
        this.year = year
        if(this.year == undefined){
            console.log("Enter valid year")
        }
    }
    set setMonth(month){
        this.month= month
        if(this.month == undefined){
            console.log("Enter valid Month")
        }
    }
    set setDay(day){
        this.day = day
        if(this.day == undefined){
            console.log("Enter valid day")
        }
    }
    isEqual(another_day){
        if(this.year == another_day.year && this.month == another_day && this.day == another_day.day){
            return true
        }
        return false
    }
    addDays(days){
        if(Number.isInteger(days) && days>0){
            var no_of_days = 31
            var day = this.day
            var month = this.month
            var year = this.year
            if(month == 1){
                if(year%400==0 || year%4==0){
                    no_of_days = 29
                }
                else no_of_days = 28
            }
            else if(month == 3 ||  month == 5 || month == 8 || month == 10){
                no_of_days = 30
            }
            if((day+days) > no_of_days){
                if(month == 11){
                    return new Date(year+1, 0, 0).addDays(days - (no_of_days-day))
                }
                else{
                    return new Date(year, month+1, 0).addDays(days - (no_of_days-day))
                }
            }
            day += days
            return new Date(year, month, day)
        }
        else{
            console.log("Enter Valid day gap.")
            return null
        }
    }
    isBefore(date){
        if(this.year < date.getYear){
            return true
        }
        if(this.year > date.getYear){
            return false
        }
        if(this.month < date.getMonth){
            return true
        }
        if(this.month > date.getMonth){
            return false
        }
        if(this.day <= date.getDay){
            return true
        }
        return false
    }
    calGap(date){
        if(this.isBefore(date) == false){
            return null
        }
        var gap = 0
        if(this.year == date.getYear){
            return gap = date.daysIntoYear - this.daysIntoYear
        }
        if(this.year < date.getYear){
            var no_of_days = 365
            if(this.year%400==0 || this.year%4==0){
                no_of_days = 366
            }
            gap = no_of_days - this.daysIntoYear
            for(var i=this.year+1;i<date.getYear;i++){
                if(i%400==0 || i%4==0){
                    gap += 366
                }
                else gap += 365
            }
            gap += date.daysIntoYear
            return gap
        }
        return null
    }
    get daysIntoYear(){
        var days = 0
        for(var i=0;i<this.month;i++){
            var no_of_days = 31
            if(i == 1){
                if(this.year%400==0 || this.year%4==0){
                    no_of_days = 29
                }
                else no_of_days = 28
            }
            else if(this.month == 3 ||  this.month == 5 || this.month == 8 || this.month == 10){
                no_of_days = 30
            }
            days+=no_of_days
        }
        days += this.day
        return days
    }
    display(){
        console.log(this.day, "/", this.month, "/", this.year)
    }
}

// var today = new Date(2021, 0, 25)
// var tomorrow = today.addDays(387)
// console.log("Final")
// today.display()
// tomorrow.display()
// console.log(today.calGap(tomorrow))

class Library{
    constructor(name, address){
        this.name = name
        this.address = address
        books = []
    }
    addStock(book_id, no_of_stock){
        if(book_id >= books.length){
            console.log("No Such Book registered")
        }
        else books[i].addStock(no_of_stock)
    }
    rentBookStock(book_id, stock_id, student_id){
        if(book_id >= books.length){
            console.log("No Such Book registered")
        }
        else books[book_id].rentBookStock(stock_id, student_id)
    }
    requestRent(book_id, student_id){
        if(book_id >= books.length){
            console.log("No Such Book registered")
        }
        else books[book_id].requestRent(stock_id, student_id)
    }
    returnBook(book_id, stock_id){
        if(book_id >= books.length){
            console.log("No Such Book registered")
        }
        else{
            books[book_id].rentBook(stock_id)
        }
    }
}
