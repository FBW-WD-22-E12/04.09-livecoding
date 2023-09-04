import express from 'express'

import { getAllProducts , deleteProduct, updateProduct, createProduct} from '../controllers/productsController.js'

const routes = express.Router()

routes.get('/products',  getAllProducts)

routes.delete('/products', deleteProduct)

routes.post('/products', createProduct)

routes.patch('/products', updateProduct)




export default routes

