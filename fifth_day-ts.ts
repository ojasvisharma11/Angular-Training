// function emotion(money:number, funday: string):string{
//     console.log(money+"Emotion "+funday)
//     return funday
// }
// var a = emotion(5000000, "Money")

// var fruit = "apple"
// console.log(fruit)

// var ob = {
//     num:"10", 
//     num2 : 14
// }
// console.log(ob)

// var mother = ["happiness", "always wants u to be happy", 5000, "yes", "dosa"]
// console.log(mother)

// var motheragain = {
//     feeling: "happiness",
//     caring : "always wants u to be happy",
//     money : 5000000,
//     areuinoffice : "yes",
//     hadbreakfast : "dosa",
// }
// console.log(motheragain)  

// function care(emotion:string, caring:string){
//     var salary = "5.5 Lakhs"
//     console.log(emotion, caring, salary)
// }
// care("joy", "happy")
// care("joyful", "wants to be with u")

// function supercoder(name_given:string, age_given:number, company:string){
//     var name = name_given
//     var age = age_given
//     var company_name = company
//     console.log(name, age, company_name)
// } 
// supercoder("Ojasvi", 20, "In Time Tec")

var book1 = ["The Big Bang Theory", 100]
var book2 = ["Let Us C", 300]
var book3 = ["Introduction to infinty", 100]
// console.log(book1)
// console.log(book2)
// console.log(book3)
console.log(typeof book1)

// function collegeLibrary(book_one:object, book_two:object){
//     var name = "My College Library"
//     var first_book = book_one
//     var second_book = book_two
//     console.log(name, first_book, second_book)
// }
// collegeLibrary(book1, book2)

// Third Example
// person = [FName, LName, Favourite book]
// var person1 = ["Ojasvi", "Sharma", book1]
// var person2 = ["Tushar", "Sharma", book2]
// var person3 = ["Himanshu", "Dhadhich", book3]
// console.log(person1)
// console.log(person2)
// console.log(person3)

// function cityLibrary(book_one:object, book_two:object){
//     var name = "The City Library"
//     var first_book = book_one
//     var second_book = book_two
//     console.log(name, first_book, second_book)
// }

// cityLibrary(book2, book3)

// Fifth Example
class employee{
    name:string;
    company_name:string;
    designation:string;
    salary:number;
    location:string;
    constructor(name:string, company:string, designation:string, salary:number, location:string){
        this.name = name;
        this.company_name = company;
        this.designation = designation;
        this.salary = salary;
        this.location = location;
        console.log(this.name)
    }
}
var venkatesh = new employee("Venkatesh", "JVT", "Programmer", 5.5 , "Banglore")

// Sixth Example
// class ids{
//     account_id:number;
//     broadband_user_id :number;
//     ip_address:string;
//     constructor(account:number, broadbandUser:number, ip:string){
//         this.account_id = account;
//         this.broadband_user_id = broadbandUser;
//         this.ip_address = ip;
//     }
//     display(){
//         console.log(this.account_id)
//         console.log(this.broadband_user_id)
//         console.log(this.ip_address)
//     }
// }
// var jvt_ids = new ids(1135497, 11128550, "10.245.97.123")
// jvt_ids.display()

// Seventh Example
// class speed{
//     mb_downloaded:string;
//     mobile_download_speed:string;
//     mobile_upload_speed:string;
//     constructor(mb:string, m_download:string, m_upload:string){
//         this.mb_downloaded = mb;
//         this.mobile_download_speed = m_download;
//         this.mobile_upload_speed = m_upload;
//     }
//     display(){
//         console.log(this.mb_downloaded, this.mobile_download_speed, this.mobile_upload_speed);
//     }
// }
// var jvt_speeds = new speed("21.26 GB", "30.05 mbps", "32.06 mbps")
// jvt_speeds.display()

// Eightth Example
// class company{
//     name:string;
//     qualification:string;
//     date_of_birth:string;
//     address:string;
//     contact_no:number;
//     email:string;
//     experience:number;
//     skills:string;
//     reporting_manager:object;
//     pan_number:string;
//     ids : object;
//     internet_speed :object;
//     constructor(name:string, qua:string, dob:string, add:string, no:number, email:string, exp:number, skill:string, mng:object, pan:string, id:object, speed:object){
//         this.name = name
//         this.qualification = qua
//         this.date_of_birth = dob
//         this.address = add
//         this.contact_no = no
//         this.email = email
//         this.experience = exp
//         this.skills = skill
//         this.reporting_manager = mng
//         this.pan_number = pan
//         this.ids = id
//         this.internet_speed = speed
//     }
//     display(){
//         console.log(this.name, this.qualification, this.date_of_birth, this.address, this.contact_no, this.email, this.experience, this.skills, this.reporting_manager, this.pan_number, this.ids, this.internet_speed)
//     }
// }
// var jvt = new company("Jai Venkateswara Technologies", "B TECH MCA MBA BSC MSC", "2/6/1988", "Jaipur", 9900367097, "venkatesh.db@gmail.com", 1, "C,CPP all Lang & 1 years", venkatesh, "asu675901f", jvt_ids, jvt_speeds).display()

// Ninth Example
// class person{
//     name:string;
//     age:number;
//     constructor(name:string, age:number){
//         this.name = name;
//         this.age = age;
//     }
//     display(){
//         console.log(this.name, this.age)
//     }
// }
// var amit = new person("Amit", 20)

// Tenth Example
class performance{
    performance_name:string;
    s_time:string;
    e_time:string;
    constructor(performance_name:string, s_time:string, e_time:string){
        this.performance_name = performance_name
        this.startTime = s_time
        this.endTime = e_time
    }
}
var beautiful_performance = new performance("Beautiful Performance", "9 am", "12 pm")

// Elevemnth Example
class slot{
    name:string;
    time:string;
    number_of_tickets:number;
    constructor(name:string, time:string, no:number){
        this.name = name
        this.time = time
        this.number_of_tickets = no
    }
    display(){
        console.log(this.name, this.time, this.number_of_tickets)
    }
}
var morning_slot = new slot("Morning", "9 am", 2000)
morning_slot.display()

// Twelth Exam
class ticket_type{
    ticket_type:string;
    date:string;
    day:string;
    preferred_slot:object
    constructor(ticket_type:string, date:string, day:string, prefer_slot:object){
        this.ticket_type = ticket_type
        this.date = date
        this.day = day
        this.preferred_slot = prefer_slot
    }
    display(){
        console.log(this.ticket_type, this.date, this.day, this.preferred_slot)
    }
}
var venkatesh_ticket = new ticket_type("Morning", "21 Jan", "Monday", morning_slot)
venkatesh_ticket.display()


// Thirteenth Example
class order_ticket{
    ticket:object;
    person:object;
    order_no:number;
    amount:number;
    reportin_time:string;
    preferred_performance:object;
    constructor(ticketType:object, person:object, order_no:number, amount:number, reporting_time:string, performamce:object){
        this.ticket = ticketType
        this.person = person
        this.order_number - order_no
        this.amount = amount
        this.reporting_time - reporting_time
        this.preferred_performance = performance
    }
    display(){
        console.log(this.ticket, this.person, this.order_number, this.amount, this.reportin_time, this.performance)
    }
}
var venkatesh_order = new order_ticket(venkatesh_ticket, venkatesh, 1, 2000, "5 am", beautiful_performance)
venkatesh_order.display()
