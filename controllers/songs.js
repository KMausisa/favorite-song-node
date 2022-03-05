exports.getHome = (req, res, next) => {
  res.render("playlist/home", {
    pageTitle: "Home",
    path: "/",
  });
};
