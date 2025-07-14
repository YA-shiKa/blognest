module.exports = {
  ensureAuthenticated: (req, res, next) => {
    console.log("🚀 AUTH CHECK:", req.isAuthenticated());
    if (req.isAuthenticated()) {
      return next();
    }
    console.log("❌ Not authenticated, redirecting to /auth/login");
    res.redirect("/auth/login");
  },
};
