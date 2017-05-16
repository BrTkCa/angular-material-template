module.exports = function(app){
  let index = app.controllers.index;

  app.get('/', index.index);

}