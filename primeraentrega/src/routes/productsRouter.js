import express from 'express';
import Container from '../container.js'

const routerProducts = express.Router();

const productsContainer = new Container ('products.txt')

routerProducts.get('/', async (req, res) => {
    const products = await productsContainer.getAll()
    res.send({status: "succes", payload: products})
})

routerProducts.get('/', async (req, res) =>{
    const products = await productsContainer.getById(req.params.id)
    if(products){
        res.send({status: "succes", payload: "products"})
    }else{
        res.send({status: "error", message: "Products not found"})
    }
    console.log(products)
})
routerProducts.post('/', async (req, res) =>{
    const product = await productsContainer.save(req.body)
    res.status(200).send({status: "succes", product})
})

routerProducts.put('/', async (req, res) =>{
    const productUpdated = await productsContainer.updateProduct(req.body)
    res.status(200).send({status: "succes", payload: productUpdated})
})

routerProducts.delete('/', async (req, res) =>{
    const deleteProduct = await productsContainer.deleteById(req.params.id)
    res.status(200).send({status: "succes", deleteProduct})
})

export default routerProducts;