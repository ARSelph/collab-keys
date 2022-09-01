const mongoose = require('mongoose');

const MONGO_URI = "mongodb+srv://collab:keys@collabkeys.pnrpf58.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'collabkeys'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const sessionSchema = new Schema ({
  name: {type: String, required: true},
  buttonClicked: Array,
  sustain: Boolean,
  createdAt: {type: Date, expires: 300, default: Date.now}
})

const Session = mongoose.model('session', sessionSchema);

module.exports = { Session }