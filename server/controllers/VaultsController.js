import express from 'express'
import BaseController from "../utils/BaseController";
import auth0provider from "@bcwdev/auth0provider";
import {
  vaultsService
} from "../services/VaultsService";



//PUBLIC
export class VaultsController extends BaseController {
  constructor() {
    super("api/vaults")
    this.router
      .use(auth0provider.getAuthorizedUserInfo)
      .get('', this.getAll)
       .get('/:id', this.getById)
      // .get('/:id/task', this.getTaskByListId)
       .post('', this.create)
      // .put('/:id', this.edit)
       .delete('/:id', this.delete)
  }


  async getAll(req, res, next) {
    try {
      let data = await vaultsService.getAll()
      return res.send(data)
    } catch (err) {
      next(err)
    }
  }
  async getById(req, res, next) {
    try {
      let data = await vaultsService.getById(req.params.id, req.userInfo.email)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email
      let data = await vaultsService.create(req.body)
      return res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }

  // async edit(req, res, next) {
  //   try {
  //     let data = await vaultsService.edit(req.params.id, req.userInfo.email, req.body)
  //     return res.send(data)
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  async delete(req, res, next) {
    try {
      await vaultsService.delete(req.params.id, req.userInfo.email)
      return res.send("Successfully deleted")
    } catch (error) {
      next(error)
    }
  }
}