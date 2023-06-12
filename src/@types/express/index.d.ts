// adiciona uma propriedade user_id de tipo string à interface Request do namespace Express, 
// permitindo o acesso ao ID do usuário nas solicitações do Express.
declare namespace Express{
    export interface Request{
        user_id: string;
    }
}