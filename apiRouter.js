// Imports

var express      = require('express');
var usersController    = require('./routes/usersController');

// Router

exports.router = (function() {

    var apiRouter = express.Router();

  // Users routes

  apiRouter.route('/users/register/').post(usersController.register);
  apiRouter.route('/users/login/:email/').get(usersController.login);
  apiRouter.route('/users/search/:id/').get(usersController.search);
  //apiRouter.route('/users/me/').get(usersController.getUserProfile);
  //apiRouter.route('/users/me/').put(usersController.updateUserProfile);

  return apiRouter;
})();
