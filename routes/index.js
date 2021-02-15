const router = require('express').Router();
const apiKeyMiddleware = require('../middlewares/apiKey')



// router.use(apiKeyMiddleware);

router.get('/',(req,res)=>{
    res.render('index',{
        title:"My Home PAge",
    });
});

router.get('/about',(req,res)=>{
    res.render('about',{
        title:"My aBOUT PAge",
    })
});

router.get('/download',(req,res)=>{
    res.download(path.resolve(__dirname)+'/index.html');
});




module.exports=router;

