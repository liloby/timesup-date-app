const mongoose = require('mongoose')
const Schema = mongoose.Schema

const likesSchema = new Schema({
    name: String
  })
  
  const profileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    displayName: String,
    age: Number,
    sex: String,
    image: String,
    bio: String,
    hobbies: String,
    likes: [likesSchema]
  }, {
    timestamps: true,
  })


  module.exports = mongoose.model('Profile', profileSchema)