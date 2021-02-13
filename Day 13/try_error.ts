class Date{
    static lower_year_limit: number = 2000;
    static upper_year_limit: number = 2050;
    day: number;
    month: number;
    year: number;
    constructor(year: number, month: number, day: number){
        this.validateYear(year);
        this.year = year
        this.validateMonth(month);
        this.month = month
        this.validateDay(day);
        this.day = day
    }
    get isLeapYear(): boolean{
        if(this.year%400 || (this.year%100!=0 && this.year%4==0)){
            return true
        }
        return false
    }
    get no_of_days(): number{
        if(this.month == 4 || this.month == 6 || this.month == 9 || this.month == 12){
            return 30
        }
        if(this.month == 2){
            if(this.isLeapYear){
                return 29
            }
            else  return 28
        }
        else  return 31
       
    }
    validateDay( day){
        if(day == undefined || day == null){
            throw "Enter valid day"
        }
        var no_of_days = this.no_of_days
        if(day < 1 || day > this.no_of_days){
            throw "Enter valid day")
        }
        
        
        // return true;
    }        
    validateMonth(month: number): boolean{
    
        if(month == undefined || month == null){
            throw "Enter valid Month"
        }
        if(typeof month != "number" || Number.isInteger(month) == false){
            throw "Enter valid month"
            // return false
        }
        if(month < 1 || month > 12){
            throw "Month should be in range of 1 to 12"
            // return false
        }
        // console.log(month);
        
        
        // return true;
    }        
    validateYear(year){
        if(year == undefined || year == null){
            throw "Enter valid year"
            // return false
        }
        if(typeof year != "number" || Number.isInteger(year) == false){
            throw "Enter valid year"
            // return false
        }
        if(year<Date.lower_year_limit || year > Date.upper_year_limit){
            throw "The allowed year range is", Date.lower_year_limit, "-", Date.upper_year_limit
            // return false
        }
        
        // return true;
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
    addDays(days: number): object{
        // this.display();
        // console.log(days);
        if(Number.isInteger(days) && days>0){
            var no_of_days = this.no_of_days;
            var day = this.day
            var month = this.month
            var year = this.year
            if((day+days) > no_of_days){
                if(month == 12){
                    return new Date(year+1, 1, 1).addDays(days - (no_of_days-day))
                }
                else{
                    return new Date(year, month+1, 1).addDays(days - (no_of_days-day))
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
            var no_of_days = 31;
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


try{
    var today = new Date(2021, 2, 25)
}
catch(e){
    console.log(e);
}
today.display()

class Date{
    static lower_year_limit: number = 2000;
    static upper_year_limit: number = 2050;
    day: number;
    month: number;
    year: number;
    constructor(year: number, month: number, day: number){
        if(this.validateYear(year ) == false){
            return;
        }
        this.year = year
        if(this.validateMonth(month) == false){
            return;
        }
        this.month = month
        if(this.validateDay( day) == false){
            return;
        }
        this.day = day
    }
    get isLeapYear(): boolean{
        if(this.year%400 || (this.year%100!=0 && this.year%4==0)){
            return true
        }
        return false
    }
    get no_of_days(): number{
        if(this.month == 4 || this.month == 6 || this.month == 9 || this.month == 12){
            return 30
        }
        if(this.month == 2){
            if(this.isLeapYear){
                return 29
            }
            else  return 28
        }
        else  return 31
       
    }
    validateDay( day): boolean{
        if(day == undefined || day == null){
            console.log("Enter valid day")
            return false
        }
        var no_of_days = this.no_of_days
        if(day < 1 || day > this.no_of_days){
            console.log("Enter valid day")
            return false
        }
        
        
        return true;
    }        
    validateMonth(month: number): boolean{
    
        if(month == undefined || month == null){
            console.log("Enter valid Month")
        }
        if(typeof month != "number" || Number.isInteger(month) == false){
            console.log("Enter valid month")
            return false
        }
        if(month < 1 || month > 12){
            console.log("Month should be in range of 1 to 12")
            return false
        }
        // console.log(month);
        
        
        return true;
    }        
    validateYear(year): boolean{
        if(year == undefined || year == null){
            console.log("Enter valid year")
            return false
        }
        if(typeof year != "number" || Number.isInteger(year) == false){
            console.log("Enter valid year")
            return false
        }
        if(year<Date.lower_year_limit || year > Date.upper_year_limit){
            console.log("The allowed year range is", Date.lower_year_limit, "-", Date.upper_year_limit)
            return false
        }
        
        return true;
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
    addDays(days: number): object{
        // this.display();
        // console.log(days);
        if(Number.isInteger(days) && days>0){
            var no_of_days = this.no_of_days;
            var day = this.day
            var month = this.month
            var year = this.year
            if((day+days) > no_of_days){
                if(month == 12){
                    return new Date(year+1, 1, 1).addDays(days - (no_of_days-day))
                }
                else{
                    return new Date(year, month+1, 1).addDays(days - (no_of_days-day))
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
            var no_of_days = 31;
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
var today = new Date(2021, 2, 25)
// var tomorrow = 
console.log(today.addDays(387));
// console.log("Final")
