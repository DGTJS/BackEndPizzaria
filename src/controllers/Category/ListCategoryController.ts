import { Request, Response } from "express";
import { ListCategoryService } from "../../services/Category/ListCategoryService";



// Essa classe chamada ListCategoryController possui um método assíncrono chamado handle 
// que lida com uma solicitação (req) e uma resposta (res),
// instanciando o serviço ListCategoryService para executar a 
// listagem de categorias e retornando os dados da categoria em formato JSON.

class ListCategoryController{
    async handle(req:Request, res: Response){
        const listCategoryService = new ListCategoryService

        const category = await listCategoryService.execute()

        return res.json(category);

       }
}

export {ListCategoryController}