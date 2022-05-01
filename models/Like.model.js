const { Schema, model } = require("mongoose");

const likeSchema = new Schema({
    idPost: [{ type: Schema.Types.ObjectId, ref: "Post"}],
    idUser: [{ type: Schema.Types.ObjectId, ref: "User"}]
  },
  {timestamps: true}
  );
  
  const Like = model("Like", likeSchema);
  
  module.exports = Like;
  