const req = require('express/lib/request')
const res = require('express/lib/response')

const router = require('express').Router()

router.route('/').get((req,res) => {
    msg = `hello ${req.query.name || "world"} from get request ! `  //^ http://localhost:3000/hola?name=marlon  asi se le pasa el query params
    res.json(msg)
})

router.route('/:lang').get((req,res) => {

  switch(req.params.lang){

      case "es":  
          msg = "hola mundo!";    //^ http://localhost:3000/hola/es
          break;
      case "en":
          msg = "hello world!";   //^ http://localhost:3000/hola/en
          break;
      case "fr":
          msg = "bonjour monde!"; //^ http://localhost:3000/hola/fr
          break;
      default:
          msg = "hello welt"
  }
  res.json(msg)
})

router.route('/').post((req,res) => {
    msg = `hello ${req.body.name || "world"} from POST request ! ` //^ { "name" : " marlon yoel "}   desde el body de postman
    res.json({msg})
})

//&     S U M A
router.route('/').post((req,res) => {

    let result = req.body.a + req.body.b //^ { "a" : 10 ,  "b": 5}   desde el body de postman
    res.json(result)
})

module.exports = router;