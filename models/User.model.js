const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: String,
  avatar: String,
  plan: {
    type: String,
    enum: ['free', 'premium'],
    default: 'free'
  },
  pet: [{
    type: Schema.Types.ObjectId,
    ref: 'Pet'
  }],
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'Like'
  }]

}, { timestamps: true });

const User = model("User", userSchema);

module.exports = User;
