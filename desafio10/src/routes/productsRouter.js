import express from 'express';
import MemoryContainer from '../memoryContainer.js';

const router = express.Router();

const productsContainer = new MemoryContainer()


router.post('/products', (req, res) => {
    const product = productsContainer.save(req.body)
    res.status(200).send({status: "success", product})
})


router.get('/products', (req, res) => {
    const products = productsContainer.getAll()
    res.status(201).send({status: "success" , payload: products})
})

