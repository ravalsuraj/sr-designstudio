'use strict';
var mongoose = require('mongoose');
var Account = mongoose.model('Accounts');
var Customer = mongoose.model('Customers');


exports.send_greeting = function(req, res){
  res.send({message:"Welcome to the Sonal Raval Design Studio API"});
};

exports.read_all_customers = function(req, res){
  Customer.find({},function(err,customer){
    if(err){
      res.send(err);
    }
    res.json(customer);
  });
};

exports.create_a_customer = function(req, res){
  var new_customer = new customer(req.body);
  new_customer.save(function(err,customer){
    if(err){
      res.send(err);
    }
    res.json(Customer);
  });

};

exports.read_a_customer = function(req, res){
  Customer.findById(req.params.customerId,function(err,customer){
    if(err){
      res.send(err);
    }
    res.json(Customer);

  });
};

exports.update_a_customer = function(req, res) {
  Customer.findOneAndUpdate({_id: req.params.customerId}, req.body, {new: true}, function(err, customer) {
    if (err)
      res.send(err);
    res.json(Customer);
  });
};
exports.delete_a_customer = function(req, res) {
  Customer.remove({_id: req.params.customerId}, function(err, customer) {
    if (err)
      res.send(err);
    res.json({ message: 'customer successfully deleted' });
  });
};

/*********************************************
**********************************************/
exports.read_all_accounts = function(req, res){
  Account.find({},function(err,account){
    if(err){
      res.send(err);
    }
    res.json(account);
  });
};

exports.create_an_account = function(req, res){
  var new_account = new Account(req.body);
  new_account.save(function(err,account){
    if(err){
      res.send(err);
    }
    res.json(account);
  });

};

exports.read_an_account = function(req, res){
  Account.findById(req.params.accountId,function(err,account){
    if(err){
      res.send(err);
    }
    res.json(account);

  });
};

exports.update_an_account = function(req, res) {
  Account.findOneAndUpdate({_id: req.params.accountId}, req.body, {new: true}, function(err, account) {
    if (err)
      res.send(err);
    res.json(account);
  });
};
exports.delete_an_account = function(req, res) {
  Account.remove({_id: req.params.accountId}, function(err, account) {
    if (err)
      res.send(err);
    res.json({ message: 'account successfully deleted' });
  });
};
