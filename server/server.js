const path = require('path');
const express = require('express');

const app = express();

const leaderList = [
  {name: 'Anna', id: 'a0'},
  {name: 'Ben', id: 'b0'},
  {name: 'Clara', id: 'c0'},
  {name: 'David', id: 'd0'},
];

app.get('/api/leaders', (req, res) => {
  return res.status(200).send(leaderList);
});

// statically serve everything in the build folder on the route '/build'
app.use('/dist', express.static(path.join(__dirname, '../dist')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  console.log('trying to get site');
  return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
});


app.listen(3000);
