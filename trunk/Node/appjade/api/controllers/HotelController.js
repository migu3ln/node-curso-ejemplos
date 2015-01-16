/**
 * HotelController
 *
 * @description :: Server-side logic for managing hotels
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    hola: function (req, res) {
        return res.json({
            todo: 'Not implemented yet!'
        });
    },
    homepage: function (req, res) {
        return res.view();
    }
};

