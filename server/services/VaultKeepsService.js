import {
  dbContext
} from "../db/DbContext"
import {
  BadRequest
} from "../utils/Errors"


class VaultKeepsService {
  async getAll() {
    return await dbContext.VaultKeeps.find().populate("creator", "name picture")
    // .populate("organization", "name")
  }

  async getById(id, userEmail) {
    let data = await dbContext.VaultKeeps.findOne({
      _id: id,
      creatorEmail: userEmail
    })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this donation")
    }
    return data
  }

  async create(rawData) {
    let data = await dbContext.VaultKeeps.create(rawData)
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
    let data = await dbContext.VaultKeeps.findOneAndRemove({
      _id: id,
      creatorEmail: userEmail
    });
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this donation");
    }
  }

}


export const vaultKeepsService = new VaultKeepsService()