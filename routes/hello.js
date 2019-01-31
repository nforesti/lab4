
/*
 * GET home page.
 */

exports.view = function(req, res){
  var name = req.params.userName;
  if (name === undefined){
    name = 'World';
  }
  console.log("Your name is: " + name);
  res.render('hello', {
  	'name': name
  });
};

