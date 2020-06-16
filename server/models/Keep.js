import mongoose from "mongoose";
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Keep = new Schema({
  Name: { type: String, required: true },
  Description: { type: String, required: true },
  Img: { type: String, required: true },
  creatorEmail: { type: String, required: true }
});


// public int Id { get; set; }
//         public string UserId { get; set; }
//         public string Name { get; set; }
//         public string Description { get; set; }
//         public string Img { get; set; }
//         public bool IsPrivate { get; set; }
//         public int Views { get; set; }
//         public int Shares { get; set; }
//         public int Keeps { get; set; }


Keep.virtual("organization",
  {
    localField: "organizationId",
    ref: "Organization",
    foreignField: "_id",
    justOne: true
  })

export default Keep;