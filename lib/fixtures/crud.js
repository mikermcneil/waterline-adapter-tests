/**
 * Dependencies
 */

var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({

  identity: 'user',
  adapter: 'test',

  attributes: {
    first_name: 'string',
    last_name: 'string',
    email: 'string',
    title: 'string',
    phone: 'string',
    type: 'string',
    favoriteFruit: {
      defaultsTo: 'blueberry',
      type: 'string'
    },
    age: 'integer', // integer field that's not auto-incrementable
    dob: 'datetime',
    status: {
      type: 'boolean',
      defaultsTo: false
    },
    percent: 'float',
    list: 'array',
    fullName: function() {
      return this.first_name + ' ' + this.last_name;
    }
  }

});
