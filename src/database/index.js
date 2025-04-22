import mongoose from "mongoose";
const connectToDB = async () => {
  const url =
    "mongodb+srv://asifxyz:ASIF2025@cluster0.mdwnx.mongodb.net/";
  mongoose
    .connect(url)
    .then(() => console.log("connected"))
    .catch((error) => console.log(error));
};
export default connectToDB;
