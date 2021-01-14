<script>
// Class
var fruit = "apple"

function Mother(){
var emotion = "happiness"
var caring = "always wants u to be happy"
var money = 5000
var areuinoffice = "yes"
var hadbreakfast = "dosa"
document.write(emotion, caring, money,areuinoffice, hadbreakfast)
Mother = ["happiness", "always wants u to be happy", 5000, "yes", "dosa"]
}
Mother()
//class{

//}
function care(emotion, caring){
var salary = "5.5 Lakhs"
document.write(emotion, caring, salary)
}
care("joy", "happy")
care("joyful", "wants to be with u")

// First Example
function supercoder(name_given, age_given, company){
var name = name_given
var age = age_given
var company_name = company
document.write(name, age, company_name)
} 
supercoder("Ojasvi", 20, "In Time Tec")

// Second Example
book1 = ["The Big Bang Theory", 100]
book2 = ["Let Us C", 300]
book3 = ["Introduction to infinty", 100]

function collegeLibrary(book_one, book_two){
var name = "My College Library"
first_book = book_one
second_book = book_two
document.writeln(name, first_book, second_book)
}
collegeLibrary(book1, book2)

// Third Example
// person = [FName, LName, Favourite book]
person1 = ["Ojasvi", "Sharma", book1]
person2 = ["Tushar", "Sharma", book2]
person3 = ["Himanshu", "Dhadhich", book3]
document.writeln(person1)
document.writeln(person2)
document.writeln(person3)

function cityLibrary(book_one, book_two){
var name = "The City Library"
first_book = book_one
second_book = book_two
document.writeln(name, first_book, second_book)
}

cityLibrary(book2, book3)

// Forth Example
function grocery_store(){
var name = "Grocery Store For All"
soap1 = ["Dove", 100]
soap2 = ["Lux", 30]
soap3 = ["Neem", 200]
soap_entry = [soap1, soap2, soap3]
NoteBook1 = ["Classmate", 100]
NoteBook2 = ["Saathi", 200]
NoteBook_entry = [NoteBook1, NoteBook2]
Noodles1 = ["Maggie", 200]
Noodles2 = ["Yippie", 100]
Noodles_entry = [Noodles1, Noodles2]
Biscuit1 = ["Tiger", 10]
Biscuit2 = ["Good Day", 20]
Biscuit3 = ["Bourbon", 100]
Biscuit4 = ["Hide n Seek" , 300]
Biscuit_entry = [Biscuit1, Biscuit2, Biscuit3]
items_entry = [soap_entry, NoteBook_entry, Biscuit_entry, Noodles_entry]
document.writeln(name, items_entry)
}
grocery_store()

// Fifth Example
class employee{
constructor(name, company, designation, salary, location){
this.name = name
this.comapny_name = company
this.designation = designation
this.salary = salary
this.location = location
document.writeln(this.name)
}
}
var venkatesh = new employee("Venkatesh", "JVT", "Programmer", 5.5 , "Banglore")

// Sixth Example
class ids{
constructor(account, broadbandUser, ip){
this.account_id = account
this.broadband_user_id = broadbandUser
this.ip_address = ip
}
}
var jvt_ids = new ids(1135497, 11128550, "10.245.97.123")

// Seventh Example
class speed{
constructor(mb, m_download, m_upload){
this.mb_downloaded = mb
this.mobile_download_speed = m_download
this.mobile_upload_speed = m_upload
}
}
var jvt_speeds = new speed("21.26 GB", "30.05 mbps", "32.06 mbps")

// Eightth Example
class company{
constructor(name, qua, dob, add, no, email, exp, skill, mng, pan, id, speed){
this.name = name
this.qualification = qua
this.date_of_birth = dob
this.address = add
this.contact_no = no
this.email = email
this.experience = exp
this.skills = skill
this.reporting_manager = mng
this.pan_number = pan
this.ids = id
this.internet_speed = speed
}
}
var jvt = new company("Jai Venkateswara Technologies", "B TECH MCA MBA BSC MSC", "2/6/1988", 9900367097, "venkatesh.db@gmail.com", 1, "C,CPP all Lang & 1 years", venkatesh, "asu675901f", jvt_ids, jvt_speeds)

// Ninth Example
class person{
constructor(name, age){
this.name = name
this.age = age
}
}
var amit = new person("Amit", 20)

// Tenth Example
class performance{
constructor(performance, s_time, e_time){
this.performance = performance
this.startTime = s_time
this.endTime = e_time
}
}
var beautiful_performance = new performance("Beautiful Performance", "9 am", "12 pm")

// Elevemnth Example
class slot{
construtor(name, time, no){
this.name = name
this.time = time
this.number_of_tickets = no
}
}
var morning_slot = new slot("Morning", "9 am", 2000)

// Twelth Exam
class ticket_type{
constructor(ticket_type, date, day, time, p_slot){
this.ticket_type = ticket_type
this.date = date
this.day = day
this.time = time
this.preferred_slot = p_slot
}
}
var venkatesh_ticket = new ticket_type("Morning", "21 Jan", "Monday", morning_slot)

// Thirteenth Example
class order_ticket{
constructor(ticketType, person, order_no, amount, no, reporting_time, performamce){
this.ticket = ticketType
this.person = person
this.order_number - order_no
this.amount = amount
this.number_of_person = no
this.reporting_time - reporting_time
this.performance = performance
}
}
var venkatesh_order = new order_ticket(venkatesh_ticket, venkatesh, 1, 2000, "5 am", beautiful_performance)

// Fourteenth Example
class person{
constructor(name, age, gender, mail_id, photo_id, id_card_no){


function person(g_name, g_age, email, contact_no, skill, projects, cgpa, passoutyear, incomingyear, favourite_color){
var name = g_name
var age = g_age
var email_id = email
var contact_number = contact_no
var skills = skill
this.projects = projects
this.cgpa = cgpa
this.pass_out_year = passoutyear
this.incoming_year = incomingyear
this.favourite_color = favourite_color
document.write(name, age, email_id, contact_number, skills, projects, cgpa, pass_out_year, incoming_year, favourite_color)
}

person("Ojasvi Sharma", 20, "ojasvi.sharma@intimetec.com", 9783045520, "C++, Python, DL", "CyberBullying Detection",  7, 2021, 2017, "WHITE")

</script>