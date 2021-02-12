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


class date{
    year: number;
    month: number;
    day: number;
    constructor(year: number, month: number, day: number){
        this.year = year
        this.month = month
        this.day = day
    }
    get getYear(): number{
        return this.year
    }
    get getMonth(): number{
        return this.month
    }
    get getDay(): number{
        return this.day
    }
    set setYear(year: number){
        this.year = year
    }
    set setMonth(month: number){
        this.month= month
    }
    set setDay(day: number){
        this.day = day
        
    }
    isEqual(another_day: object): boolean{
        if(this.year == another_day.getYear && this.month == another_day.getMonth && this.day == another_day.getDay){
            return true
        }
        return false
    }
    addDays(days: number): any{
        if(Number.isInteger(days) && days>0){
            var no_of_days: number = 31
            var day: number = this.day
            var month: number = this.month
            var year:number = this.year
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
                    return new date(year+1, 0, 0).addDays(days - (no_of_days-day))
                }
                else{
                    return new date(year, month+1, 0).addDays(days - (no_of_days-day))
                }
            }
            day += days
            return new date(year, month, day)
        }
        else{
            console.log("Enter Valid day gap.")
            return null
        }
    }
    isBefore(date: object): boolean{
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
    calGap(date: object): number{
        if(this.isBefore(date) == false){
            return -1
        }
        var gap:number = 0
        if(this.year == date.getYear){
            return gap = date.daysIntoYear - this.daysIntoYear
        }
        if(this.year < date.getYear){
            var no_of_days: number = 365
            if(this.year%400==0 || this.year%4==0){
                no_of_days = 366
            }
            gap = no_of_days - this.daysIntoYear
            for(var i:number=this.year+1;i<date.getYear;i++){
                if(i%400==0 || i%4==0){
                    gap += 366
                }
                else gap += 365
            }
            gap += date.daysIntoYear
            return gap
        }
        return -1
    }
    get daysIntoYear(): number{
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

var today = new date(2021, 0, 25)
console.log(typeof today)
var tomorrow = today.addDays(387)
// console.log("Final")
today.display()

tomorrow.display()
console.log(today.calGap(tomorrow))
// tomorrow.display()



class appearance{
    weight: number;
    height_in_ft: number;
    eye_color: string;
    skin_complexion: string;
    extra_info: string[];
    constructor(weight: number, height_in_ft: number, eye_color:string, skin_complexion: string){
        this.weight = weight;
        this.height_in_ft = height_in_ft;
        this.eye_color = eye_color;
        this.skin_complexion = skin_complexion;
        this.extra_info = [];
    }
    addExtraInfo(info:string){
        this.extra_info.push(info);
    }
    display(){
        console.log(this.weight, this.height_in_ft, this.eye_color, this.skin_complexion);
        if(this.extra_info != []){
            console.log(this.extra_info);
        }
    }
    set setWeight(weight: number){
        this.weight = weight;
    }
    set setHeight(height: number){
        this.height_in_ft = height;
    }
    set setEyeColor(color:string){
        this.eye_color = color;
    }
    set setSkinComp(skin_complexion: string){
        this.skin_complexion = skin_complexion;
    }
    set setExtraInfo(information: string[]){
        this.extra_info = information;
    }
    deleteExtraInfo(){
        this.extra_info = [];
    }
    get getWeight():number{
        return this.weight;
    }
    get getHeight(): number{
        return this.height_in_ft;
    }
    get getEyeColor(): string{
        return this.eye_color;
    }
    get getSkinComp(): string{
        return this.getSkinComp;
    }
    get getExtraInfo(): string[]{
        return this.extra_info;
    }
}


class name{
    firstName: string;
    middleName: string;
    lastName: string;
    constructor(firstName:string, middleName: string = "", lastName:string){
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
    }
    get getLastName():string{
        return this.lastName;
    }
    get getMiddleName():string{
        return this.middleName;
    }
    get getFirstName():string{
        return this.firstName;
    }
    set setFirstName(first_name:string){
        this.firstName = first_name;
    }
    set setMiddleName(middle_name:string){
        this.middleName = middle_name;
    }
    set setLastName(last_name:string){
        this.lastName = last_name;
    }
    display(){
        console.log(this.firstName, this.middleName, this.lastName);
    }
}

class Human extends appearance{
    name: object;
    date_of_birth: object;
    gender: string;
    constructor(name: object, dob: object,gender:string, weight: number, height_in_ft: number, eye_color:string, skin_complexion: string){
        super(weight, height_in_ft, eye_color, skin_complexion);
        this.name = name;
        this.date_of_birth = dob;
        this.gender = gender;
    }
    display(){
        this.date_of_birth.display();
        this.name.display();
        super.display();
    }
    set setName(name: object){
        this.name = name;
    }
    set setDob(dob:object){
        this.date_of_birth = dob;
    }
    get getName(): object{
        return this.name;
    }
    get getDob(): object{
        return this.date_of_birth;
    }
}


class  Person extends Human{
    contactDetails: object;
    constructor(name: object, dob: object, gender:string, contactDetails:object, weight: number, height_in_ft: number, eye_color:string, skin_complexion: string){
        super(name, dob, gender, weight, height_in_ft, eye_color, skin_complexion);
        this.contactDetails = contactDetails;
    }
    display(){
        super.display();
        this.contactDetails.display();
    }
    set setContactDetails(contact_details: object){
        this.contactDetails = contact_details;
    }
    get getContactDetails(): object{
        return this.contactDetails;
    }
}
