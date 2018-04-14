'use strict';

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('moFengWo', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'title'
    },
    url: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'url'
    },
    startDate: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'startDate'
    },
    outDays: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'outDays'
    },
    renWu: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'renWu'
    },
    cost: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'cost'
    },
    createTime: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'createTime'
    }
  }, {
    tableName: 'moFengWo'
  });
};
//# sourceMappingURL=moFengWo.js.map