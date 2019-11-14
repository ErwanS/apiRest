// Imports

var bcrypt  = require('bcrypt');
var jwtUtils = require('../utils/jwt.utils');
var server = require('../server').connection;
var bcrypt = require('bcrypt');
var jwtUtils = require ('../utils/jwt.utils');
var connection = require('../db').db;
const EMAIL_REGEX     = /^[a-zA-Z-]+@[a-zA-Z-]+\.[a-zA-Z]{2,6}$/;
const PASSWORD_REGEX  = /^(?=.\d).{4,12}$/;

// Routes

module.exports = {

  register: function(req, res) {

    //Params
    var email = req.body.email;
    var username = req.body.username;
    var userpassword = req.body.userpassword;

    if (email == null || username == null || userpassword == null){
      console.log(email);
      console.log(username);
      console.log(userpassword);
    return res.status(400).json({'error': 'missing parameters'});
    }

    bcrypt.hash(req.body.userpassword, 7, function(err, bcryptedUserPassword) {
      connection.query(("INSERT INTO users (lastname, firstname, campus, email, username, userpassword, privilege) VALUES ('" + req.body.lastname + "', '" + req.body.firstname + "', '" + req.body.campus + "', '" + req.body.email + "', '" + req.body.username + "', '" + bcryptedUserPassword +  "', '" + req.body.privilege + "')"), function(error, rows, field) {
        if (!!error) {
            console.log('Requête non valide');
            return res.status(500).json("Inscription impossible");
        } else if (!EMAIL_REGEX.test(email)){
            return res.status(400).json({ 'error': 'l\'email n\'est pas valide'});
        }
          else {
            console.log('Requête acceptée');
            return res.status(201).json("Inscription réussie !");
            }
        })
    })
  },


  login: function(req, res) {

      connection.query("SELECT iduser, userpassword FROM users WHERE email = '" + req.body.email + "'", function(error, rows, field) {
        iduser = rows[0].iduser;
        if (!!error) {
            console.log('Requête non valide');
        } else if (rows.length == 0) {
            res.json({message: "Utilsateur introuvable"});
        } else {
            bcrypt.compare(req.body.userpassword, rows[0].userpassword, function(errBycrypt, resBycrypt) {
                if (resBycrypt) {
                    return res.status(200).json({
                        message: "Connexion réussie !",
                    })
                } else {
                    return res.status(403).json({ "error": "invalid password"});
                }
          })
        }
      })
    },
}
