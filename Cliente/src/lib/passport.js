const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const orm = require('../configuracionBaseDatos/baseDatos.orm')
const helpers = require("./helpers");

passport.use(
  "local.signin",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true
    },
    async (req, username, password, done) => {
      const rows = await await orm.cliente.findOne({ where: { username: username } });
      if (rows) {
        const user = rows
        const validPassword = await helpers.matchPassword(
          password,
          user.password
        );
        if (validPassword) {
          done(null, user, req.flash("success", "Bienvenido " + "" + user.username));
        } else {
          done(null, false, req.flash("message", "Contraseña incorrecta"));
        }
      } else {
        return done(
          null,
          false,
          req.flash("message", "El usuario no existe")
        );
      }
    }
  )
);

passport.use(
  "local.signup",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true
    },
    async (req, username, password, done) => {
      const { Nombres } = req.body;
      let newcliente = {
        Nombres,
        username,
        password
      }
      newcliente.password = await helpers.encryptPassword(password);
      // Saving in the Database
      const result = await orm.cliente.create(newcliente);
      newcliente.id = result.insertId;
      return done(null, newcliente);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});