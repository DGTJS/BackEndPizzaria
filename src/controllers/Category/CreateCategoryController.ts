import { Request, Response } from "express";
import { CreateCategotyService } from "../../services/Category/CreateCategotyService";


class CreateCategoryController{
    async handle(req: Request, res: Response){
        const {name} = req.body;

        const createCategoryService = new CreateCategotyService();

        const Category = await createCategoryService.execute({
            name
        });

        return res.json(Category)
    }

}

export {CreateCategoryController}