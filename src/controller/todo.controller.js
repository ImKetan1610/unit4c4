const express = require("express");
const Todo = require("../models/todo.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {

    const todo = await Todo.create(req.body);
    return res.status(201).send(todo);

  } catch (error) {

      return res.status(500).send(error.message);

  }
});

router.get("",async (req,res) => {
    try{
        const todo = await Todo.find().lean().exec();
        return res.status(200).send({todo:todo});
    }catch(err){
        return res.status(500).send({message:err.message});
    }
});

router.get("/todos/:id",async (req,res) => {
    try{
        const todo = await Todo.findById(req.params.id).lean().exec();
        return res.status(200).send({todo:todo});
    }catch(err){
        return res.status(500).send({message:err.message});
    }
});

router.patch("/todos/:id",async (req,res) => {
    try{
        const todo = await Todo.findByIdAndUpdate(req.params.id,req.body).lean().exec();
        return res.status(200).send({todo:todo});
    }catch(err){
        return res.status(500).send({message:err.message});
    }
});

router.delete("/todos/:id",async (req,res) => {
    try{
        const todo = await Todo.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send({todo:todo});
    }catch(err){
        return res.status(500).send({message:err.message});
    }
});

module.exports = router;