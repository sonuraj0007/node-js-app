const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(express.static("public"));


let tasks = [
    {
        id: 1,
        title: "Learn Jenkins",
        completed: false
    },
    {
        id: 2,
        title: "Create CI/CD pipeline",
        completed: true
    }
];


app.get("/api/tasks", (req, res) => {

    res.json(tasks);

});


app.post("/api/tasks", (req, res) => {

    const { title } = req.body;

    if (!title) {

        return res.status(400).json({
            error: "Task title is required"
        });

    }

    const newTask = {

        id: Date.now(),

        title: title,

        completed: false

    };

    tasks.push(newTask);

    res.status(201).json(newTask);

});


app.put("/api/tasks/:id", (req, res) => {

    const id = Number(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {

        return res.status(404).json({
            error: "Task not found"
        });

    }

    task.completed = !task.completed;

    res.json(task);

});


app.delete("/api/tasks/:id", (req, res) => {

    const id = Number(req.params.id);

    const taskExists = tasks.some(task => task.id === id);

    if (!taskExists) {

        return res.status(404).json({
            error: "Task not found"
        });

    }

    tasks = tasks.filter(task => task.id !== id);

    res.json({
        message: "Task deleted successfully"
    });

});


app.get("/api/health", (req, res) => {

    res.json({
        status: "UP",
        application: "basic-node-project"
    });

});


app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});
