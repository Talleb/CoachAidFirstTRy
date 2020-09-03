const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

//Static route
app.use('/', express.static('public'))
app.use('/assets', express.static('assets'))

//Routes import
const playersRoute = require('./routes/players');
const formationsRoute = require('./routes/formations');
const signupRoute = require('./routes/signup');

//Routes
app.use('/players', playersRoute);
app.use('/formations', formationsRoute);
app.use('/signup', signupRoute);


app.listen(3000, () => {
    console.log('servern igång på 3000')
})