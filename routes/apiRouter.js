'use strict';

module.exports = function(app) {
  var srdesigns = require('../controllers/apiController');

// srdesigns API Routes

  app.route('/api')
    .get(srdesigns.send_greeting);
  app.route('/')
    .get(srdesigns.send_greeting);

//API Routes for Accounts

  app.route('/api/accounts')
  .post(srdesigns.create_an_account)
  //TODO: do not include get method in production API
  .get(srdesigns.read_all_accounts);


  app.route('/api/accounts/:accountId')
    //TODO: do not include get method in production API
    .get(srdesigns.read_an_account)
    .put(srdesigns.update_an_account)
    .delete(srdesigns.delete_a_customer);

//API Routes for Customers
  app.route('/api/customers')
    .post(srdesigns.create_a_customer)
    .get(srdesigns.read_all_customers);

  app.route('/api/customers/:customerId')
    .get(srdesigns.read_a_customer)
    .put(srdesigns.update_a_customer)
    .delete(srdesigns.delete_a_customer);
};
