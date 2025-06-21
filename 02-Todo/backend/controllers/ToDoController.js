const ToDoModel=require('../models/ToDoModel.js')

module.exports.getToDo=async(req,res)=>{
    const toDo=await ToDoModel.find()
    res.send(toDo)
}

module.exports.saveToDo=async(req,res)=>{
    const {text}=req.body

    ToDoModel
    .create({text})
    .then((data)=>{
        console.log("Added succesfullt");
        console.log(data)
        res.send(data)

    })
    
}

module.exports.updateToDo= async (req,res)=>{
    const{__id,text}=req.body
    ToDoModel.findByIdAndUpdate(__id,{text})
    .then(()=> res.send("Updated Succesfully..."))
    .catch((err)=>console.log(err))
}

module.exports.deleteToDo= async (req,res)=>{
    const{__id}=req.body
    ToDoModel.findByIdAndUpdate(__id)
    .then(()=> res.send("Deleted Succesfully..."))
    .catch((err)=>console.log(err))
}