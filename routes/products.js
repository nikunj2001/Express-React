const router = require('express').Router();
const apiKeyMiddleware = require('../middlewares/apiKey')
const products =require('../productData');
router.get('/products',(req,res)=>{
    res.render('products',{
        title:"My Products Page",
    })
});

router.get('/api/products',(req,res)=>{
    
    res.json(products);
})
router.post('/api/products',apiKeyMiddleware,(req,res)=>{
    const {name,price}=req.body;
    if(!name || !price){
        return res.status(422).json({error:'All Fields are required.'});
    }
    const product={
        name,price,id:new Date().getTime().toString()
    }
    products.push(product)
   res.json(product);
});



module.exports = router