
const { Schema, model } = require("mongoose");

const postSchema = new Schema({
    idPost: String,
    idUsuario: String,
    likes: [],
    comments: []
  },
  {timestamps: true}
  );
  
  const Post = model("Post", postSchema);
  
  module.exports = Post;
  