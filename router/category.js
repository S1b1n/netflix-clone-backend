const express=require("express")
const category=require("../model/categoryModel")
const router=express.Router()

router.get("/",async(req,res)=>{
    try {
        const getCategory=await category.find()
        res.json(getCategory)
        
    } catch (error) {
      res.send(error)  
    }
})
router.get("/:id",async(req,res)=>{
    try {
        const getCategory=await category.findById(req.params.id)
        res.json(getCategory)
        
    } catch (error) {
      res.send(error)  
    }
})
router.post("/",async(req,res)=>{
    try {
       const getCategory=new category(req.body) 
       const addCategory=await getCategory.save()
       res.json(addCategory)
    } catch (error) {
        res.send(error)
    }

})

router.delete("/:id",async(req,res)=>{
try {
    const deletemovie=await category.findByIdAndDelete(req.params.id)
    res.send(deletemovie)
} catch (error) {
    res.send(error)
}
})


module.exports=router