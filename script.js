const fs = require('fs');

fs.readFile('todo.txt', 'utf-8', (err, data) => {
    if (err){console.error(err);}
    console.log(data);
})