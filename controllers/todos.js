var Model = require('../models')
var todo = require('../models/todo')

const todos = {

    // GET all data
    getAllTodos: async(req, respond) => {
        let todos = []
        try{
            todos = await Model.Todos.findAll()
        }catch(e){
            console.log(e)
        }

        res.json(todos)
    },

    // GET one data
    getTodo: async(req, respond) => {
        let todos = []
        try{
            todos = await Model.Todos.findOne()({
                where: {
                    id: req.params.id
                }
            })
        }catch(e){
            console.log(e)
        }

        res.json(todos)
    },

    // POST data
    createTodo: async(req, res) => {
        let todos = []

        console.log(req)

        try{
            todos = await Model.Todos.create({
                title: req.body.title,
                description: req.body.description
            })
        }catch(e){
            console.log(e)
        }

        res.json(todos)
    },

    //UPDATE data
    updateTodo: async(req, res) => {
        let todo = {}

        try {
            todo = await Model.Todos.update(
                req.body, {
                where: {
                    id: req.params.id
                }
                
            });
        }catch(e){
            console.log(e)
        }

        res.json(todo)
    },

    //DELETE data
    deleteTodo: async(req, res) => {
        await Model.Todos.destroy({
            where: {
                id: req.params.id
            }
        })

        res.status(204).json({
            status: 'Success'
        })
    }
} 

module.exports = todos