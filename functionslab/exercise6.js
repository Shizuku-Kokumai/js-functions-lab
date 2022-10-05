fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(todos => {
        const completedpp = todos.reduce((acc, todo) => {
            if (todo.completed) {
                acc[todo.userId] === undefined
                    ? (acc[todo.userId] = 1)
                    : (acc[todo.userId] += 1);
            }
            return acc;
        }, {});
        console.log(completedpp);
    })
    .catch(function (err) {
        console.log(err);
    });