// Imports

var bcrypt = require('bcrypt');
var jwtUtils = require('../utils/jwt.utils');
var server = require('../server').connection;
var jwtUtils = require('../utils/jwt.utils');
var connection = require('../db').db;
const EMAIL_REGEX = /^[a-zA-Z-]{0,9}\.+@[a-zA-Z-]+\.[a-zA-Z]{2,6}$/;
const PASSWORD_REGEX = /^(?=.\d).{4,12}$/;

// Routes

module.exports = {

  register: function (req, res) {
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body.firstname);
    console.log(req.body.lastname);
    console.log(req.body.campus);

    if (req.body.email && req.body.password && req.body.firstname && req.body.lastname && req.body.campus && !EMAIL_REGEX.test(req.body.email) && !PASSWORD_REGEX.test(req.body.password)) {
      connection.query("INSERT INTO users (lastname, firstname, campus, email, password, role) VALUES (?, ?, ?, ?, ?, ?)", [req.body.lastname, req.body.firstname, req.body.campus, req.body.email, req.body.password, 'USER'], function (error, result, field) {
        if (error) {
          console.log('Erreur lors de l\'insertions');
          return res.status(400).send(error);
        } else {
          console.log('Requête acceptée');
          return res.status(200).send("Inscription réussie !");
        }
      });
    }
    else{
      console.log("paramètres manquants ou contraintes mot de passe/email non respectés");
      return res.status(203).send("missing parameters");
    }

  },
  login: function (req, res) {

    connection.query('SELECT * FROM ?? WHERE ?? = ?', ['users', 'email', req.params['email']], function (error, rows, field) {

      let result = JSON.parse(JSON.stringify(rows))[0];

      if (error || result == null){
	console.log("Echec");
        return res.status(404).send("Utilisateur introuvable");
      }else{
	console.log("Renvoie de : ", result.email);
        return res.status(200).json({
          id: result.iduser,
          firstname: result.firstname,
          lastname: result.lastname,
          campus: result.campus,
          email: result.email,
          password: result.password,
          role: result.role
        });
      }
    });
  },
  search: function (req, res) {

    connection.query('SELECT * FROM ?? WHERE ?? = ?', ['users', 'iduser', req.params['id']], function (error, rows, field) {

      let result = JSON.parse(JSON.stringify(rows))[0];

      if (error || result == null){
        return res.status(404).send("Utilisateur introuvable");
      }else{
        return res.status(200).json({
          firstname: result.firstname,
          lastname: result.lastname,
          campus: result.campus
        });
      }
    });
  }
}
