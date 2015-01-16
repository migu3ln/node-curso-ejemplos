/**
 * Chat_messages.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    tableName: 'chat_messages',
    attributes: {
        id: {
            type: 'integer',
            unique: true,
            primaryKey: true,
            columnName: 'id',
            autoIncrement: true
        },
        message: {
            type: 'text',
            columnName: 'message',
        },
        user_from: {
            type: 'integer',
            columnName: 'user_from',
            model:'Chat_users'
        },
        user_to: {
            type: 'integer',
            columnName: 'user_to',
            model:'Chat_users'
        }
    }
};

