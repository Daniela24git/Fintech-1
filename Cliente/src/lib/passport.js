const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const pool = require("../configuracionBaseDatos/baseDatos.sql");
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
      const rows = await pool.query("SELECT * FROM cliente WHERE username = ?", [username]);
      if (rows.length > 0) {
        const user = rows[0];
        const validPassword = await helpers.matchPassword(
          password,
          user.password
        );
        if (validPassword) {
          done(null, user, req.flash("success", "Bienvenido " + user.username));
        } else {
          done(null, false, req.flash("message", "Contraseña incorrecta"));
        }
      } else {
        return done(
          null,
          false,
          req.flash("message", "El usuario no extixte")
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
      const {Nombres } = req.body;
      let newcliente = {
        Nombres,
        username,
        password
      }
      newcliente.password = await helpers.encryptPassword(password);
      // Saving in the Database
      const result = await pool.query("INSERT INTO cliente SET ?", newcliente)
      newcliente.id = result.insertId;
      return done(null, newcliente);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const rows = await pool.query("SELECT * FROM cliente WHERE id = ?", [id]);
  done(null, rows[0]);
});
