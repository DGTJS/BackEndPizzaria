import prismaClient from "../../prisma";

interface ProductRequest{
    name: string,
    price: string,
    description: string,
    banner: string,
    category_id: string,
}

class CreateProductService{
    async execute({name, price, description, banner, category_id}: ProductRequest){

        const produtos = await prismaClient.product.create({
            data:{
                name: name,
                price: price,
                description: description,
                banner: banner,
                category_id: category_id,
            }
        })

        return produtos
    }
}
export {CreateProductService}