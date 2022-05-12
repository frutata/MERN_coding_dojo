const express = require("express"); //import express so we can use express features
const app = express(); //create our app variable which is an instance of express
const port = 8000;
const { faker } = require('@faker-js/faker'); //import faker library so we can use it to generate fake random data

//create our api endpoints here: eg-> http://localhost:8000/api/hello

// app.get("/api/hello", (req, res)=>{
//     res.json({msg: "Hello there!"});
// })

class User {
    constructor() {
        this.password = faker.internet.password();
        this.email = faker.internet.email();
        this.phoneNumber = faker.phone.phoneNumber();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this._id = faker.datatype.uuid();
    }
}

class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.companyName = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (req, res) => {
    //create a user
    let newUser = new User();
    //respond with json with info about the user
    res.json(newUser);
})

app.get("/api/companies/new", (req, res) => {
    let newCompany = new Company();
    res.json(newCompany);
})

app.get("/api/user/company", (req, res) => {
    let newUser = new User();
    let newCompany = new Company();
    res.json({user: newUser, company: newCompany});
})

//THIS LINE NEEDS TO BE AT THE BOTTOM OF THE FILE
app.listen(port, () => console.log(`Faker API is running on port ${port}`));