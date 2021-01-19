<script>
    class Address{
        constructor(houseno, street, area, zip, city, state, country){
            this.house_no = houseno
            this.street = street
            this.area = area
            this.zip_code = zip
            this.city = city
            this.state = state
            this.country = country
        }
        display(){
            document.writeln(this.house_no, this.street, this.area, this.zip_code, this.city, this.state, this.country)
        }
        set_house_no(new_house_no){
            this.house_no = new_house_no
        }
        set_street(new_house_no, new_street){
            this.house_no = new_house_no
            this.street = new_street
        }
        set_area(new_house_no, new_street, new_area){
            this.house_no = new_house_no
            this.street = new_street
            this.area = new_area
        }
        set_zip(new_house_no, new_street, new_area, new_zip){
            this.house_no = new_house_no
            this.street = new_street
            this.area = new_area
            this.zip_code = new_zip
        }
        set_city(new_house_no, new_street, new_area, new_city, new_zip){
            this.house_no = new_house_no
            this.street = new_street
            this.area = new_area
            this.zip_code = new_zip
            this.city = new_city
        }
        set_state(new_house_no, new_street, new_area, new_city, new_zip, new_state){
            this.house_no = new_house_no
            this.street = new_street
            this.area = new_area
            this.zip_code = new_zip
            this.city = new_city
            this.state = new_state
        }
        set_country(new_house_no, new_street, new_area, new_city, new_zip, new_state, new_country){
            this.house_no = new_house_no
            this.street = new_street
            this.area = new_area
            this.zip_code = new_zip
            this.city = new_city
            this.state = new_state
            this.country = new_country
        }

    }
    var myaddress = new Address(702, "Bank Colony", "Railway Station", "Alwar", "Rajasthan", 301001, "India")
	myaddress.display()

    var Bankaddress = new Address(501, "Amrapali Plaza", "Amrapali CirCle", "Jaipur", "Rajasthan", 123456, "India")
	Bankaddress.display()

    class ContactDetails{
        constructor(phone_no, mail, address){
            this.phone_no = phone_no
            this.email_id = mail
            this.address = address
        }
        display(){
            document.writeln(this.phone_no, this.email_id, this.address)
        }
        set_phone_no(new_phone_no){
            this.phone_no = new_phone_no
        }
        set_mail(new_mail){
            this.email_id = new_mail
        }
        set_address(new_address){
            this.address = new_address
        }
    }
    var mycontactdetails = new ContactDetails(1234567890, "abc@mail.com", "Alwar")
    mycontactdetails.display()

    class Date{
        constructor(date, month, year){
            this.date = date
            this.month = month
            this.year = year
        }
        display(){
            document.writeln(this.date, this.month, this.year)
        }
    }
    var mydob = new Date(28, "Aug", 2000)
    mydob.display()

    var date_of_joining = new Date(28, "Aug", 2000)
    mydob.display()

    class ID{
        constructor(Adhaarid, Passportid, voterid, pancard){
            this.adhaar_id = Adhaarid
            this.passport_id = Passportid
            this.voter_id = voterid
            this.pancard = pancard
        }
        display(){
            document.writeln(this.adhaar_id, this.passport_id, this.voter_id, this.pancard)
        }
    }
    var myid = new ID(123, 123, 123, 123)
    myid.display()

    class Person{
        constructor(name, dob, gender, contact, address, id){
            this.name = name
            this.dob = dob
            this.gender = gender
            this.contactDetails = contact
            this.address = address
            this.id = id
        }
        display(){
            document.writeln(this.name)
            this.dob.display()
            document.writeln(this.gender)
            this.contactDetails.display()
            this.address.display()
            this.id.display()

        }
        set_phone_no(new_phone_no){
            this.contactDetails.phone_no = new_phone_no
        }
        set_mail(new_mail){
            this.contactDetails.email_id = new_mail
        }
        set_address(new_address){
            this.contactDetails.address = new_address
        }
        set_contact(new_contact){
            this.contactDetails = new_contact
        }
        set_state(new_address){
            this.address = new_address
        }
        set_country(new_id){
            this.id = new_id
        }
    }
    var me = new Person("Ojas", mydob, "Female", mycontactdetails, myaddress, myid)
    me.display()

    class Bank{
        constructor(name, address){
            if(name != undefined){
                this.name = name
            }
            else{
                document.writeln("Enter name")
                return
            }

            if(address != undefined){
                this.address = address
            }
            else{
                document.writeln("Enter address")
            }
            this.account = 0
        }
        display(){
            if(this.name != undefined){
                document.writeln(this.name)
            }
            if(this.address != undefined){
                this.address.display()
            }
            if(this.no_of_account){
                document.writeln(this.no_of_account)
            }
        }
        add_account(){
            if(this.account != undefined){
                this.account = this.account + 1
            }
            else this.account = 1
        }
        delete_account(){
            if(this.account != undefined){
                this.account = this.account - 1
            }
            else this.account = 0
        }
    }
    var myBank = new Bank("City Bank", Bankaddress)
    myBank.display()

    class Account{
        constructor(person, bank, type, balance, date_of_opening, minimum_amount){
            if(person != undefined){
                this.name = person.name
                this.dob = person.dob 
                this.gender = person.gender
                this.id = person.id
                this.address = person.address
                this.contactDetails = person.contactDetails
            }
            else{
                document.writeln("Enter Person")
                return
            }
            if(date_of_joining != undefined){
                this.date_of_joining = date_of_opening
            }
            else{
                document.writeln("Set date of opening")
            }
            if(bank != undefined){
                this.bank = bank
            }
            else{
                document.writeln("Enter bank")
                return
            }
            if( type != undefined){
                this.type = type
            }
            else{
                document.writeln("Set  type")
            }
            this.balance = balance
            if(this.balance == undefined){
                this.balance = 0
            }
            this.bank.add_account()
        }
        display(){
            if(this.name != undefined){
                document.writeln(this.name)
            }
            if(this.bank != undefined){
                document.writeln(this.bank)
            }
            if(this.balance != undefined)document.writeln(this.balance)
        }
        add_balance(amount){
            if(amount != undefined){
                this.balance = this.balance + amount
            }
            else{
                document.writeln("Enter Valid amount")
            }
        }
        detect_balance(amount){
            if(amount != undefined){
                if(this.balnce-amount >= this.minimum_amount){
                    this.balance = this.balance - amount
                }
                else{
                    document.writeln("Can't complete the Transaction")
                    document.writeln("The amount can't be processed")
                }
            }
            else{
                document.writeln("Enter Valid AMOUNT")
            }
        }
        transact_to(another_account, amount){
            if(another_account != undefined){
                if(amount != undefined){
                    if(amount >= 0){
                        if(this.balnce-amount >= this.minimum_amount){
                            this.balance = this.balance - amount
                            another_account.balance = another_account + amount
                        }
                        else{
                            document.writeln("Can't complete the Transaction")
                            document.writeln("The amount can't be processed")
                        }
                    }
                    else{
                        document.writeln("amount can't be negative")
                    }
                }
                else{
                    document.writeln("Enter Amount")
                }
            }
            else{
                document.writeln("Enter the Transfer account")
            }
        }
        setDateOfJoining(date_of_joining){
            if(date_of_joining != undefined){
                this.date_of_joining = date_of_opening
            }
            else{
                document.writeln("Set date of opening")
            }
        }
        setType(type){
            if( type != undefined){
                this.type = type
            }
            else{
                document.writeln("Set  type")
            }
        }
        account_statement(){

        }
    }
    var myaccount = new Account(me, myBank, undefined, 350, "11 Jan", 300)
    myaccount.display()
    myaccount.setType("Saving")


    var my_another_account = new Account(me, myBank, "Savings", 600, "11 Jan", 300)
    my_another_account.display()
    var transaction = my_another_account.transact_to(myaccount, 300)
    document.writeln(transaction)
    my_another_account.display()
    myaccount.display()

    let mybankstatement = {
        Bank_Name : "SBI Bank",
        Date: new Date(29,"May",14),
        Time: "19:48",
        ATM_No : "SJNBL48",
        CARD_No: "xxxx xxxxx xxxx 0516",
        BRANCH_NAME: "Bangalore Main Branch",
        Txn_No :2907,
        Response_code : 072,
        WithDrawl : "500.00",
        From_Account : "xxxxxxxxxx05 xx01",
        Mod_RS : "0.00",
        AvailableBalRs: "1000.00",
        website : "www.statebankofindia.com",
        display(){
            document.writeln(this.Bank_Name)
            this.Date.display()
            document.writeln(this.Time, this.ATM_No, this.CARD_No, this.BRANCH_NAME)
            document.writeln(this.Txn_No, this.Response_code, this.WithDrawl)
            document.write(this.From_Account, this.Mod_RS, this.AvailableBalRs, this.website)
        },
        show_balance(){
            document.writeln(this.AvailableBalRs)
        }
    }
    mybankstatement.display()

    myComputerSpecs = {
        model: "exide-digital600",
        voltage: "-230v",
        frequency: 50,
        battery_type: "sealed maintenance free battery",
        capacity: "12volt 7Ah",
        battery_backup: "12 to 20 mins",
        recharge_time: "5 to 6 hours",
        weight: 6.1 ,
        display(){
            document.writeln(this.model, this.voltage, this.frequency, this.battery_type)
            document.writeln(this.capacity, this.battery_backup, this.recharge_time, this.weight)
        },
        show_model(){
            document.writeln(this.model)
            document.writeln(this.weight)
        }
    }
    myComputerSpecs.display()

    myVisitingCard = {
        name: "naresh",
        mail_id: "naresh.jvt@gmail.com",
        contact_no: "+91 9944860792",
        company_name: "jvt designation-programmer",
        address: "230/3 2nd floor hal3rd stage new thippasandra bangalore-560075",
        display(){
            document.writeln(this.name, this.mail_id, this.contact_no)
            document.write(this.company_name, this.address)
        }
    }
    myVisitingCard.display()

    myProduct = {
        Brand : "Scott International",
        Product_Code : "APPSCOTT-INTERNSWIT610835D77A441",
        Color : "Black",
        Size :"S",
        Material : "Cotton",
        Occasion : "Casual",
        Pattern : "Solid",
        Sleeve : "Full Sleeves",
        Neck_Type : "Hooded",
        Fit : "Slim",
        Gender : "Men",
        shippingDetails(){
            Estimated_Arrival = 9
            ReturnPolicy = "Seller will accept returns within a 15 days from date of delivery of the item"
        },
        priceDetails(){
            this.BuyforRS = 824
            this.EffectivePrice = 453
        },
        display(){
        	document.write(this.Brand, this.Product_Code)
		}            
    }
    myProduct.display()

    myCreditCard = {
        number : 6146496758938152,
        outstanding : 571.6,
        minimum : 271.36,
        withdraw(amount){
            if(this.outstanding-amount >= this.minimum){
                this.outstanding = this.outstanding-amount
            }
            else{
                document.writeln("Can't Withdraw")
            }
        },
        display(){
            document.writeln(this.number, this.outstanding)
        }
    }
    myCreditCard.display()

    class CreditCard{
        constructor(number){
            this.number = number
            this.utilization = 0
            this.outstanding = 0
            this.minimum = 0
        }
        set_outstandingAmount(outstanding){
            if(outstanding != undefined){
                this.outstanding=outstanding
            }
            else{
                document.writeln("Set Outstanding")
            }
        }
        set_minimumAmount(minimum){
            if(minimum != undefined){
                if(minimum >= 0){
                    this.minimum=minimum
                }
                else{
                    document.writeln("The minimum should be pnon-negative")
                }
            }
            else{
                document.writeln("Enter valid minimum Amount")
            }
        }
        withdraw(amount){
            if(amount != undefined){
                if(amount >= 0){
                    if(this.outstanding-amount >= this.minimum){
                        this.outstanding = this.outstanding-amount
                        this.utilization = this.utilization+amount
                    }
                    else{
                        document.writeln("Can't Withdraw")
                    }
                }
                else{
                    document.writeln("The amount should be pnon-negative")
                }
            }
            else{
                document.writeln("Enter valid Amount")
            }
        }
        display(){
            if(this.name != undefined){
                document.writeln(this.number)
            }
        }
        displayBalance(){
            if(this.number != undefined){
                document.writeln(this.number)
            }
            if(this.outstanding != undefined){
                document.writeln(this.outstanding)
            }
            if(this.utilization != undefined){
                document.writeln(this.outstanding, this.utilization)}
        }
    }
    myCreditCard = new CreditCard(20)
    myCreditCard.set_minimumAmount(10)
    myCreditCard.set_outstandingAmount(19)
    myCreditCard.display()
    myCreditCard.withdraw(5)
    myCreditCard.displayBalance()

    let pavanDrivingLicense = 
    {
        LastName: "kumar",
        FirstName: "Pavan",
        MiddleName: "Bijjavaram",
        licenseNumber : "ka50201500006939",
        licenseState : "karnataka",
        licenseCountry : "india",
        CivilianType: "around india",
        EmployeeType: "software engineer",
        DateOfBirth: "12-07-1992",
        CityOfBirth: "rajampet",
        display(){
            document.writeln(this.LastName, this.MiddleName, this.FirstName, this.licenseNumber)
        },
        displayArea(){
            document.writeln(this.licenseState, this.licenseCountry, this.CityOfBirth)
        }
    }
    pavanDrivingLicense.display()
    pavanDrivingLicense.displayArea()

    class DrivingLicense{
        constructor(name, licenseNumber, licenseState, licenseCountry){
            if(name != undefined){
                this.name = name
            }
            else{
                document.writeln("Set Name")
                return
            }
            if(licenseNumber != undefined){
                this.licenseNumber = licenseNumber
            }
            else{
                document.writeln("Set License Number")
                return
            }
            if(licenseState != undefined){
                this.licenseState = licenseState
            }
            else{
                document.writeln("Set License State")
            }
            if(licenseCountry != undefined){
                this.licenseCountry = licenseCountry
            }
            else document.writeln("Set Country")
            this.civilianType = null
            this.employeeType = null
            this.dob = null
            this.cityOfBirth = null
        }
        display(){
            if(this.name != undefined){
                document.writeln(this.name)
            }
            if(this.licenseNumber != undefined){
                document.writeln(this.licenseNumber)
            }
        }
        displayArea(){
            if(this.cityOfBirth != undefined){
                document.writeln(this.CityOfBirth)
            }
            if(this.licenseState != undefined){
                document.writeln(this.licenseState)
            }
            if(this.licenseCountry != undefined){
                document.writeln(this.licenseCountry)
            }
            if(this.licenseNumber != undefined){
                document.writeln(this.licenseNumber)}
        }
        setCivilianType(civilianType){
            if(civilianType != undefined){
                this.civilianType = civilianType
            }
            else{
                document.writeln("Enter Valid Civilian Type")
            }
        }
        setEmployeeType(employeeType){
            if(employeeType != undefined){
                this.employeeType = employeeType
            }
            else{
                document.writeln("Enter Valid Employee Type")
            }
        }
        set_dob(dob){
            if(dob != undefined){
                if(this.dob == null){
                    this.dob = dob
                }
                else{
                    document.write("Can't set DOB again!")
                }
            }
            else{
                document.writeln("Enter Valid DOB")
            }
        }
        setCityOfBirth(cityOfBirth){
            if(cityOfBirth != undefined){
                if(this.CityOfBirth == null){
                    this.CityOfBirth = CityOfBirth
                }
                else{
                    document.write("Can't set COB again!")
                }
            }
            else{
                if(this.CityOfBirth != null){
                    document.writeln("Can't set COB again!")
                }
                else document.writeln("Enter Valid City of Birth")
            }
        }
    }
    myDrivingLicense = new DrivingLicense("Ojasvi", 123, "Rajasthan", "India")
    myDrivingLicense.display()
    myDrivingLicense.displayArea()

    let rajAppearance = {
        Weight: 55,
        Height: 5.8,
        EyeColour: "brown",
        Gender: "male",
        HomeAddress: "#6/96,rajampet,kadapa.",
        HomePhone: 975545445,
        Mobile: 8553577745, 
        State: "andhrapradesh",
        County: "india",
        display(){
            document.writeln(this.Weight, this.Height)
        },
        displayGender(){
            document.writeln(this.Gender)
        },
        displayAddress(){
            document.writeln(this.HomeAddress, this.State, this.Country)
        },
        displayEyeColour(){
            document.writeln(this.EyeColour)
        },
        displayMobile(){
            document.writeln(this.Mobile)
        }
    }
    rajAppearance.display()
    rajAppearance.displayAddress()
    rajAppearance.displayEyeColour()
    rajAppearance.displayGender()
    rajAppearance.displayMobile()

    class Appearance{
        constructor(person, weight, eyeColour, height){
            if(person != undefined){
                this.name = person.name
                this.dob = person.dob
                this.contactDetails = person.contactDetails
                this.address = person.address
            }
            else{
                document.writeln("Enter a Person")
                return
            }
            if(weight != undefined){
                if(weight >= 0){
                    this.weight = weight
                }
                else{
                    document.writeln("set Valid Weight")
                }
            }
            else{
                document.writeln("set Valid Weight")
            }
            if(height != undefined){
                this.height = height
            }
            else    document.writeln("set a Valid height")
            if(eyeColour != undefined){
                this.eyeColour = eyeColour
            }
            else{
                document.writeln("set Eye Colour")
            }
        }
        displayAddress(){
            if(this.address != undefined){
                this.address.display()
            }
        }
        display(){
            if(this.name != undefined){
                document.writeln(this.name)
            }
            if(this.gender != undefined){
                document.writeln(this.gender)
            }
            if(this.dob != undefined){
                this.dob.display()
            }
            if(this.contactDetails != undefined){
                this.contactDetails.display()
            }
            if(this.address != undefined){
                this.address.display()
            }
            if(this.weight != undefined){
                document.writeln(this.weight)
            }
            if(this.height != undefined){
                document.writeln(this.height)
            }
            if(this.eyeColour != undefined){
                document.writeln(this.eyeColour)
            }
        }
        displayContactDetails(){
            if(this.contactDetails != undefined){
                this.contactDetails.display()
            }
        }
        displayWeight(){
            if(this.weight != undefined){
                document.writeln(this.weight)
            }
        }
        displayHeight(){
            if(this.height != undefined){
                document.writeln(this.height)
            }
        }
        setWeight(weight){
            if(weight != undefined){
                this.weight = weight
            }
            else {
                document.writeln("Enter a valid Weight")
            }
        }
    }
    var myAppearance = new Appearance(me, 55, "brown", 5)
    myAppearance.display()
    myAppearance.displayAddress()
    myAppearance.displayContactDetails()
    myAppearance.displayWeight()
    myAppearance.displayHeight()    

    let rajVehicle = {
        vehicleType: "light motor",
        vehicle: "car",
        colour: "red",
        engineNumber: "kp98gtyihh457797",
        chassisNumber: "tc5678898335r45",
        company: "BMW",
        display(){
            document.writeln(this.vehicle, this.vehicleType, this.colour, this.company)
        },
        displayNumber(){
            document.writeln(this.engineNumber, this.chassisNumber)
        },
        displayCompany(){
            document.writeln(this.company)
        },
        displayColour(){
            document.writeln(this.colour)
        }
    }
    rajVehicle.display()
    rajVehicle.displayNumber()
    rajVehicle.displayCompany()
    rajVehicle.displayColour()
    
    class Vehicle{
        constructor(vehicle, vehicleType, colour, engineNumber, chassisNumber, company, owner){
            this.ownerName = owner.name
            this.ownerContactDetails = owner.contactDetails
            this.ownerAddress = owner.address
            this.vehicle = vehicle
            this.vehicleType = vehicleType         
            this.colour = colour
            this.emgineNumber = engineNumber
            this.chassisNumber = chassisNumber
            this.company = company                              
        }
        display(){
            if(this.vehicle != undefined){
                document.writeln(this.vehicle)
            }
            if(this.vehicleType != undefined){
                document.writeln(this.vehicleType)
            }
            if(this.colour != undefined){
                document.writeln(this.colour)
            }
            if(this.company != undefined){
                document.writeln(this.company)
            }
            if(this.ownerName != undefined){
                document.writeln(this.ownerName)
            }
        }
        displayVehicleDetails(){
            if(this.vehicle != undefined){
                document.writeln(this.vehicle)
            }
            if(this.vehicleType != undefined){
                document.writeln(this.vehicleType)
            }
            if(this.colour != undefined){
                document.writeln(this.colour)
            }
            if(this.company != undefined){
                document.writeln(this.company)
            }
        }
        displayOwnerDetails(){
            if(this.ownerName != undefined){
                document.writeln(this.ownerName)
            }
            if(this.ownerContactDetails != undefined){
                this.ownerContactDetails.display()
            }
            if(this.ownerAddress != undefined){
                this.ownerAddress.display()
            }
        }
        displayNumber(){
            if(this.engineNumber != undefined){
                document.writeln(this.engineNumber)
            }    
            if(this.chassisNumber != undefined){
                document.writeln(this.chassisNumber)
            }
        }
        displayCompany(){
            if(this.company != undefined){
                document.writeln(this.company)
            }
        }
        displayColour(){
            if(this.colour != undefined){
                document.writeln(this.colour)
            }
        }
    }
    var myVehicle = new Vehicle("Bike", "Two Wheeler", "Yellow", 123, 231, "Activa", me)
    myVehicle.display()
    myVehicle.displayVehicleDetails()
    myVehicle.displayNumber()
    myVehicle.displayCompany()
    myVehicle.displayColour()
    myVehicle.displayOwnerDetails()

    let rajSystemInfo = {   
        Rating : 4.5,
        Processor : "Intel® Core™ i5-2450 CPU",
        RAM: "4.00GB",
        SystemType : "64-bit OS",
        PenTouch : "No Pen or Touch Input is available for this Display",
        ComputerName : "BALU-PC",
        ComputerDescription : "WORKGROUP",
        WindowsEdition : "Windows 7 Ultimate",
        WindowsProductID: "00426-OEM-8992662-0049",
        display(){
            document.writeln(this.ComputerDescription, this.ComputerName, this.SystemType, this.RAM)
        },
        displayProcessor(){
            document.writeln(this.Processor)
        },
        displayRating(){
            document.writeln(this.Rating)
        },
        displaySystemType(){
            document.writeln(this.SystemType)
        },
        displayPenTouch(){
            document.writeln(this.PenTouch)
        },
        displayWindowsDetails(){
            document.writeln(this.WindowsEdition)
            document.writeln(this.WindowsProductID)
        },
        displayComputerDetails(){
            document.writeln(this.ComputerName)
            document.writeln(this.ComputerDescription)
        }
    }
    rajSystemInfo.display()
    rajSystemInfo.displayComputerDetails()
    rajSystemInfo.displayProcessor()
    rajSystemInfo.displayPenTouch()
    rajSystemInfo.displayRating()
    rajSystemInfo.displaySystemType()
    rajSystemInfo.displayWindowsDetails()
    
    class SystemInfo{
        constructor(processor, ram, systemType){
            if(processor != undefined){
                this.processor = processor
            }
            else{
                document.writeln("Enter processor")
            }
            if(ram != undefined){
                this.ram = ram
            }
            else{
                document.writeln("Enter RAM")
            }
            if(systemType != undefined){
                this.systemType = systemType
            }
            else{
                document.writeln("Enter systemType")
            }
            this.penTouch = null
            this.computerName = null
            this.computerDescription = null 
            this.windowsEdition = null 
            this.windowsProductID = null
            this.rating = null 
        }
        setComputerDetails(computerName, computerDescription){
            if(computerName != undefined){
                this.computerName = computerName
            }
            else{
                document.writeln("Enter computerName")
            }
            if(computerDescription != undefined){
                this.computerDescription = computerDescription
            }
            else{
                document.writeln("Enter computerDescription")
            }
        }
        setRating(rating){
            if(rating != undefined){
                this.rating = rating
            }
            else{
                document.writeln("Enter Rating")
            }
        }
        setPenTouch(penTouch){
            if(penTouch != undefined){
                this.penTouch = penTouch
            }
            else{
                document.writeln("Enter penTouch")
            }
        }
        setWindowsDetails(windowsEdition, windowsProductID){
            if(windowsEdution != undefined){
                this.windowsEdition = windowsEdition
            }
            else{
                document.writeln("Enter windowsEdition")
            }
            if(windowsProductID != undefined){
                this.windowsProductID = windowsProductID
            }
            else{
                document.writeln("Enter windowsProductID")
            }
        }
    }

</script>
// Rough Work
class object{
    constructor(input){
        // after some traversing
        this.year= year
        this.site = site
    }
}
function comparison(a, b){
    if(a.year == b.year){
        return a.site < b.site
    }
    return a.year < b.year
}
array_name.sort(comparison)


function factorial(num){
    var result = 1
    for(i=2;i<=num;i++){
        result = result * i
       }
       return result
    }
document.write(factorial(3))