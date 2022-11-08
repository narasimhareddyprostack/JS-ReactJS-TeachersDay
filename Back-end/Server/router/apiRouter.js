const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

/*
    USAGE : Get all the products
    URL : http://127.0.0.1:5000/api/products
    Method : GET
    Fields : no-fields
 */
router.get('/products', async (request , response) => {
    try {
        let products = await Product.find();
        response.status(200).json(products);
    }
    catch (err) {
        console.error(err);
        response.status(500).json({
            msg : err.message
        });
    }
});

/*
    USAGE : Get a Single Product
    URL : http://127.0.0.1:5000/api/products/:id
    Method : GET
    Fields : no-fields
 */
router.get('/products/:id', async (request , response) => {
    try {
        let productId = request.params.id;
        let product = await Product.findById(productId);
        response.status(200).json(product);
    }
    catch (err) {
        console.error(err);
        response.status(500).json({
            msg : err.message
        });
    }
});

/*
    USAGE : Create a Product
    URL : http://127.0.0.1:5000/api/products/
    Method : POST
    Fields : name , image , price , qty , info
 */
router.post('/products', async (request , response) => {
    try {
        let newProduct = {
            name : request.body.name,
            image : request.body.image,
            price : request.body.price,
            qty : request.body.qty,
            info : request.body.info
        };
        // product is Exists or not
        let product = await Product.findOne({name : newProduct.name});
        if(product){
            return response.status(401).json({
                msg : 'Product is Already Exists'
            })
        }
        product = new Product(newProduct);
        product = await product.save(); // insert the product to database
        response.status(200).json({
            result : 'Product is Created',
            product : product
        });
    }
    catch (err) {
        console.error(err);
        response.status(500).json({
            msg : err.message
        });
    }
});

/*
    USAGE : Update a Product
    URL : http://127.0.0.1:5000/api/products/:id
    Method : PUT
    Fields : name , image , price , qty , info
 */
router.put('/products/:id', async (request , response) => {
    let productId = request.params.id;
    try {
        let updatedProduct = {
            name : request.body.name,
            image : request.body.image,
            price : request.body.price,
            qty : request.body.qty,
            info : request.body.info
        };
        // product is exists or not
        let product = await Product.findById(productId);
        if(!product){
            return response.status(401).json({
                msg : 'No Product Found'
            });
        }
        // update
        product = await Product.findByIdAndUpdate(productId , {
            $set : updatedProduct
        }, { new : true});
        response.status(200).json({
            result : 'Product is Updated',
            product : product
        });
    }
    catch (err) {
        console.error(err);
        response.status(500).json({
            msg : err.message
        });
    }
});

/*
    USAGE : Delete a Product
    URL : http://127.0.0.1:5000/api/products/:id
    Method : DELETE
    Fields : no-fields
 */
router.delete('/products/:id', async (request, response) => {
    try{
        let productId = request.params.id;
        // product is exists or not
        let product = await Product.findById(productId);
        if(!product){
            return response.status(401).json({
                msg : 'No Product Found'
            });
        }
        //delete
        product = await Product.findByIdAndDelete(productId);
        response.status(200).json({
            result : 'Product is Deleted',
            product : product
        });
    }
    catch (err) {
        console.error(err);
        response.status(500).json({
            msg : err.message
        });
    }
});

module.exports = router;
