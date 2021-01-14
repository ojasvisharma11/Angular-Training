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

    var companyaddress = new Address(501, "Amrapali Plaza", "Amrapali CirCle", "Jaipur", "Rajasthan", 123456, "India")
	companyaddress.display()

    var mylibrary = new Address(123, "Colony", "Area", "City", "Rajasthan", 301001, "India")
    mylibrary.display()

    class ContactDetails{
        constructor(phone_no, mail, address){
            this.phone_no = phone_no
            this.email_id = mail
            this.address = address
        }
        display(){
            document.write(this.phone_no, this.email_id, this.address)
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
            document.write(this.date, this.month, this.year)
        }
    }
    var mydob = new Date(28, "Aug", 2000)
    mydob.display()

    class ID{
        constructor(Adhaarid, Passportid, voterid, pancard){
            this.adhaar_id = Adhaarid
            this.passport_id = Passportid
            this.voter_id = voterid
            this.pancard = pancard
        }
        display(){
            document.write(this.adhaar_id, this.passport_id, this.voter_id, this.pancard)
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
            document.write(this.name)
            this.dob.display()
            document.write(this.gender)
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

    class Company{
        // static no_of_employees = 0
        constructor(name, address, contact){
            this.name = name
            this.address = address
            this.contactDetails = contact
        }
        display(){
            document.write(this.name)
            this.address.display()
            this.contactDetails.display()
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
            this.contactDetails = contact
        }
        set_start_date(s_date){
            this.start_date = s_date
        }
        set_end_date(e_date){
            this.end_date = e_date
        }
    }
    Company.no_of_employees = 0

    var intimetec = new Company("InTimeTec", companyaddress, mycontactdetails)
    Company.no_of_employees = Company.no_of_employees + 1

    var intimetec_vision = new Company("InTimeTec Vision", companyaddress, mycontactdetails) 
    Company.no_of_employees = Company.no_of_employees + 1
    intimetec_vision.display()

    class Employee{
        constructor(person, company){
            this.name = person.name
            this.dob = person.dob 
            this.gender = person.gender
            this.id = person.id
            this.address = person.address
            this.contactDetails = person.contactDetails
            this.company = company
        }
        display(){
            document.write(this.name)
            this.dob.display()
            document.write(this.gender)
            this.id.display()
            this.address.display()
            this.contactDetails.display()
            this.company.display()
        }
        set_employe_id(id){
            this.employee_id = id
        }
        set_company(company){
            this.company = company
        }
        set_date_of_joining(doj){
            this.date_of_joining = doj
        }
        set_contact_details(new_contact_details){
            this.contactDetails = new_contact_details
        }
        set_address(new_address){
            this.address = new_address
        }
    }
    var ojas = new Employee(me, intimetec)
    ojas.display()

    class Library{
        constructor(name, address){
            this.name = name
            this.address = address
        }
        display(){
            document.write(this.name, this.address)
        }
    }
    var myLib = new("Company Lubrary", "Alwar")
    myLib.display()

    class GoogleAccount{
        consrtuctor(name, dob, gender, contact_details, password){
            this.name = name
            this.dob = dob
            this.gender = gender
            this.contactDetails = contact_details
            this.password = password
        }
        display(){
            document.write(this.name)
            this.dob.display()
            document.write(gender)
            this.contactDetails.display()
        }
        change_password(new_password){
            this.password = new_password
        }
        change_contact(new_contact){
            this.contactDetails = new_contact
        }
    }
    var myaccount = new GoogleAccount("Ojasvi", mydob, mycontactdetails, "123")
    // myaccount.display()

    class Disease{
        constructor(name, type, stage){
            this.name = name
            this.type = type
            this.stage = stage
        }
    }
    class Test{
        constructor(name, person, date){
            this.date_collected = date
            this.name = name
            this.patient_name = person_name
            this.patient_address = person.address
            this.patient_dob = person.dob
            this.patient_gender = person.gender
            this.results = "Not Tested"
        }
        set_testresults(test_results){
            return this.results = test_results
        }
    }
    class Patient{
        constructor(person, disease){
            this.name = person.name
            this.dob = person.dob 
            this.gender = person.gender
            this.id = person.id
            this.address = person.address
            this.contactDetails = person.contactDetails
            this.disease = disease
        }
    }
    class Hospital{
        constructor(name, address){
            this.name = name
            this.address = address
        }
    }
    class Appointments{
        constructor(hospital, patient, test){
            this.hospital = hospital
            this.patient = patient
            this.test = test
        }
    }
</script>