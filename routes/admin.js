const path = require("path");

const express = require("express");
const { body } = require("express-validator/check");

const adminController = require("../controllers/admin");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.get("/add-song", isAuth, adminController.getAddSong);

router.get("/my-playlist", isAuth, adminController.getMyPlaylist);

module.exports = router;
