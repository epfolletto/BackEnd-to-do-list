import { Request, Response } from "express";
import userExist from "../data/0-userExist";
import updateUser from "../data/3-updateUser";

export default async (req:Request, res:Response): Promise<any> => {
  try {
    const id = req.params.id;

    const user = await userExist(id);
    if(!user.length){
      res.status(200).send("Não foi encontrado usuário com esse ID!");
    }

    const name = req.body.name || user[0].name
    const nickname = req.body.nickname || user[0].nickname
    const email = req.body.email || user[0].email

    updateUser(Number(id), name, nickname, email);
    res.status(200).send("Dados atualizados com sucesso!");
  } catch (error:any) {
    if (res.statusCode === 200) {
      res.status(500).send(error.message)
    } else {
      res.status(res.statusCode).send(error.message)
    }
  }
};