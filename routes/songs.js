const path = require("path");

const express = require("express");

const songsController = require("../controllers/songs");

const router = express.Router();

router.get("/", songsController.getHome);

router.get("/songs", songsController.getPlaylist)

module.exports = router;
