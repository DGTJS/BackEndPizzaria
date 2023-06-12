import { Request, Response } from "express";
import { CreateProductService } from "../../services/Produtos/CreateProductService";


// Essa classe chamada CreateProductController possui um método assíncrono chamado handle que lida com uma
// solicitação (req) e uma resposta (res), obtendo os dados do corpo da requisição (nome, preço, descrição e ID da categoria),
// instanciando o serviço CreateProductService e executando a criação de um novo produto. Se um arquivo não for enviado na requisição,
// será lançado um erro. Caso contrário, o arquivo será obtido e utilizado como banner do produto. O produto criado é retornado
// em formato JSON na resposta.

class CreateProductController{
    async handle(req:Request, res:Response){
        const {name, price, description, category_id} = req.body;

        const createProductService = new CreateProductService();

        if(!req.file){
            throw new Error("Error upload file")
        }else{

        const {originalname, filename: banner} = req.file;

        const product = await createProductService.execute({
            name,
            price,
            banner,
            description,
            category_id
        });
        return res.json(product)
    }
    }
}

export {CreateProductController}