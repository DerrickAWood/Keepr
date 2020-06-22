import mongoose from "mongoose";
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const VaultKeep = new Schema({
  creatorEmail: { type: String, required: true },
  keepId: { type: String, required: true },
  vaultId: { type: String, required: true },
});





VaultKeep.virtual("organization",
  {
    localField: "organizationId",
    ref: "Organization",
    foreignField: "_id",
    justOne: true
  })

export default VaultKeep;