const mongoose = require("mongoose");
//L's
mongoose.connect("mongodb+srv://userone:userone@libappvers0.op9lt.mongodb.net/LibAppVers0?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
//mongoose.connect('mongodb+srv://userone:userone@files.7zyym.mongodb.net/EVENTALLY?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;

const EventSchema = new Schema({
    id: String,
    title: String,
    date: String,
    venue: String,
    organiser: String,
    description: String,
    image: String,
    owned: String
});
var Eventdata = mongoose.model("eventdata", EventSchema);
module.exports = Eventdata;
