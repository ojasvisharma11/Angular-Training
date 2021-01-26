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
    set_house_no(new_house_no: number){
        this.house_no = new_house_no
    }
    set_street(new_house_no: number, new_street: string){
        this.set_house_no(new_house_no)
        this.street = new_street
    }
    set_area(new_house_no: number, new_street: string, new_area: string){
        this.set_street(new_house_no, new_street)
        this.area = new_area
    }
    set_zip(new_house_no: number, new_street: string, new_area: string, new_zip: number){
        this.set_area(new_house_no, new_street, new_area)
        this.zip_code = new_zip
    }
    set_city(new_house_no: number, new_street: string, new_area: string, new_zip: number, new_city: string){
        this.set_zip(new_house_no, new_street, new_area, new_zip)
        this.city = new_city
    }
    set_state(new_house_no: number, new_street: string, new_area: string, new_zip: number, new_city: string, new_state: string){
        this.set_city(new_house_no, new_street, new_area, new_zip, new_city)
        this.state = new_state
    }
    set_country(new_house_no: number, new_street: string, new_area: string,new_zip: number ,new_city: string, new_state: string, new_country: string){
        this.set_state(new_house_no, new_street, new_area, new_zip, new_city, new_state)
        this.country = new_country
    }
    get getHouseNo(): number{
        return this.house_no
    }
    get getStreet(): string{
        return this.street
    }
    get getArea(): string{
        return this.area
    }
    get getZipCode(): number{
        return this.zip_code
    }
    get getCity(): string{
        return this.city
    }
    get getState(): string{
        return this.state
    }
    get getCountry(): string{
        return this.country
    }
}
var myaddress = new Address(702, "Bank Colony", "Railway Station", 301001, "Alwar", "Rajasthan", "India")
myaddress.display()
// houseno:number, street:string, area:string, zip:number, city:string, state:string, country:string
var Bankaddress = new Address(501, "Amrapali Plaza", "Amrapali CirCle",302021, "Jaipur", "Rajasthan",  "India")
Bankaddress.display()


class ContactDetails extends Address{
    phone_no: number;
    email_id: string;

    constructor(phone_no: number, mail: string, houseno: number, street:string, area:string, zip:number, city:string, state:string, country:string){
        super(houseno, street, area, zip, city, state, country)
        this.phone_no = phone_no
        this.email_id = mail
    }
    display(){
        console.log(this.phone_no, this.email_id)
        super.display()
    }
    set setPhoneNo(new_phone_no: number){
        this.phone_no = new_phone_no
    }
    set setMail(new_mail: string){
        this.email_id = new_mail
    }
    get getPhoneNo(): number{
        return this.phone_no
    }
    get getEmailId(): string{
        return this.email_id
    }
}
var mycontactdetails = new ContactDetails(1234567890, "abc@mail.com", 702, "Bank Colony", "Railway Station", 301001, "Alwar", "Rajasthan", "India")
mycontactdetails.display()
console.log(mycontactdetails.getArea)
