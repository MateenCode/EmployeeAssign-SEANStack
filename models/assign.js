'use strict';
module.exports = (sequelize, DataTypes) => {
  var assign = sequelize.define('assign', {
    taskName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return assign;
};