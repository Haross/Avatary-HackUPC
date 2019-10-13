const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/character/:id', (req, res) => res.render('pages/index'))
  .get('/', (req, res) => res.render('pages/survey'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
