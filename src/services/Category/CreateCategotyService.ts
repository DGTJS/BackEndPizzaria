import prismaClient from "../../prisma";

interface CategoryRequest{
    name: string;
}


class CreateCategotyService{
    async execute({name}: CategoryRequest){
        const VerificacaoCategoria = await prismaClient.category.findFirst({
            where:{
                name: name
            }
        })
        if(name === ''){
            throw new Error('Nome invalido')
        }
        else if(VerificacaoCategoria)
        {
            return {name: "Categoria ja existe"}
        }

        const category = await prismaClient.category.create({
            data:{
                name: name,

            },
            select:{
                id: true,
                name: true
            }
        })

        return category
    }
}

export {CreateCategotyService}