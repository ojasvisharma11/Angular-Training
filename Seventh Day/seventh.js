class Address{
    house_no: number;
    street: string;
    area: string;
    zip_code: number;
    city: string;
    state: string;
    country: string;
    static mpp:number = 1;
    constructor(houseno:number, street:string, area:string, zip:number, city:string, state:string, country:string){
        this.house_no = houseno
        this.street = street
        this.area = area
        this.zip_code = zip
        this.city = city
        this.state = state
        this.country = country
    }
    display(){
        console.log(this.house_no, this.street, this.area, this.zip_code, this.city, this.state, this.country)
    }
    set_house_no(new_house_no){
        this.house_no = new_house_no
    }
    set_street(new_house_no, new_street){
        this.set_house_no(new_house_no)
        this.street = new_street
    }
    set_area(new_house_no, new_street, new_area){
        this.set_street(new_house_no, new_street)
        this.area = new_area
    }
    set_zip(new_house_no, new_street, new_area, new_zip){
        this.set_area(new_house_no, new_street, new_area)
        this.zip_code = new_zip
    }
    set_city(new_house_no, new_street, new_area, new_city, new_zip){
        this.set_zip(new_house_no, new_street, new_area, new_zip)
        this.city = new_city
    }
    set_state(new_house_no, new_street, new_area, new_city, new_zip, new_state){
        this.set_city(new_house_no, new_street, new_area, new_city, new_zip)
        this.state = new_state
    }
    set_country(new_house_no, new_street, new_area, new_city, new_zip, new_state, new_country){
        this.set_state(new_house_no, new_street, new_area, new_city, new_zip, new_state)
        this.country = new_country
    }
}
var myaddress = new Address(702, "Bank Colony", "Railway Station", 301001, "Alwar", "Rajasthan", "India")
myaddress.display()
// houseno:number, street:string, area:string, zip:number, city:string, state:string, country:string
var Bankaddress = new Address(501, "Amrapali Plaza", "Amrapali CirCle",302021, "Jaipur", "Rajasthan",  "India")
Bankaddress.display()

class ContactDetails{
    phone_no: number;
    email_id: string;
    address: object;
    constructor(phone_no: number, mail: string, address: object){
        this.phone_no = phone_no
        this.email_id = mail
        this.address = address
    }
    display(){
        console.log(this.phone_no, this.email_id, this.address)
    }
    set_phone_no(new_phone_no: number){
        this.phone_no = new_phone_no
    }
    set_mail(new_mail: string){
        this.email_id = new_mail
    }
    set_address(new_address: object){
        this.address = new_address
    }
}
var mycontactdetails = new ContactDetails(1234567890, "abc@mail.com",myaddress)
mycontactdetails.display()

// console.log(typeof myaddress)
class date{
    day:number;
    month:number;
    year:number;
    constructor(year:number, month:number, day:number){
        this.day = day
        this.month = month
        this.year = year
    }
    display(){
        console.log(this.day,"/", this.month,"/", this.year)
    }
}
var mydob = new date(2000, 08, 28)
mydob.display()

var date_of_joining = new date(2021, 08, 28)
mydob.display()

class ID{
    adhaar_id: number;
    passport_id: string;
    voter_id: string;
    pancard: string;
    constructor(Adhaarid:number, Passportid: string, voterid: string, pancard: string){
        this.adhaar_id = Adhaarid
        this.passport_id = Passportid
        this.voter_id = voterid
        this.pancard = pancard
    }
    display(){
        console.log(this.adhaar_id, this.passport_id, this.voter_id, this.pancard)
    }
}
var myid = new ID(123, "Passport", "Vote", "Pan")
myid.display()

class Person{
    name: string;
    dob: object;
    gender: string;
    contactDetails: object;
    address: object;
    id: object;
    constructor(name: string, dob: object, gender: string, contact: object, address: object, id: object){
        this.name = name
        this.dob = dob
        this.gender = gender
        this.contactDetails = contact
        this.address = address
        this.id = id
    }
    display(){
        console.log(this.name)
        // this.dob.display()
        console.log(this.gender)
        // this.contactDetails.display()
        // this.address.display()
        // this.id.display()

    }
    set_address(new_address:object){
        this.address = new_address
    }
    set_contactDetails(new_contact:object){
        this.contactDetails = new_contact
    }
    set_name(new_name: string){
        this.name = new_name
    }
    getContactDetails(){
        return this.contactDetails
    }
    getAddress(){
        return this.address
    }
    getName(){
        return this.name
    }
    getDob(){
        return this.dob
    }
    getGender(){
        return this.gender
    }
}
var me = new Person("Ojas", mydob, "Female", mycontactdetails, myaddress, myid)
me.display()

class Bank{
    name: string;
    address: object;
    no_of_accounts: number;
    constructor(name: string, address: object){
        this.name = name
        this.address = address
        this.no_of_accounts = 0
    }
    display(){
        console.log(this.name)
        // this.address.display()
        // console.log(this.no_of_accounts)
    }
    add_account(){
        this.no_of_accounts = this.no_of_accounts + 1
    }
    delete_account(){
        if(this.no_of_accounts > 0){
            this.no_of_accounts = this.no_of_accounts - 1
            return
        }
        else{
            this.no_of_accounts = 0
            console.log("No Acoounts to delete")
        }
        
    }
    getName(){
        return this.name
    }
    getAddress(){
        return this.address
    }
    getNoAcc(){
        return this.no_of_accounts
    }
    setAddress(new_address){
        this.address = new_address
    }
}
var myBank = new Bank("City Bank", Bankaddress)
myBank.display()

function AI(face:string, automation:string){
    console.log(face, automation)
}
console.log(typeof AI)
function DataScience(callback){ // or typeof AI, disadvantage being we don't have the freedom of using another function as argument.

    callback("Ojasvi", "Automated")

}
DataScience(AI)



{/* Nested Calla */}

function Nested1(name, id, age){
    console.log("Started Nested1")
    console.log(name)
    console.log("Ended Nested1")
}
function Nested2(name, id, callback) {
    console.log("Started Nested2")
    callback(name, id, 20)
    console.log("Ended Nested2")
}
function Nested3(name, callback){
    console.log("Started Nested3")
    callback(name, 1, Nested1)
    console.log("Ended Nested3")
}
function Nested4(callback){
    console.log("Started Nested4")
    callback("Ojas", Nested2)
    console.log("Ended Nested4")
}
Nested4(Nested3)
