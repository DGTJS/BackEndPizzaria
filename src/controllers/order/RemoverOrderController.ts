import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/order/RemoveOrderService";

class RemoverOrderController{
    async handle(req: Request, res: Response){
         const order_id = req.query.order_id as string;
        
         const removerOrder = new RemoveOrderService();
         
         const order = removerOrder.execute({
            order_id
         })
        }

}

export {RemoverOrderController}