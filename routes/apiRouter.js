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
  .get(authControl.isValidAccount, crudControl.read_accounts);

  app.route('/api/accounts/:accountId')
    //TODO: do not include get method in production API
    .get(authControl.isValidAccount, crudControl.read_account)
    .put(authControl.isValidAccount, crudControl.update_account)
    .delete(authControl.isValidAccount, crudControl.delete_account);

//API Routes for Customers
  app.route('/api/customers')
    .post(authControl.isValidAccount, crudControl.create_customer)
    .get(authControl.isValidAccount, crudControl.read_customers);

  app.route('/api/customers/:customerId')
    .get(authControl.isValidAccount, crudControl.read_customer)
    .put(authControl.isValidAccount, crudControl.update_customer)
    .delete(authControl.isValidAccount, crudControl.delete_customer);
};
