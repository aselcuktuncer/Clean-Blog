const express = require('express');

const app = express();

const photo = {
  id: 11,
  url: 'http://foo.com',
  desc: 'Such a lovely photo!',
};

app.get('/', (req, res) => {
  res.send(photo);
});

const port = 3000;

app.listen(port, () => {
  console.log(`App is running on port number ${port}`);
});
