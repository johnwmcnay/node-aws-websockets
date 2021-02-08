var express = require('express');
var app = express();
app.use('/static', express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('listening:');
});