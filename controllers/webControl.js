'use strict'


exports.get_index = function(req, res){
  res.render('index_v2.pug');
};


exports.get_app = function(req, res){
  res.render('app.pug');
};
