var express = require('express');
var router = express.Router();


const url = process.env.CAT_FACT_API
console.log('url',url);

router.get('/', async (req, res) => {
  try {
    const userData = await fetch(url)
      .then(res => res.json());
    res.render('cat/fact', { userData }); 
    console.log(userData);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching data.');
  }
});


module.exports = router;
