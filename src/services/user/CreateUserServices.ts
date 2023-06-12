import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs';

const prismaClient = new PrismaClient();

interface UserRequest{
    name: string;
    email: string;
    password: string;
}

class CreateUserService{
    async execute({name, email, password}: UserRequest){
        const userAlreadyExist = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        const passwordHash = await hash(password, 8)

        if(!email){
            console.log("E-mail Inválido!")
        }
        else if(userAlreadyExist){
            console.log("O usuário já existe!")
        }
        else {
            const user = await prismaClient.user.create({
                data:{
                    name: name,
                    email: email,
                    password: passwordHash
                },
                select:{
                    id: true,
                    name: true,
                    email: true
                    
                }
            })
            console.log(`Usuario ${user.name} ja está criado`)
        }
    }
}
export { CreateUserService }