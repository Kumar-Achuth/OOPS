var prompt = require('prompt-sync')()
var fs = require('fs')
var restriction = /[a-zA-Z]/g
var restriction1 = /[0-9]/g
var restriction2 = /[!@#$%^&*+_]/g
var data = fs.readFileSync('address.json')
console.log('Welcome to profile creation : ')
//fs.readFile('./address.json', 'utf-8', function (err, data) {
//if (err) throw err

var address_object = JSON.parse(data)
class AddressBook {
    Createprofile() {
        var number = prompt('Enter the number of people To be created : ')
        for (var i = 0; i < number; i++) {
            var Firstname = prompt("Enter your First name : ")
            if (Firstname.search(restriction1) == -1 && Firstname.search(restriction2) == -1) {
                var Lastname = prompt('Enter your Lastname  : ')
                if (Lastname.search(restriction1) == -1 && Lastname.search(restriction2) == -1) {
                    console.log('Enter the address details : ')
                    var City = prompt('Enter your city : ')
                    if (City.search(restriction1) == -1 && City.search(restriction2) == -1) {
                        var State = prompt('Enter the State : ')
                        if (State.search(restriction1) == -1 && State.search(restriction2) == -1) {
                            var Pincode = prompt('Enter your Pincode : ')
                            if (Pincode.search(restriction) == -1 && Pincode.search(restriction2) == -1) {
                                var Phonenumber = prompt('Enter the Phone number : ')
                                if (Phonenumber.search(restriction) == -1 && Phonenumber.search(restriction2) == -1) {
                                    if (Phonenumber.length == 10) {
                                        address_object.address.push({
                                            "Firstname": Firstname,
                                            "Lastname": Lastname,
                                            "Address": { "City": City, "Phonenumber": Phonenumber, "Pincode": Pincode, "State": State }
                                        })
                                        fs.writeFileSync('./address.json', JSON.stringify(address_object), 'utf-8')
                                        //  if (err) throw err
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
       // console.log(address_object.address)
    }
    compare(a, b) {
        if (a.Firstname < b.Firstname)
            return -1;
        if (a.Firstname > b.Firstname)
            return 1;
        return 0
    }
    sort() {
        console.log(address_object.address.sort(this.compare));
        fs.writeFileSync('./address.json', JSON.stringify(address_object), 'utf-8')

    }

    Delete() {
        var name = prompt('Enter the Firstname of Profile you want to delete ')
        for (var i = 0; i < address_object.address.length; i++) {
            if (address_object.address[i].Firstname == name) {
                address_object.address.splice(i, 1)
            }
        }
        fs.writeFileSync('./address.json', JSON.stringify(address_object.address), 'utf-8', function (err) {
            if (err) throw err

        }
        )

        console.log(address_object.address)
    }
    edit() {
        var name = prompt('Enter the user u want to Edit : ')

        for (var i = 0; i < address_object.address.length; i++) {
            if (address_object.address[i].Firstname == name) {
                console.log('Press 1 to edit your City : ')
                console.log('Press 2 to edit your pincode :')
                console.log("press 3 to edit your State: ")
                console.log("Press 4 to edit your Phonenumber :")
                console.log("Press 5 to exit ")
                var option = prompt('Enter the option you want to edit ')

                switch (parseInt(option)) {

                    case 1: var city1 = prompt('Enter your new city : ')
                        if (city1.search(restriction1) == -1 && city1.search(restriction2) == -1) {
                            var object1 = {
                                "Firstname": address_object.address[i].Firstname,
                                "Lastname": address_object.address[i].Lastname,
                                "Address": { "City": city1, "Phonenumber": address_object.address[i]["Address"].Phonenumber, "Pincode": address_object.address[i]["Address"].Pincode, "State": address_object.address[i]["Address"].State }
                            }
                            address_object.address[i] = object1
                            console.log(address_object)

                            fs.writeFileSync('./address.json', JSON.stringify(address_object), 'utf-8')
                        }
                        // console.log(address_object[i].address)
                        break;

                    case 2: var pin2 = prompt('Enter the new pincode : ')
                        if (Pincode.search(restriction) == -1 && Pincode.search(restriction2) == -1) {
                            var object2 = {
                                "Firstname": address_object.address[i].Firstname,
                                "Lastname": address_object.address[i].Lastname,
                                "Address": { "City": address_object.address[i]["Address"].City, "Phonenumber": address_object.address[i]["Address"].Phonenumber, "Pincode": pin2, "State": address_object.address[i]["Address"].State }
                            }
                            address_object.address[i] = object2
                            fs.writeFileSync('./address.json', JSON.stringify(address_object), 'utf-8')
                        }
                        // console.log(address_object[i].address)
                        break;

                    case 3: var state1 = prompt('Enter your new state : ')
                        if (state1.search(restriction1) == -1 && state1.search(restriction2) == -1) {
                            var object3 = {
                                "Firstname": address_object.address[i].Firstname,
                                "Lastname": address_object.address[i].Lastname,
                                "Address": { "City": address_object.address[i]["Address"].City, "Phonenumber": address_object.address[i]["Address"].Phonenumber, "Pincode": address_object.address[i]["Address"].Pincode, "State": state1 }
                            }
                            address_object.address[i] = object3
                            fs.writeFileSync('./address.json', JSON.stringify(address_object), 'utf-8')
                        }
                        //  console.log(address_object[i].address)
                        break;

                    case 4: var Phonenumber1 = prompt('Enter the new Phonenumber : ')
                        if (Phonenumber1.search(restriction) == -1 && Phonenumber1.search(restriction2) == -1) {
                            if (Phonenumber1.length == 10) {
                                var object4 = {
                                    "Firstname": address_object.address[i].Firstname,
                                    "Lastname": address_object.address[i].Lastname,
                                    "Address": { "City": address_object.address[i]['Address'].City, "Phonenumber": Phonenumber1, "Pincode": address_object.address[i]["Address"].Pincode, "State": address_object.address[i]["Address"].State }
                                }
                                address_object.address[i] = object4;
                                fs.writeFileSync('./address.json', JSON.stringify(address_object), 'utf-8')
                            }
                        }
                        // console.log(address_object[i].address)
                        // address_object[i]=object4

                        // console.log(address_object.address)
                        break;

                    case 5: process.exit()

                    default: console.log('Please enter the valid option ')
                }
                // console.log(address_object.address)
            }
        }

        console.log(address_object.address)
    }
}
var Addressbookobject = new AddressBook()
while (1) {
    console.log('Press 1 to create profile :')
    console.log('Press 2 to Delete a profile : ')
    console.log('Press 3 to Edit a particular Profile  : ')
    console.log('Press 4 to sort : ')
    console.log('Press 5 to exit : ')
    var choice = prompt('Enter your choice : ')
    switch (parseInt(choice)) {
        case 1: Addressbookobject.Createprofile()
            Addressbookobject.sort();
            break;

        case 2: Addressbookobject.Delete()
            Addressbookobject.sort()

            break;

        case 3: Addressbookobject.edit()
            Addressbookobject.sort()
            break;

        case 4: Addressbookobject.sort()
            break

        case 5: process.exit()

        default: console.log("No such option available ")
    }
}

