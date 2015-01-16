/**
 * Chat_users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
var validator = require('validator');
module.exports = {
    tableName: 'chat_users',
    rules:{
        name:{
          require:{
              message:'no pude ser nulo'
          },
          isNumeric:{
              message:'solo numeros'
          }
        },
        passwd:{
            require:{
                message:'no pude ser nulo'
            },
            isNumeric:{
                message:'solo numeros'
            }
        }
    },
    validate:function(params){
        var errors = [];
        for(attr in this.rules){
            var rule_attribute = this.rules[attr];
            var error = false;
            for(rule_validate in rule_attribute){
                if(!error){
                    if(rule_validate === 'require'){
                        if(!params[attr]){
                            errors[attr] = rule_attribute[rule_validate].message;
                            error = true;
                        }

                    }
                    else if(rule_validate === 'isNumeric'){
                        if(!validator.isNumeric(params[attr])){
                            errors[attr] = rule_attribute[rule_validate].message;
                            error = true;
                        }
                    }
                }
                //console.log(rule_validate);
                //console.log(rule_attribute[rule_validate].message);
            }
            console.log(errors);

        }
        return false;
        if(this.rules.name){
            if(this.rules.name.require){
                if(!params.name){
                    errors.push({mame:this.rules.name.require.message})
                }
            }
        }
        return errors;
    },
    attributes: {
        id: {
            type: 'integer',
            unique: true,
            primaryKey: true,
            columnName: 'id',
            autoIncrement: true
        },
        name: {
            type: 'string',
            columnName: 'name',
            size: 45,
            required: true

        },
        passwd: {
            type: 'string',
            columnName: 'passwd',
            size: 45,
            required: true

        },
        active: {
            type: 'boolean',
            columnName: 'active',
            defaultsTo: 0

        },
        //relaciones
        userTo: {
            collection: 'Chat_messages',
            via: 'user_to'

        },
        userFrom: {
            collection: 'Chat_messages',
            via: 'user_from'
        }
    },
    attributesLabels:{
        id:'ID',
        name:'Usuario',
        passwd:'Contraseña',
        active:'Activo'
    },
    label:{
        simple:'Usuario',
        multi:'Usuarios'
    }

};

