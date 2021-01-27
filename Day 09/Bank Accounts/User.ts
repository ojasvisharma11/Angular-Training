class User extends Citizen{
    user_id: number;
    constructor(user_id: number){
        super()
        this.user_id = user_id
    }
    display(){
        super.display()
        console.log(this.user_id)
    }
}
