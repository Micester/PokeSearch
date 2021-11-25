require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const { PORT } = process.env;
// const cardRoutes = require('./routes/card-Data');

app.use(cors());
app.use(express.json());

// app.use('/', homeRoutes);
// app.use('/card', cardRoutes);
// app.use('/about', aboutRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
