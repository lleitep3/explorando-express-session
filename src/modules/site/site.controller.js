const AuthService = require('../auth/auth.service')
const UserService = require('../users/users.service')

class SiteController {
  static registerPage (req, res) {
    res.json({
      success: 'true'
    })
  }

  static homePage (req, res) {
    res.render('index', { title: 'APP Usuários' })
  }

  static async profilePage (req, res) {
    const userEmail = req.session.user.email
    const user = await UserService.findByEmail(userEmail)

    res.render('profile', { title: 'APP profile', user })
  }

  static loginPage (req, res) {
    res.render('login', {
      title: 'APP Entrar'
    })
  }

  static redisterPage (req, res) {
    res.render('register', {
      title: 'APP Cadastro'
    })
  }

  static async doRegister (req, res) {
    try {
      const newUser = {
        name: req.body.name,
        email: req.body.email,
        phone: '-',
        password: req.body.password
      }

      const user = await UserService.create(newUser)

      req.startSession(user)

      res.redirect('/')
    } catch (err) {
      console.log(err)

      res.render('register', {
        title: 'APP Cadastro',
        error: err.message
      })
    }
  }

  static async doLogin (req, res) {
    const { email, password } = req.body

    try {
      const user = await AuthService.authenticate(email, password)

      if (!user) {
        return res.render('login', {
          title: 'APP Entrar',
          error: 'Usuário ou senha inválidos'
        })
      }

      req.startSession(user)

      res.redirect('/')
    } catch (err) {
      console.log(err)

      res.render('login', {
        title: 'APP Entrar',
        error: 'Erro inesperado'
      })
    }
  }

  static doLogout (req, res) {
    req.session.destroy()
    res.redirect('/')
  }
}

module.exports = SiteController
