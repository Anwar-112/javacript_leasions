class FormData{

    constructor(name,address,phone){
        this.name = name;
        this.address = address;
        this.phone = phone;

    }

    DataDisplay(){
        let output = "<h1>Data Form</h1>";
        output += "Name: " + this.name + "<br>";
       output += "Roll: " + this.roll + "<br>";
       output += "phone:" + this.phone + "<br>";
       return output;
    }

}