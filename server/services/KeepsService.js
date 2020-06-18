import {
  dbContext
} from "../db/DbContext"
import {
  BadRequest
} from "../utils/Errors"


class KeepsService {
  async getAll() {
    return await dbContext.Keeps.find().populate("creator", "name picture")
    // .populate("organization", "name")
  }

  async getById(id, userEmail) {
    let data = await dbContext.Keeps.findOne({
      _id: id,
      creatorEmail: userEmail
    })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this donation")
    }
    return data
  }

  async create(rawData) {
    let data = await dbContext.Keeps.create(rawData)
    return data
  }

  // async edit(id, userEmail, update) {
  //   let data = await dbContext.Donations.findOneAndUpdate({
  //     _id: id,
  //     creatorEmail: userEmail
  //   }, update, {
  //     new: true
  //   })
  //   if (!data) {
  //     throw new BadRequest("Invalid ID or you do not own this donation");
  //   }
  //   return data;
  // }

  async delete(id, userEmail) {
    let data = await dbContext.Keeps.findOneAndRemove({
      _id: id,
      creatorEmail: userEmail
    });
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this donation");
    }
  }

}


export const keepsService = new KeepsService()