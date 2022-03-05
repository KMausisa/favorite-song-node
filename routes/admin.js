const path = require("path");

const express = require("express");
const { body } = require("express-validator/check");

const adminController = require("../controllers/admin");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.get("/add-song", isAuth, adminController.getAddSong);

router.get("/my-playlist", isAuth, adminController.getMyPlaylist);

router.post(
  "/add-song",
  [
    body("songName").isString().isLength({ min: 3 }).trim(),
    body("artistName").isString().isLength({ min: 3 }).trim(),
    body("imageUrl").isURL(),
  ],
  isAuth,
  adminController.postAddSong
);

router.get("/create-playlist", isAuth, adminController.getCreatePlaylist);

router.post(
  "/create-playlist",
  [
    body("playlistName").isString().isLength({ min: 3 }).trim(),
    body("imageUrl").isURL(),
  ],
  isAuth,
  adminController.postCreatePlaylist
);

module.exports = router;
