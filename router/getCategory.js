const express=require("express")
const router=express.Router()
const category=require("../model/categoryModel")
const Movie=require("../model/movieModel")

router.get("/:id",async(req,res)=>{
    try {
        const getmovie=await Movie.find({categories:req.params.id}).populate("categories")
        res.json(getmovie)
    } catch (error) {
        res.send(error)
    }

})
module.exports=router