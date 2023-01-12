// basic server structure
// const express = require('express');//is the way to import dependency or package or third party library

// const app = express();
// const PORT = process.env.PORT || 3001;

// //sending a response to fronted or clientside
// app.get('/',(req, res)=>{ //'/' means or clientside
//     res.send('<h1>Welcome to EJS<h1>');
// });

// app.get('/about',(req, res)=>{//'/about means root route
//     res.send('<h1>Welcome to EJS<h1>');
// });


// app.listen(PORT,() => {
//     console.log(`server is running at http://localhost:${PORT}`);
// });

//challenge area
//built the basic backend server with the following routes
//'/'
//'/booking'
//'/payment'
//'/features'
//'/contact'
//startup your express server -> npm start Or npm run dev

// //basic server structure
// const express = require('express');//is the way to import dependency or package or third party library

// const app = express();
// const PORT = process.env.PORT || 3001;

// //sending a response to fronted or clientside
// app.get('/',(req, res)=>{ //'/' means or clientside
//     res.send('<h1>Welcome to Mimi Library<h1>');
// });

// app.get('/booking',(req, res)=>{
//     res.send('<h1>I love Mimi<h1>');
// });

// app.get('/payment',(req, res)=>{
//     res.send('<h1>Welcome to greater height<h1>');
// });

// app.get('/features',(req, res)=>{
//     res.send('<h1>We are from Greater Height<h1>');
// });

// app.get('/contact',(req, res)=>{
//     res.send('<h1>Hire Me  <h1>');
// });

// app.listen(PORT,() => {
//     console.log(`server is running at http://localhost:${PORT}`);
// });

//app.listen(PORT, () => {
// console.log(`server is running at http://localhost:${PORT}`);
//});
const express = require('express'); 
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

//setup the template engine
app.set('view engine', 'ejs');

app.use(express.static('public'));
// app.use(express.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

let plNames = ['c', 'c++', 'java', 'python'];

//sending a response to fronted or clientside
app.get('/',(req, res)=>{
    res.status(200).render('index', {pageTitle: 'Home Page', proNames: plNames});
});

//getting data from frontend and insert it on plNames array of string
app.post('/', (req, res)=>{
    const plName = req.body.plName;
    plNames.push(plName);
    // console.log(plName);
    // res.status(201).send('data is create');
    res.redirect('/')
});
app.get(`/contact`, (req, res) =>{
    res.status(200).render('contact', {pageTitle: 'Contact Page'});
});

app.listen(PORT, () => {
    console.log(`server is runnning at http://localhost:${PORT}`);
});



