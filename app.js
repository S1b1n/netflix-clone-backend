const express =require("express")
const app=express();
const mongoose=require("mongoose")
const port=3003
const cors=require("cors")

main().then((result) => {
    console.log("mongodb connected")   
}).catch((err) => {
    console.log(err)   
});
async function main() {
    await mongoose.connect("mongodb+srv://s1b1n:nIcTYNoBV4OS6SNX@cluster0.eezf1w1.mongodb.net/")}

app.use(express.json())
app.use(cors())

const movie2=require("./router/Movies")
app.use("/movie",movie2)

const category1=require("./router/category")
app.use("/category",category1)

const getmovie1=require("./router/getCategory")
app.use("/getcategory",getmovie1)

app.listen(port,()=>{
    console.log(`app is listening on ${port}`)
})