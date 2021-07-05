const { hash, verify } = require('../../libs/cipher')
const UserService = require('../users/users.service')

class AuthService {
  static async authenticate (email, password) {
    try {
      const user = await UserService.findByEmail(email)

      if (!user || verify(password, user.password)) {
        return user
      }

      return false
    } catch (err) {
      console.log(err)
      return false
    }
  }
}

module.exports = AuthService
