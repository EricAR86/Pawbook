const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const petSchema = new Schema(
  {
    category: {
        type: Syting,
        enum: ["dog", "cat", "hamster"]
    },

    age: Number,
    name: String,
    breed: String,
    size:{
        type: String,
        enum: ["mini", "small", "medium", "large"]
    }
  },
  {
    
    timestamps: true,
  }
);

const Pet = model("Pet", petSchema);

module.exports = User;