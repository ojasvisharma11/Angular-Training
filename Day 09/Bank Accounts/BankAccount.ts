class BankAccount extends User{
    account_number: number;
    constructor(accountNo: number){
        super()
        this.account_number = accountNo
    }
    display(){
        super.display()
        console.log(this.account_number)
    }
}

class SavingAccount extends BankAccount{
    
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

