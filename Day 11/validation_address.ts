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
        if(this.validateHouseNumber(houseno) == false){
            return;
        }
        this.house_no = houseno
        this.street = street
        this.area = area
        if(this.validateZipCode( zip ) == false){
            return;
        }
        this.zip_code = zip
        this.city = city
        this.state = state
        this.country = country
    }
    validateHouseNumber(house_no: number): boolean{
        if(Number.isInteger(house_no) == false){
            console.log("House Number must be an integer");
            return false;
        }
        if(house_no <= 0){
            console.log("House number must be positive")
            return false
        }
        if(house_no >= 990000){
            console.log("house number can't be this large");
            return false;
        }return true;
    }
    validateZipCode(zip_code: number): boolean{
        if(Number.isInteger(zip_code) == false){
            console.log("House Number must be an integer");
            return false;
        }
        if(zip_code <= 0){
            console.log("House number must be positive")
            return false
        }
        if( !(zip_code/1000000 == 0 && zip_code/1000000 != 0)){
            console.log("Zip Code must have six numbers");
        }
    } 
    display(){
        console.log(this.house_no, this.street, this.area, this.zip_code, this.city, this.state, this.country)
    }
    set_house_no(new_house_no: number){
        if(this.validateHouseNumber(houseno) == false){
            return;
        }
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
        if(this.validateZipCode( zip ) == false){
            return;
        }
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
myaddress.display();
var Bankaddress = new Address(501, "Amrapali Plaza", "Amrapali CirCle",302021, "Jaipur", "Rajasthan",  "India")
Bankaddress.display()

class ContactDetails extends Address{
    phone_no: number;
    email_id: string;

    constructor(phone_no: number, mail: string, houseno: number, street:string, area:string, zip:number, city:string, state:string, country:string){
        super(houseno, street, area, zip, city, state, country)
        // if we threw an exception there, we can catch here.
        if(this.validateNumber(phone_no) == false){
            return;
        }
        this.phone_no = phone_no
        if(this.validateEmailId(mail) == false){
            return false;
        }
        this.email_id = mail
    }
    display(){
        console.log(this.phone_no, this.email_id)
        super.display()
    }
    validateNumber(phone_no: number): boolean{
        if(Number.isInteger(phone_no) == false){
            console.log("Phone Number must consist of integers");
            return false;
        }
        if(phone_no <= 0){
            console.log("Phone number must be positive")
            return false
        }
        if( !(phone_no/100000000000 == 0 && phone_no/10000000000 != 0)){
            console.log("Phone Number must have 10 numbers");
        }
    }
    validateEmailId(mail: string): boolean{
        var valid: boolean = false;
        var index: number = -1;
        for(var i:number = 0;i<mail.length;i++){
            if(mail[i] == '@'){
                valid = true;
                index = i;
                break;
            }
        }
        if(valid == false){
            console.log("Mail is should contain @");
            return false;
        }
        valid = false;
        for(var i: number = index+1;i<mail.length;i++){
            if(mail[i] == '.'){
                valid = true;
                break;
            }
        }
        if(valid == false){
            console.log("Not an acceptable mail ")
        }
        return valid;
    }
    set setPhoneNo(new_phone_no: number){
        if(this.validateNumber(new_phone_no) == false){
            return;
        }
        this.phone_no = new_phone_no
    }
    set setMail(new_mail: string){
        if(this.validateEmailId(new_mail) == false){
            return false;
        }
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
