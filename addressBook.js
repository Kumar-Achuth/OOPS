var prompt = require('prompt-sync')()
var fs = require('fs')
var data = fs.readFileSync('address.json')
console.log('Welcome to profile creation : ')
fs.readFile('./address.json', 'utf-8', function (err, data) {
    if (err) throw err

    var address_object = JSON.parse(data)
    function Createprofile() {
        var number = prompt('Enter the number of people To be created : ')
        for (var i = 0; i < number; i++) {
            var Firstname = prompt("Enter your First name : ")
            var Lastname = prompt('Enter your Lastname  : ')
            console.log('Enter the address details : ')
            var City = prompt('Enter your city : ')
            var Pincode = prompt('Enter your Pincode : ')
            var Phonenumber = prompt('Enter the Phone number : ')
            var State = prompt('Enter the State : ')

            address_object.address.push({
                "Firstname": Firstname,
                "Lastname": Lastname,
                "Address": { "City": City, "Phonenumber": Phonenumber, "Pincode": Pincode, "State": State }

            })
            fs.writeFileSync('./address.json', JSON.stringify(address_object), 'utf-8', function (err) {
                if (err) throw err
            }
            )
            function compare(a, b) {
                if (a.Firstname < b.Lastname)
                    return -1;
                if (a.Firstname > b.Lastname)
                    return 1;
                return 0
            }
            function sort() {
                console.log(address.sort(this.compare))
            }
            console.log(address_object.address)
        }
    }
    function Delete() {
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
        function compare(a, b) {
            if (a.Firstname < b.Lastname)
                return -1;
            if (a.Firstname > b.Lastname)
                return 1;
            return 0
        }
        function sort() {
            console.log(address.sort(this.compare))
        }
        console.log(address_object.address)
    }
    function edit() {
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
                        var object1 = {
                            "Firstname": address_object.address[i].Firstname,
                            "Lastname": address_object.address[i].Lastname,
                            "Address": { "City": city1, "Phonenumber": address_object.address[i]["Address"].Phonenumber, "Pincode": address_object.address[i]["Address"].Pincode, "State": address_object.address[i]["Address"].State }
                        }
                        address_object[i] = object1
                        let obj = {
                            address : address_object
                        }
                        fs.writeFileSync('./address.json', JSON.stringify(obj) ,  'utf-8' )
                        console.log(address_object[i].address)
                        break;

                    case 2: var pin2 = prompt('Enter the new pincode : ')
                        var object2 = {
                            "Firstname": address_object.address[i].Firstname,
                            "Lastname": address_object.address[i].Lastname,
                            "Address": { "City": address_object.address[i] ["Address"].City, "Phonenumber": address_object.address[i]["Address"].Phonenumber, "Pincode": pin2, "State": address_object.address[i]["Address"].State }
                        }
                        address_object[i] = object2
                        console.log(address_object[i].address)
                        break;

                    case 3: var state1 = prompt('Enter your new state : ')
                        var object3 = {
                            "Firstname": address_object.address[i].Firstname,
                            "Lastname": address_object.address[i].Lastname,
                            "Address": { "City": address_object.address[i] ["Address"].City, "Phonenumber": address_object.address[i]["Address"].Phonenumber, "Pincode": address_object.address[i]["Address"].Pincode, "State": state1 }
                        }
                        address_object[i] = object3

                        console.log(address_object[i].address)
                        break;

                    case 4: var Phonenumber1 = prompt('Enter the new Phonenumber : ')
                        var object4 = {
                            "Firstname": address_object.address[i].Firstname,
                            "Lastname": address_object.address[i].Lastname,
                            "Address": { "City": address_object.address[i]['Address'].City, "Phonenumber": Phonenumber1, "Pincode": address_object.address[i] ["Address"].Pincode, "State": address_object.address[i] ["Adrress"].State }
                        }
                        address_object[i] = object4;
                        console.log(address_object[i].address)
                        // address_object[i]=object4

                        console.log(address_object.address)
                        break;

                    case 5: process.exit()

                    default: console.log('Please enter the valid option ')
                }
                // console.log(address_object.address)
            }
        }
        function compare(a, b) {
            if (a.Firstname < b.Lastname)
                return -1;
            if (a.Firstname > b.Lastname)
                return 1;
            return 0
        }
        function sort() {
            console.log(address.sort(this.compare))
        }
        console.log(address_object.address)
    }
    while (1) {
        console.log('Press 1 to create profile :')
        console.log('Press 2 to Delete a profile : ')
        console.log('Press 3 to Edit a particular Profile  : ')
        console.log('Press 4 to exit : ')
        var choice = prompt('Enter your choice : ')
        switch (parseInt(choice)) {
            case 1: Createprofile()
                break;

            case 2: Delete()
                break;

            case 3: edit()
                break;

            case 4: process.exit()

            default: console.log("No such option available ")
        }
    }
})
