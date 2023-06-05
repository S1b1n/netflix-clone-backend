const express=require("express")
const router=express.Router()
const Category=require("../model/categoryModel")
const Movie=require("../model/movieModel")
const category = require("../model/categoryModel")

router.get("/",async(req,res)=>{
    try {
     const getmovie=await Movie.find().populate("categories")
     res.json(getmovie)   
    } catch  (error) {
        console.log("get error")
        res.send(error + "get error")
    }
})

router.post("/",async(req,res)=>{
    try {
        const {title,description,imageUrl,categories}=req.body;
        const category=await Category.findById(categories);
        const postmovie= new Movie({title,description,imageUrl,categories:category._id}) 
        await postmovie.save()
        res.json(postmovie)
   
    } catch (error) {
        console.log("post error")
        res.send(error +"post error")    
    }
})

router.get("/:id",async(req,res)=>{
    try {
     const getmovie=await Movie.findById(req.params.id).populate("categories")
     res.json(getmovie)   
    } catch  (error) {
        console.log("get error")
        res.send(error + "get error")
    }
})

router.put("/:id",async(req,res)=>{
    try {
     const getmovie=await Movie.findByIdAndUpdate(req.params.id,req.body)
     res.json(getmovie)   
    } catch  (error) {
        console.log("get error")
        res.send(error + "get error")
    }
})

router.delete("/:id",async(req,res)=>{
    try {
     const getmovie=await Movie.findByIdAndDelete(req.params.id)
     res.json(getmovie)   
    } catch  (error) {
        console.log("get error")
        res.send(error + "get error")
    }
})
module.exports=router