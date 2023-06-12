import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";

// Essa classe chamada AuthUserController possui um método assíncrono chamado handle que lida com uma solicitação (req)
// e uma resposta (res), obtendo os dados do corpo da requisição (email e senha), instanciando o serviço AuthUserService
// e executando a autenticação do usuário. O resultado da autenticação é retornado
// em formato JSON na resposta. O AuthUserController é exportado para ser utilizado em outros lugares do código.

class AuthUserController{
    async handle(req: Request, res: Response){
    
    const {email, password} = req.body;

    const authUserService = new AuthUserService();

    const auth = await authUserService.execute({
        email,
        password,
    })

    return res.json(auth)
    }
}
export {AuthUserController}