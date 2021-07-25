function Information(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

var arr = []
Information.prototype.Add = function () {
    var obj = {
        Name: this.name,
        Gender: this.gender,
        Address: this.address,
        Education: this.education,
        Profession: this.profession
    }
    arr.push(obj);

    return arr;
}

var information1 = new Information("Farhan", "Male", "North Karachi", "Graduate", "Web Development");
information1.Add();

var information2 = new Information("Ahmed", "Male", "New Karachi", "Matric", "Software Development");
information2.Add();

var information3 = new Information("Mohsin", "Male", "Karimabad", "ACCA", "Accountant");
information3.Add();

var information4 = new Information("Haris", "Male", "Bahadurabad", "MBA", "Accountant");
information4.Add();

var information5 = new Information("Iqra", "Female", "Surjani", "Intermediate", "Teaching");
information5.Add();

var information6 = new Information("Eshaal", "Female", "Five Star", "Matric", "Student");
information6.Add();

var information7 = new Information("Fatima", "Female", "Hyderi", "PhD", "Professor");
information7.Add();

var information8 = new Information("Hamza", "Male", "Askari", "ICMA", "Accountant");
information8.Add();

var information9 = new Information("Majeed", "Male", "LaloKhait", "ICMA", "Accountant");
information9.Add();

var information10 = new Information("Abdul Rehman", "Male", "Sakhi Hasan", "Matric", "Software Development");
information10.Add();

var information11 = new Information("Saleem", "Male", "Gulshan", "Graduate", "Professor");
information11.Add();



function ShowData() {
    var education =  document.getElementById("education").value;
    var profession =  document.getElementById("professional").value;
    if (document.getElementById("male").checked) {
        var gender = "Male";
    } else {
        var gender = "Female";
    }
    
    for (var i = 0; i < arr.length; i++) {
        if (education === arr[i]["Education"] && profession === arr[i]["Profession"] && gender === arr[i]["Gender"]) {
            document.write(arr[i]["Name"] + "&nbsp &nbsp")
            document.write(arr[i]["Gender"] + "&nbsp &nbsp")
            document.write(arr[i]["Address"] + "&nbsp &nbsp")
            document.write(arr[i]["Education"] + "&nbsp &nbsp")
            document.write(arr[i]["Profession"] + "&nbsp &nbsp")
            document.write("<br />")
        }
        
    }

}


