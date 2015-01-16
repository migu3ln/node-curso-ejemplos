/**
 * Chat_usersController
 *
 * @description :: Server-side logic for managing chat_users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    hola: function(req, res) {
        return res.json({
            todo: 'Not implemented yet!'
        });
    },
    create: function(req, res) {
        if(req.method=='POST'&&req.param('chat_users',null)!=null){
            var params = req.param('chat_users');
            var errors = Chat_users.validate(params);
            console.log(errors);
            /*Chat_users.create(params).exec(function (err, Chat_users) {
                if (err) return console.log(err);
                return res.json(Chat_users);
                });*/
            return false;
          /* Chat_users.create(params, function userCreate(err, chat_users) {

                if(err){
                    req.session.flash={
                        err:err
                    }
                    console.log(err);
                 return res.redirect('/chat_users/create');
                }
                return res.view('chat_users/create',{model: Chat_users});
            });*/
        }
     res.view('chat_users/create',{model: Chat_users});
     req.session.flash={};
    }

};

