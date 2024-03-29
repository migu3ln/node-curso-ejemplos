/**
* Hotel.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName: 'hotel',
  attributes: {
      id: {
          type: 'integer',
          unique: true,
          primaryKey: true,
          columnName: 'id',
          autoIncrement: true
      },
      nombre: {
          type: 'string',
          columnName: 'nombre',
          size: 250
      },
      direccion: {
          type: 'text',
          columnName: 'direccion'
      },
      ciudad: {
          type: 'string',
          columnName: 'ciudad',
          size: 45
      },
      website: {
          type: 'string',
          columnName: 'website',
          size: 45
      },
      hotel_ranking_id: {
          type: 'integer',
          columnName: 'website'
      }
      ,
      beforeCreate: function(values, next) {
          next();
      }
  }
};

