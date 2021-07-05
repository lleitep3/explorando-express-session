const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate (models) {
      // define association here
    }
  }

  Users.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {
      sequelize,
      paranoid: true,
      modelName: 'Users',
      tableName: 'users'
    }
  )
  return Users
}
