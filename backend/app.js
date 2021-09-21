const express = require('express');
const cors = require('cors');
var bodyparser = require('body-parser');
const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt');
// const validator = require('validator');

const Userdata = require('./src/model/Userdata');
const EventData = require("./src/model/Eventdata");

const port = process.env.PORT || 3000;
const app = new express();
app.use(cors());
app.use(bodyparser.json());

//Get Events
app.get("/events", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    EventData.find()
        .then(function (EventData) {
            res.send(EventData);
        });
});


//Get Users
app.get('/users', function (req, res) {

    Userdata.find()
        .then(function (users) {
            res.send(users);
        });
});

app.post("/search", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    console.log(req.body);
    let name = req.body.event;

    EventData.findOne({ title: name })
        .then((obj) => {
            if (!obj) {
                res.status(401).send("Event does not exist");
            }
            else {
                console.log("Found" + obj);
                res.send(obj);
            }
        });
});

app.post("/update", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    console.log(req.body);
    var events = {
        id: req.body.event._id,
        title: req.body.event.title,
        date: req.body.event.date,
        venue: req.body.event.venue,
        organiser: req.body.event.organiser,
        description: req.body.event.description,
        image: req.body.event.image

    };
    console.log(events);
    var myquery = { _id: events.id };
    var newvalue = { $set: events };
    EventData.updateOne(myquery, newvalue)
        .then((obj) => {
            console.log("Updated" + obj);
        });
});

app.post("/addevent", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    console.log(req.body);
    var events = {
        title: req.body.event.title,
        date: req.body.event.date,
        venue: req.body.event.venue,
        organiser: req.body.event.organiser,
        description: req.body.event.description,
        image: req.body.event.image,
        owned: req.body.event.owned
    };

    console.log(events);
    var event = new EventData(events);
    event.save();

})


app.post("/dlt", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    var events = {
        id: req.body.event._id,
        title: req.body.event.title,
        date: req.body.event.date,
        venue: req.body.event.venue,
        organiser: req.body.event.organiser,
        description: req.body.event.description,
        image: req.body.event.image

    };

    var myquery = { _id: events.id };
    EventData.deleteOne(myquery)
        .then((obj) => {
            console.log("deleted");
        })
});

username = 'admin@gmail.com';
password = '4FJaRrkFjVvRe6S';

app.post('/adminLogin', (req, res) => {

    let userData = req.body;

    if (username !== userData.email) {
        res.status(401).send('Invalid Username');
    }
    else if (password !== userData.password) {
        res.status(401).send('Invalid Password');
    }
    else {
        console.log('Validation Success!');
        let payload = { subject: username + password };
        let token = jwt.sign(payload, 'secretKey');
        res.status(200).send({ token });
    }
});

// app.post('/register', (req, res) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

//     let userData = req.body;
//     console.log('User Data: ' + userData);

//     var user = {
//         name: userData.name,
//         email: userData.email,
//         password: userData.password,
//     }
//     var nuse = new userData(User);
//     nuse.save();
//     let payload = { subject: user.email + user.password };
//     let token = jwt.sign(payload, "secretKey");
//     res.status(200).send({ token });
//     res.redirect('');
// });
app.post('/register', (req, res) => {

    let userData = req.body;
    console.log('User Data: ' + userData);

    var user = {
        name: userData.name,
        email: userData.email,
        password: userData.password,
    }
    var user = Userdata(user);
    user.save(); //save to DB
    res.redirect('');
});

// app.post('/login', async (req, res) => {

//     let email = req.body.email;
//     var password = req.body.password;
//     // console.log("email:" + email);
//     // console.log("Password: " + password);
//     // var password = bcrypt.hash(password, 8)
//     // console.log("P: " + password);
//     try {
//         const user = await Userdata.findByCredentials(req.body.email, req.body.password)
//         console.log('Valid User!');
//         let payload = { subject: username + password };
//         let token = jwt.sign(payload, 'secretKey');
//         res.status(200).send({ token });
//     }
//     catch {
//         res.status(401).send('Invalid Credentials');

//     }

// })
app.delete('/removeUsers/:id', (req, res) => {
    id = req.params.id;

    Userdata.findByIdAndDelete({ "_id": id })
        .then(() => {

        })
});
app.post("/login", (req, res) => {
    let user = req.body;
    Userdata.findOne({ $and: [{ email: user.email }, { password: user.password }] })
        .then((obj) => {
            if (!obj) {
                res.status(401).send("Invalid username or password");
            }
            else {
                console.log("success");
                let payload = { subject: user.email + user.password };
                let token = jwt.sign(payload, "secretKey");
                console.log(token);
                res.status(200).send({ token, email: user.email });
            }
        })
});

app.listen(port, function () {
    console.log('listening to port :  ' + port);
});