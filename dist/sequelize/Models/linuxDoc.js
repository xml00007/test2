'use strict';

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('linuxDoc', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'title'
    },
    path: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'path'
    },
    year: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'year'
    },
    month: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'month'
    },
    day: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'day'
    },
    createTime: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'createTime'
    }
  }, {
    tableName: 'linuxDoc'
  });
};
//# sourceMappingURL=linuxDoc.js.map