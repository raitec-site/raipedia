const express = require("express");

const router = express.Router();


// PAINEL ADMIN
router.get("/admin", (req, res) => {

  // NÃO LOGADO
  if (!req.session.usuario) {
    return res.redirect("/login");
  }
  // LOGADO
  res.render("admin/index");

});


module.exports = router;