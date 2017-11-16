'use strict';
module.exports = (sequelize, DataTypes) => {
  var employee = sequelize.define('employee', {
    name: DataTypes.STRING,
    totalTask: DataTypes.INTEGER
  }, {} )

  employee.associate = function(models) {
        employee.hasMany(models.assign, {foreignKey: 'employeeId'});
    }

  return employee;
};
