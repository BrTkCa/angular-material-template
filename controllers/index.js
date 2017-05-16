module.exports = function(app){
    
    let Index = {
        index: function(req, res){
            res.render('index');
        }
    }
    return Index;
}