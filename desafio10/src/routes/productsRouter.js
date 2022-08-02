import express from 'express';
import MemoryContainer from '../memoryContainer.js';

const router = express.Router();

const productsContainer = new MemoryContainer()


router.post('/products', (req, res) => {
    const product = productsContainer.save(req.body)
    res.redirect('/')
})


router.get('/products', (req, res) => {
    const products = productsContainer.getAll()
    res.render('suggestedProduct.hbs', {products: products})
})

export default router