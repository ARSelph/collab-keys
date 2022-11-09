const path = require('path');
const express = require('express');

const apiRouter = require('./routes/api');

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// statically serve everything in the build folder on the route '/build'
app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.use('/api', apiRouter);

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
})

app.use((req, res) => res.status(404).send('404 keys not found'));


app.listen(3000);

