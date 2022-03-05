const Song = require("../models/song");

exports.getHome = (req, res, next) => {
  res.render("playlist/home", {
    pageTitle: "Home",
    path: "/",
  });
};

exports.getPlaylist = (req, res, next) => {
  Song.find()
    .then((songs) => {
      console.log(songs);
      res.render("playlist/playlist", {
        playlist: songs,
        pageTitle: "Playlists",
        path: "/songs",
      })
    })
    .catch((err) => {
      console.log(err);
    });
};
