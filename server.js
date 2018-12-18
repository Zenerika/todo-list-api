var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));
console.log(__dirname)

var todoList = [
    {
        id: 1,
        todo: "Take Zac a bath"
    },
    {
        id: 2,
        todo: "Wash the car"
    }
];

// GET /api/todos
app.get('/api/todos', function(req, res, next) {
    console.log(req.params.todos)
    res.send(todoList)
})

// GET /api/todos/:id
app.get('/api/todos/:id', function(req, res, next) {
    console.log(req.params.id)
    var theTodo = null
    todoList.map(function(todo) {
        if (todo.id === parseInt(req.params.id)) {
            theTodo = todo
        }
    })
    res.json({ id: '1', todo: theTodo  })
})

// POST /api/todos
app.post('/api/todos', function(req, res, next){
    // console.log(req.body);
    var newID = todoList.length + 1
    var newTodo = req.body
    newTodo['id'] = newID 
    // console.log(newTodo);
    todoList.push(newTodo);
    // console.log(todoList);
    res.json(todoList);
})

// *******Doesn't work******************
// PUT /api/todos/:id
app.put('/api/todos/:id', function(req, res, next) {
    todo = req.body
    todoList.map(function(todo) {
        if (todo.id === parseInt(req.params.id)) {
            newID = req.params.id
            console.log('hi ', newID)
            todo = req.body
            console.log('hello ', todo)
        }
    })
    console.log('yay ', newID)
    console.log('or nay? ', todo)
    res.json({ newID, todo})
})

// // *******Task Completed******************
// // PUT /api/todos/:id
// app.put('/api/todos/:id', function(req, res, next) {
//     var ID = req.params.id;
//     console.log(ID)
//     // todoList.map(function(element){
//     //     if (parseInt(element.id) == ID) {
//     //        element['isComplete'] = true;
//     //     }
//     //     console.log(element)
//     // })
//     res.json(todoList)
//     console.log(todoList)
// })

// DELETE /api/todos/:id
app.delete('/api/todos/:id', function (req, res, next) {
    // console.log(req.params.id)
    var ID = req.params.id
    todoList.map(function(element){
        var idx = ID - 1;
        todoList.splice(idx, 1, null)
    })
    // console.log(todoList)
    res.json(todoList)
})


app.listen(3000, function(){
    console.log('waka waka Todo List API is now listening on port 3000...');
})