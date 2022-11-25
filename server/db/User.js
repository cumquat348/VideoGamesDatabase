const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    nick: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    picture: { type: String },
    privileges: { type: Number },
    blocked: { type: Boolean },
    blockade_expiration_date: { type: Date },
    library_ids: { type: Array }
});

const User = mongoose.model("user", userSchema);

exports.user = User