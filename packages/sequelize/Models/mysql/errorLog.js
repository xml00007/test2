/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('errorLog', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    message: {
      type: DataTypes.STRING(5000),
      allowNull: true,
      field: 'message'
    },
    createTime: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'createTime'
    }
  }, {
    tableName: 'errorLog'
  });
};
