const mongoose = require("mongoose");

const { validationResult } = require("express-validator/check");

exports.getAddSong = (req, res, next) => {
  res.render("admin/add-song", {
    pageTitle: "Add Song",
    path: "admin/add-song",
  });
};

exports.getMyPlaylist = (req, res, next) => {
  res.render("admin/my-playlist", {
    pageTitle: "My Playlist",
    path: "admin/my-playlist",
  });
};
