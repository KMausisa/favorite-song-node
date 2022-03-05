const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const songSchema = new Schema({
  songName: {
    type: String,
    required: true,
  },
  artistName: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Song", songSchema);
