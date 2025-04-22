import mongoose from "mongoose";
const Userschema = new mongoose.Schema({
  firstName: String,
  lastName : String,
  email : String,
  address : String
});
const User = mongoose.models.user || mongoose.model("user" ,Userschema);

export default User;