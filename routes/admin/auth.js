const express = require("express");

const router = express.Router();

const auth = require("../../services/firebase");

const {
  signInWithEmailAndPassword
} = require("firebase/auth");


// TELA LOGIN
router.get("/login", (req, res) => {

  // Se já estiver logado
  // vai direto para admin
  if (req.session.usuario) {
    return res.redirect("/admin");
  }

  res.render("auth/login");

});



// LOGIN
router.post("/login", async (req, res) => {

  try {

    const { email, senha } = req.body;

    // Login Firebase
    const userCredential =
      await signInWithEmailAndPassword(
        auth,
        email,
        senha
      );

    // SALVAR SESSÃO
    req.session.usuario = {
      email: userCredential.user.email
    };

    // Redireciona admin
    res.redirect("/admin");

  } catch (erro) {

    console.error(erro);

    res.send("Email ou senha inválidos");
  }

});


// LOGOUT
router.get("/logout", (req, res) => {

  req.session.destroy(() => {
    res.redirect("/login");
  });

});


module.exports = router;