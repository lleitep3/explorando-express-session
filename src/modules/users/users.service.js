const { hash } = require('../../libs/cipher')
const { Users } = require('../../libs/database/models')

class UserService {
  static findAll () {
    return Users.findAll()
  }

  static findWhere (query) {
    return Users.findWhere(query)
  }

  static findByEmail (email) {
    return Users.findOne({ where: { email } })
  }

  static create (userToSave) {
    userToSave.password = hash(userToSave.password)

    return Users.create(userToSave)
  }

  static async update (userId, userData) {
    const user = await Users.findByPk(userId)

    Object.assign(user, userData)
    await user.save()

    return user
  }

  static remove (userId) {
    return Users.destroy({
      where: {
        id: userId
      }
    })
  }
}

module.exports = UserService
