'use strict';

module.exports = function(app) {
  var crudControl = require('../controllers/crudControl');
  var authControl = require('../controllers/authControl');

// crudControl API Routes

  app.route('/api')
    .get(crudControl.send_greeting);

//API Routes for Accounts

  app.route('/api/accounts')
  .post(crudControl.create_account)
  //TODO: do not include get method in production API
  .get(authControl.isAuthenticated, crudControl.read_accounts);

  app.route('/api/accounts/:accountId')
    //TODO: do not include get method in production API
    .get(authControl.isAuthenticated, crudControl.read_account)
    .put(authControl.isAuthenticated, crudControl.update_account)
    .delete(authControl.isAuthenticated, crudControl.delete_account);

//API Routes for Customers
  app.route('/api/customers')
    .post(authControl.isAuthenticated, crudControl.create_customer)
    .get(authControl.isAuthenticated, crudControl.read_customers);

  app.route('/api/customers/:customerId')
    .get(authControl.isAuthenticated, crudControl.read_customer)
    .put(authControl.isAuthenticated, crudControl.update_customer)
    .delete(authControl.isAuthenticated, crudControl.delete_customer);
};
