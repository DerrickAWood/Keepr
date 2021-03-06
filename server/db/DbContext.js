import mongoose from "mongoose";
import ValueSchema from "../models/Value";
import ProfileSchema from "../models/Profile";
import BoardSchema from '../models/Board';
import KeepSchema from '../models/Keep';
import VaultSchema from '../models/Vault';
import VaultKeepSchema from '../models/VaultKeep';
class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Profile = mongoose.model("Profile", ProfileSchema);
  Boards = mongoose.model("Board", BoardSchema)
  Keeps = mongoose.model("Keep", KeepSchema)
  Vaults = mongoose.model("Vault", VaultSchema)
  VaultKeeps = mongoose.model("VaultKeep", VaultKeepSchema)
}

export const dbContext = new DbContext();
