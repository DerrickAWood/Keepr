import mongoose from "mongoose";
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Vault = new Schema({
  Name: { type: String, required: true },
  Description: { type: String, required: true },
  // Img: { type: String, required: true },
  creatorEmail: { type: String, required: true }
});





Vault.virtual("organization",
  {
    localField: "organizationId",
    ref: "Organization",
    foreignField: "_id",
    justOne: true
  })

export default Vault;