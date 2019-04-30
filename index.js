var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Seller = require('./app/models/seller');
var Inventory = require('./app/models/inventory')

//configure app for bodyParser 
// it lets us grab data fromt eh body of POST request
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 5000;

//Configure Mongoose and connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/catalogs');

// api routes and all prefixed with api first
var router = express.Router();
app.use('/api', router);


router.use(function(req, res, next) {
  console.log('Something is going down this weekend');
  next();
});


router.get('/', function(req, res){
  res.json({message: 'Welcome to the api world'});
});

router.route('/seller')

  .post(function(req, res) {
    var seller = new Seller(); // new instance of the seller
    seller.username = req.body.name;
    seller.shop.shopOwner = req.body.shop.owner;
    seller.shop.shopEmail = req.body.shop.email;
    seller.shop.shopPhone = req.body.shop.phone;
    seller.shop.shopName = req.body.shop.name;
    seller.location = req.body.location;


    seller.save(function(err) {
      if(err) {
        res.send(err);
      }
      res.json({message: 'You got it right brother'});

    });
  })

  .get(function(req, res) {
    seller.find(function(err, sellers) {
      if(err) {
        res.send(err);
      }
      res.json({sellers})
    });
  });

router.route('/seller/:seller_id')
  .get(function(req, res) {
    Seller.findById(req.params.seller_id, function(err, seller) {
      if(err) {
        res.send(err);
      }
      res.json(seller);
    });
  });


// app.listen(port, () => {
//     console.log('Connected to the server on port 5000');
// });

app.listen(port);