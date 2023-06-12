import express, {Request, Response, NextFunction} from 'express'
import { router } from './routes'

// 
// O módulo "express-async-errors" facilita o tratamento de erros assíncronos no Express,
//  fornecendo uma camada de tratamento de erros para rotas assíncronas.
import 'express-async-errors'

// 
//  CORS (Cross-Origin Resource Sharing) é um mecanismo que controla as solicitações
//  entre origens diferentes em aplicações web, e o módulo "cors" simplifica sua configuração no Express.
import cors from 'cors'

// 
// fornece utilitários para manipulação de caminhos de arquivos e diretórios.
import path from 'path'
// 


const app = express();
app.use(express.json());
app.use(cors())

app.use(router),

app.use(
    // files = Img 
    '/files',
    // Rota Estatica 
    express.static(path.resolve(__dirname, '..', 'tmp'))
    
)

app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
    if(err instanceof Error){
        //se for uma instancia do tipo error
        return res.status(400).json({
            error: err.message
        })
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
    })
})

app.listen(3333, ()=>{
    console.log('Servidor Online')
})