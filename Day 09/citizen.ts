class Citizen extends Person{
    adhaar_id: number;
    passport_id: string;
    voter_id: string;
    pancard: string;
    constructor(name: string, dob: object, gender: string, phone_no: number, mail: string, houseno:number, street:string, area:string, zip:number, city:string, state:string, country:string, adhaarid:number, passportid: string, voterid: string, pancard: string){
        super(name, dob, gender, phone_no, mail, houseno, street, area, zip, city, state, country)
        this.adhaar_id = adhaarid
        this.passport_id = passportid
        this.voter_id = voterid
        this.pancard = pancard
    }
    display(){
        super.display()
        console.log(this.adhaar_id, this.passport_id, this.voter_id, this.pancard)
    }
    get getAdhaar(){
        return this.adhaar_id
    }
    get getPassport(){
        return this.passport_id
    }
    get getVoterId(){
        return this.voter_id
    }
}
var indianOjasvi = new Citizen("Ojasvi", mydob, "female",1234567890, "abc@mail.com", 702, "Bank Colony", "Railway Station", 301001, "Alwar", "Rajasthan", "India", 123, "Passport", "Vote", "Pan")
indianOjasvi.display()
