const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// Configure template Engine and Main Template File
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
// Setting template Engine
app.set('view engine', 'hbs');

// routes
app.get('/', (req, res) => {
    res.render('home', { msg: 'This is home page'});
});
app.get('/spaceLottery', (req, res) => {
    res.render('spaceLottery');
});

// port where app is served
app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});
