const Product=require("../models/product");
const router=require("express").Router();

router.post("/admin/products",(req,res)=>{
   Product.insertMany(req.body,(err,data)=>{
    //    if(err)
    //    return console.log(err);
       res.status(200).send(data);
   });
   
});
router.get("/",(req,res)=>{
    Product.find({},(err,data)=>{
    if(err)
    return console.log(err)
    console.log(data);
    res.send(data);
    
    })
})
router.delete("/:id",(req,res)=>{
    Product.findOneAndRemove({"_id":req.params.id},(err,data)=>{
        if(err)
        {
            console.log(err);
            return res.status(500).send("err");
    }
        res.status(200).send(data);
    })
})
router.get("/:id",(req,res)=>{
    Product.findById({"_id":req.params.id},(err,data)=>{
        if(err)
        {
            console.log(err);
            return  res.status(500).send("err");
    }
        res.status(200).send(data);
    })
})
router.put("/:id",(req,res)=>{
    Product.findOneAndUpdate({"_id":req.params.id},req.body,{new:true},(err,data)=>{
        if(err)
        {
            console.log(err);
       return res.status(500).send("err");
    }
        res.status(200).send(data);
    })
})
module.exports=router;