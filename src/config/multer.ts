// O Multer é um middleware Node.js que facilita o processamento de uploads de arquivos em aplicativos web.
import multer from 'multer'

import crypto from 'crypto'

import {extname, resolve} from 'path'

//  exporta um objeto que possui um método chamado upload,
//  que recebe uma string representando uma pasta. Esse método
//  retorna um objeto com a configuração de armazenamento do multer,
//  especificando a pasta de destino e gerando um nome de arquivo único
//  usando um hash e o nome original do arquivo.
export default{
    upload(folder: string){
        return{
            storage: multer.diskStorage({
                destination: resolve(__dirname, '..', '..', folder),
                filename: (request, file, callback) =>{
                    const fileHash = crypto.randomBytes(16).toString('hex')
                    const fileName = `${fileHash}-${file.originalname}`
                    
                    return callback(null, fileName)
                }       
            })
        }
    }
}