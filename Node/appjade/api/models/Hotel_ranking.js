/**
* Hotel_ranking.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName: 'hotel_ranking',
  attributes: {
      id:{
          type: 'integer',
          unique: true,
          primaryKey: true,
          columnName: 'id',
          autoIncrement: true
      },
      nombre: {
          type: 'string',
          columnName: 'nombre',
          size: 45
      },
      peso:{
          type: 'integer',
          columnName: 'peso'
      }

  }
};

