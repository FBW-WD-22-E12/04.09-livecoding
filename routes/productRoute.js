import express from 'express'

import { getAllProducts , deleteProduct, updateProduct, createProduct} from '../controllers/productsController.js'

const router = express.Router()

router.get('/all-products',  getAllProducts)

router.delete('/delete-product', deleteProduct)

router.post('/create-product', createProduct)

router.patch('/update-product', updateProduct)


router.get('/single-product', (req, res) => {
    res.send('Single product controller called')
})

/* router.get('/products',  getAllProducts)

router.delete('/products', deleteProduct)

router.post('/products', createProduct)

router.patch('/products', updateProduct) */

// Alternate for the above lines of code that are commented out.
// An other way to define the routes where the end point is same but methods are different
/* router.route('/products').get(getAllProducts).delete(deleteProduct).post(createProduct).patch(updateProduct) */


export default router

