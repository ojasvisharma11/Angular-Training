<script>
    class Address{
        constructor(houseno, street, area, zip, city, state, country){
            if(this.validateHouseNo(houseno) == true){
                this.house_no = houseno
            }
            else{
                document.writeln("Enter Valid House Number")
            }
            if(this.validateStreet(street) == true){
                this.street = street
            }
            else{
                document.writeln("Enter Valid Street")
            }
            if(this.validateString(area) == true){
                this.area = area
            }
            else{
                document.writeln("Enter Valid Area")
            }
            if(this.validateNumber(zip) == true){
                this.zip_code = zip
            }
            else{
                document.writeln("Enter Valid Zip")
            }
            if(this.validateString(city) == true){
                this.city = city
            }
            else{
                document.writeln("Enter Valid City")
            }
            if(this.validateString(state) == true){
                this.state = state
            }
            else{
                document.writeln("Enter Valid State")
            }
            if(this.validateString(country) == true){
                this.country = country
            }
            else{
                document.writeln("Enter Valid country")
            }
        }
        validateNumber(number){
            if(number == undefined){
                return false
            }
            if(Number.isInteger(number) == false){
                return false
            }
            return true
        }
        validateHouseNo(house_no){
            if(house_no == undefined){
                return false
            }
            if(this.validateNumber(house_no) == false){
                return false
            }
            return true
        }
        validateString(string){
            if(string == undefined){
                return false
            }
            if(typeof string != "string"){
                return false
            }
            return true
        }
        validateStreet(street){
            if(street == undefined){
                return false
            }
            if(this.validateString(street) == false){
                return false
            }
            return true
        }
        display(){
            document.writeln(this.house_no, this.street, this.area, this.zip_code, this.city, this.state, this.country)
        }
        set_house_no(house_no){
            if(validateHouseNo(house_no) == true){
                this.house_no = houseno
            }
            else{
                document.writeln("Enter Valid House Number")
            }
        }
        set_street(house_no, new_street){
            if(validateHouseNo(house_no) == true){
                this.house_no = houseno
            }
            else{
                document.writeln("Enter Valid House Number")
            }
            this.street = new_street
        }
        set_area(house_no, new_street, new_area){
            if(validateHouseNo(house_no) == true){
                this.house_no = houseno
            }
            else{
                document.writeln("Enter Valid House Number")
            }
            this.street = new_street
            this.area = new_area
        }
        set_zip(house_no, new_street, new_area, new_zip){
            if(validateHouseNo(house_no) == true){
                this.house_no = houseno
            }
            else{
                document.writeln("Enter Valid House Number")
            }
            this.street = new_street
            this.area = new_area
            this.zip_code = new_zip
        }
        set_city(new_house_no, new_street, new_area, new_city, new_zip){
            if(validateHouseNo(house_no) == true){
                this.house_no = houseno
            }
            else{
                document.writeln("Enter Valid House Number")
            }
            this.street = new_street
            this.area = new_area
            this.zip_code = new_zip
            this.city = new_city
        }
        set_state(new_house_no, new_street, new_area, new_city, new_zip, new_state){
            if(validateHouseNo(house_no) == true){
                this.house_no = houseno
            }
            else{
                document.writeln("Enter Valid House Number")
            }
            this.street = new_street
            this.area = new_area
            this.zip_code = new_zip
            this.city = new_city
            this.state = new_state
        }
        set_country(new_house_no, new_street, new_area, new_city, new_zip, new_state, new_country){
            if(validateHouseNo(house_no) == true){
                this.house_no = houseno
            }
            else{
                document.writeln("Enter Valid House Number")
            }
            this.street = new_street
            this.area = new_area
            this.zip_code = new_zip
            this.city = new_city
            this.state = new_state
            this.country = new_country
        }

    }
    
    var myaddress = new Address(702, "Bank Colony", "Railway Station", 301001, "Alwar", "Rajasthan",  "India")
	myaddress.display()

    var Bankaddress = new Address(501, "Amrapali Plaza", "Amrapali CirCle", 302021, "Jaipur", "Rajasthan",  "India")
	Bankaddress.display()
</script>
