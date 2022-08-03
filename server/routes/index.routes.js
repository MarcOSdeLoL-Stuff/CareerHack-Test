const router = require("express").Router();
const phonesJson = require('../data/phones.json')

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get('/phones', (req, res, next) => {

  res.json(phonesJson)
  
})

// router.get('/phones/:id', (req, res, next) => {



  

//   // req.params

//   // function filterById(phonesJson, id) {
//   //   return phonesJson.filter(function (phonesJson) { return (phonesJson['id'] == id); })[0]; }

//   // res.json(phonesJson)

// })



module.exports = router;
