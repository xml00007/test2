'use strict';

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'name'
    },
    mobile: {
      type: DataTypes.STRING(11),
      allowNull: true,
      field: 'mobile'
    },
    adress: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'adress'
    },
    sex: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'sex'
    }
  }, {
    tableName: 'user'
  });
};
//# sourceMappingURL=user.js.map