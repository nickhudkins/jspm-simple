const express = require('express');
const app = express();

app.use(express.static('.'));

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
      <script src="jspm_packages/system.js"></script>
      <script src="jspm.config.js"></script>
      <script>
        System.import('/index.js')
      </script>
    </head>
    <body>
      <h1>Hello World</h1>
      <div id="root"></div>
    </body>
  </html>`);
})

const { PORT = 8081 } = process.env;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
