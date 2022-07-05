import express from 'express';
import MemoryContainer from '../memoryContainer.js'

const router = express.Router();

const productsContainer = new MemoryContainer();

router.get('/api/products', (req, res) => {
    const products = productsContainer.getAll()
    res.status(201).send({status: "success" , payload: products})
})

router.get('/api/products/:id', (req, res) => {
    const product = productsContainer.getById(req.params.id)
    if(product){
        res.send({status: "success" , payload: product})
    }else{
        res.send({status: "error", message: "Product not found"})
    }
})

router.post('/api/products', (req, res) => {
    const product = productsContainer.save(req.body)
    res.status(200).send({status: "success", product})
})

router.put('/api/products/:id'), (req, res) => {
    const product = productsContainer.updateProduct(req.params.id, req.body)
    res.send({status: "succes", payload: product})
}

router.delete('/api/products/:id'), (req, res) => {
    const product = productsContainer.deleteById(req.params.id)
    res.send({status: "succes", payload: product})
}

export default router;