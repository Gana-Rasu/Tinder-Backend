const mongoose = require('mongoose');

const Schema = mongoose.Schema({
name:String,
url:String,
});

export default mongoose.model("Cards",Schema)