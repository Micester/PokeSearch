require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const { PORT } = process.env;

const setsRoutes = require('./routes/setsRoutes');
const cardsRoutes = require('./routes/cardsRoutes');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/sets', setsRoutes);
app.use('/cards', cardsRoutes);

app.get('/', (req, res) => {
    res.json({
        welcome: 'Welcome to my PokemonSearc API',
        routes: [
            {
                method:'get',
                endpoint:'/sets',
            },
            {
                method:'get' ,
                endpoint:'/cards',
            }
        ]
    })
});

app.get('/*', (req, res) => {
  res.send(
    '<h1>These aren\'t the sets or cards you\'re looking for</h1>'
  );
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

