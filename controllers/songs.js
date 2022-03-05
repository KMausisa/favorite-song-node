exports.getHome = (req, res, next) => {
  res.render("playlist/home", {
    pageTitle: "Home",
    path: "/",
  });
};

exports.getPlaylist = (req, res, next) => {
  res.render("playlist/playlist", {
    pageTitle: "Playlists",
    path: "/songs"
  })
}
