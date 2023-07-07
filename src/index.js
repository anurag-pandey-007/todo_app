const express = require('express');
const { PORT } = require('./config/server-config');
const approuter = require('./routes/approutes');

const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// })
app.use('/', approuter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


// A sql query to list name with client year > 5 annual buget >10000 and sponser is Appgambit ?
