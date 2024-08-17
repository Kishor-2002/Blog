require('dotenv').config();

const express = require('express')
const expressLayout = require('express-ejs-layouts')

const router = require('./server/routes/main')
const admin = require('./server/routes/admin')
const connectDB = require('./server/config/db')
const app = express()
const PORT = process.env.PORT || 5000

connectDB()
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cookieParser());
// app.use(methodOverride('_method'));

//Templating Engine

// app.set('layout', './layouts/main') configures where to find the layout file.
// app.set('view engine', 'ejs') sets EJS as the template engine for rendering views in the application.
app.use(expressLayout)
app.set('layout','./layouts/main')
app.set('view engine','ejs')

app.get('/*',router)

app.use('/', admin);
// app.get('/about',router)

app.listen(PORT,()=>console.log("App running on port ",PORT ))