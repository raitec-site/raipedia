function verificarLogin(req, res, next) {
    if (req.session.usuario) {
        return next();
    }

    res.redirect("/login");
}

module.exports = verificarLogin;