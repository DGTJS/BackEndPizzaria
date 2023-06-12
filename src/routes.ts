import {Router} from 'express'

// O Multer é um middleware Node.js que facilita o processamento de uploads de arquivos em aplicativos web.
import multer from 'multer';

import {CreateUserController} from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUSerController } from './controllers/user/DetailUserController'; 

import { autenticacao } from './middlewares/Autenticacao';

import { CreateCategoryController } from './controllers/Category/CreateCategoryController';
import { ListCategoryController } from './controllers/Category/ListCategoryController';

import { CreateProductController } from './controllers/Product/CreateProductController';
import { ListByCategoryController } from './controllers/Product/ListByCategoryController';

import { CreateOrderController } from './controllers/order/CreateOrderController';

import uploadConfig from './config/multer'


const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', autenticacao, new DetailUSerController().handle )

// ---ROTAS CATEGORIA/
router.post('/category', autenticacao, new CreateCategoryController().handle )

router.get('/category', autenticacao, new ListCategoryController().handle)

// ROTAS PRODUTOS 
router.post('/product', autenticacao, upload.single("file") ,new CreateProductController().handle)

router.get('/category/product', autenticacao, new ListByCategoryController().handle)

// ROTAS ORDER
router.post('/order', autenticacao, new CreateOrderController().handle)

export {router}