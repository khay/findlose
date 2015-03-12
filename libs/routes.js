module.exports = function(app){
    app.get('/user', userController.getUser);
};