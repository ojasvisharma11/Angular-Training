class BankAccount extends User{
    account_number: number;
    balance: number;
    minimum_amount: number;
    withdrawLimit: number;
    constructor(name: string, dob: object, gender: string, phone_no: number, mail: string, houseno:number, street:string, area:string, zip:number, city:string, state:string, country:string, adhaarid:number, passportid: string, voterid: string, pancard: string, user_id: number, accountNo: number, minimum_amount: number, withdraw_limit: number){
        super(name, dob, gender, phone_no, mail, houseno, street, area, zip, city, state, country, adhaarid, passportid, voterid, pancard, user_id)
        this.account_number = accountNo
        this.balance = 0
        this.minimum_amount = minimum_amount
        this.withdrawLimit = withdraw_limit
        if(this.checkAmount(this.minimum_amount) == false){
            console.log("Set appropriate positive minimum_amount")
        }
        if(this.checkAmount(this.withdrawLimit) == false){
           console.log("Enter Appropriate withdraw Limit")
        }
    }
    checkAmount(amount: number){
        if(amount < 0){
            return false
        }
        else  return true
    }
    display(){
        super.display()
        console.log(this.account_number)
    }
    get getBalance(){
        return this.balance
    }
    get getMinimumAmount(){
        return this.minimum_amount
    }
    set setMinimumAmount(minimum_amount:numnber){
        this.minimum_amount = minimum_amount
    }
    addBalance(amount: number){
        if(this.checkAmount(amount) == false || amount == 0){
            console.log("Enter a positive Amount")
        }
        else    this.account_number += amount
    }
    get getWithdrawLimit(){
        return this.withdrawLimit
    }
    CanWithDraw(amount: number): boolean{
        if(this.checkAmount(amount) == false || amount == 0){
            console.log("Enter Positive Amount")
            return false
        }
        if(amount > this.withdrawLimit){
            console.log("Exceeds the withdraw Limit")
            return false
        }
        if(this.balance-amount < this.minimum_amount){
            console.log("Transaction can't be processed, as appropriate minimum amount is not getting left")
            return false
        }
        return true
    }
    withDrawBalance(amount:number){
        if(CanWithDraw(amount) == true){
            this.balance -= amount
        }
    }
    get getAccountNo{
        return this.account_number
    }
}

class SavingAccount extends BankAccount{
    rate_of_interest: number;
}

class FixedAccount extends BankAccount{

}

class CurrentAccount extends BankAccount{

}

class SmallFixedAcccount extends FixedAccount{

}

class MedFixedAccount extends FixedAccount{

}

class LargeAccount extends FixedAccount{

}

