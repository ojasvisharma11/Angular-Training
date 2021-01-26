class Person extends ContactDetails{
    name: string;
    date_of_birth: object;
    gender: string;
    constructor(name: string, dob: object, gender: string, phone_no: number, mail: string, houseno:number, street:string, area:string, zip:number, city:string, state:string, country:string){
        super(phone_no, mail, houseno, street, area, zip, city, state, country)
        this.name = name
        this.date_of_birth = dob
        this.gender = gender
    }
    display(){
        console.log(this.name)
        // this.date_of_birth.display()
        console.log(this.date_of_birth)
        console.log(this.gender)
        super.display()
    }
}

var ojasvi = new Person("Ojasvi", mydob, "female",1234567890, "abc@mail.com", 702, "Bank Colony", "Railway Station", 301001, "Alwar", "Rajasthan", "India")
ojasvi.display()
