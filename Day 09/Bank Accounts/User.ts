class User extends Citizen{
    user_id: number;
    constructor(name: string, dob: object, gender: string, phone_no: number, mail: string, houseno:number, street:string, area:string, zip:number, city:string, state:string, country:string, adhaarid:number, passportid: string, voterid: string, pancard: string, user_id: number){
        super(name, dob, gender, phone_no, mail, houseno, street, area, zip, city, state, country, adhaarid, passportid, voterid, pancard)
        this.user_id = user_id
    }
    display(){
        super.display()
        console.log(this.user_id)
    }
}
