const mongoose = require("mongoose");

const { validationResult } = require("express-validator/check");

const Song = require("../models/song");

exports.getAddSong = (req, res, next) => {
  res.render("admin/add-song", {
    pageTitle: "Add Song",
    path: "admin/add-song",
    hasError: false,
    errorMessage: null,
    validationErrors: [],
  });
};

exports.getMyPlaylist = (req, res, next) => {
  res.render("admin/my-playlist", {
    pageTitle: "My Playlist",
    path: "admin/my-playlist",
  });
};

exports.postAddSong = (req, res, next) => {
  const songName = req.body.songName;
  const artistName = req.body.artistName;
  const imageUrl = req.body.imageUrl;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(422).render("admin/add-song", {
      pageTitle: "Add Song",
      path: "admin/add-song",
      hasError: true,
      song: {
        songName: songName,
        artistName: artistName,
        imageUrl: imageUrl,
      },
      errorMessage: errors.array()[0].msg,
      validationErrors: errors.array(),
    });
  }

  const song = new Song({
    songName: songName,
    artistName: artistName,
    imageUrl: imageUrl,
  });
  song
    .save()
    .then((result) => {
      console.log("Added Song");
      res.redirect("/songs");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getCreatePlaylist = (req, res, next) => {
  res.render("admin/create-playlist", {
    pageTitle: "Create Playlist",
    path: "admin/create-playlist",
    hasError: false,
    errorMessage: null,
    validationErrors: [],
  });
};

exports.postCreatePlaylist = (req, res, next) => {
    const playlistName = req.body.songName;
    const imageUrl = req.body.imageUrl;
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      console.log(errors.array());
      return res.status(422).render("admin/create-playlist", {
        pageTitle: "Create Playlist",
        path: "admin/create-playlist",
        hasError: true,
        song: {
          songName: songName,
          artistName: artistName,
          imageUrl: imageUrl,
        },
        errorMessage: errors.array()[0].msg,
        validationErrors: errors.array(),
      });
    }
  
    const song = new Song({
      songName: songName,
      artistName: artistName,
      imageUrl: imageUrl,
    });
    song
      .save()
      .then((result) => {
        console.log("Added Song");
        res.redirect("/songs");
      })
      .catch((err) => {
        console.log(err);
      });
  };
