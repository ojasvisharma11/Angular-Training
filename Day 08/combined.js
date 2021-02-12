class Date{
    constructor(year, month, day){
        this.year = year
        this.month = month
        this.day = day
        if(this.year == undefined){
            console.log("Enter valid year")
        }
        if(this.month == undefined){
            console.log("Enter valid Month")
        }
        if(this.day == undefined){
            console.log("Enter valid day")
        }
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
        if(date == null){
            console.log("Enter valid date")
            return
        }
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
// tomorrow.display()



class Book{
    constructor(name, author){
        this.name = name
        this.author = author
        this.stocks = []
    }
    addStock(no_of_stock = 1){
        for(var i=0;i<no_of_stock;i++){
            this.stocks.push({memberId:null, rentDate : null})
        }
    }
    rentBookStock(stock_id, member_id, rentDate){
        if(stock_id >= this.stocks.length){
            console.log("No Such Stock")
        }
        else{
            if(this.stocks[stock_id].memberId == null){
                console.log("Sorry Book Currently not Available")
            }
            else{
                this.stocks[available].rentDate = rentDate
                this.stocks[stock_id].memberId = member_id
                console.log("Book Assigned")
            }
        }
    }
    requestRent(member_id, rentDate){
        var available = this.checkAvailabity()
        if(available == null){
            console.log("Please check out later")
        }
        else{
            this.stocks[available].memberId = member_id
            this.stocks[available].rentDate = rentDate
            console.log("Book", available, "ASSIGNED!")
        }
    }
    checkAvailabity(){
        var availables = []
        for(var i=0;i<this.stocks.length;i++){
            if(this.stocks[i].memberId == null){
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
    returnBook(stock_id){
        if(stock_id >= this.stocks.length || stock_id < 0){
            console.log("No such Stock exist")
        }
        else if(this.stocks[stock_id].memberId == null){
            console.log("The Book stock was never been rented")
        }
        else{
            var rentDate = this.stocks[stock_id].rentDate
            this.stocks[stock_id].memberId = null
            this.stocks[stock_id].rentDate = null
            console.log("Book returned")
            return rentDate
        }

    }
    display(){
        console.log(this.name, this.author)
        console.log(this.stocks)
    }
}
// var answer = prompt("How are you? ")
// console.log("It Works!")
// var creatingAbundance = new Book()
// console.log("creatingAbundance.addStock(1)")
// creatingAbundance.addStock(1)
// console.log("creatingAbundance.addStock(1)")
// creatingAbundance.addStock(1)
// console.log("creatingAbundance.addStock(1)")
// creatingAbundance.addStock(1)
// console.log("creatingAbundance.checkAvailabity()")
// creatingAbundance.checkAvailabity()
// console.log("creatingAbundance.requestRent(2,1)")
// creatingAbundance.requestRent(2,1)
// console.log("creatingAbundance.requestRent(2)")
// creatingAbundance.requestRent(2)
// console.log("")
// creatingAbundance.requestRent(2)
// console.log("")
// creatingAbundance.requestRent(2)
// console.log("")
// creatingAbundance.returnBook(23)
// console.log("")
// creatingAbundance.requestRent(2)

class Library{
    constructor(name, address, allowedRentDays, finePerDay){
        this.name = name
        this.address = address
        this.books = []
        this.allowedRentDays = allowedRentDays
        this.finePerDay = finePerDay
    }
    addStock(book_id, no_of_stock = 1){
        if(book_id >= this.books.length){
            console.log("No Such Book registered")
        }
        else this.books[book_id].addStock(no_of_stock)
    }
    addBook(book){
        this.books.push(book)
    }
    rentBookStock(book_id, stock_id, member_id, rentDate){
        if(book_id >= this.books.length){
            console.log("No Such Book registered")
        }
        else this.books[book_id].rentBookStock(stock_id, member_id, rentDate)
    }
    requestRent(book_id, member_id, rentDate){
        if(book_id >= this.books.length){
            console.log("No Such Book registered")
        }
        else this.books[book_id].requestRent(member_id, rentDate)
    }
    returnBook(book_id, stock_id, returnDate){
        if(book_id >= this.books.length || book_id < 0){
            console.log("No Such Book registered")
        }
        else{
            var rentDate = this.books[book_id].returnBook(stock_id)
            if(rentDate == null){
                console.log("Either/both rentedDate and entered date are invalid")
                return
            }
            var rentedDays = rentDate.calGap(returnDate)
            if(rentedDays == null){
                console.log("Either/both rentedDate and entered date are invalid")
            }
            else{
                if(rentedDays <= this.allowedRentDays){
                    console.log("No fine is payble")
                }
                else{
                    console.log((rentedDays-this.allowedRentDays)*this.finePerDay, "is to paid")
                }
            }
        }
        return
    }
    display(){
        console.log(this.name, this.address, this.allowedRentDays, this.finePerDay)
    }
}
var today = new Date(2021, 0, 25)
var tomorrow = today.addDays(1)
var returnDay = today.addDays(300)

let theBigBangTheory = new Book("The Big Bang Theory", "Dr. Ross Geller")
let moonRising = new Book("The Moon Rising", "Tui T. Sutherland")

let cityLibrary = new Library("city Library", "Vaishali Nagar", 10, 5)
cityLibrary.display()

cityLibrary.addBook(theBigBangTheory)
cityLibrary.addBook(moonRising)
cityLibrary.addStock(1,3)

cityLibrary.requestRent(1,2, today)
cityLibrary.requestRent(1,1, today)
// returnBook(book_id, stock_id, date)
cityLibrary.returnBook(1,0, today.addDays(10))
cityLibrary.returnBook(1,1,today.addDays(11))
