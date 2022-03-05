const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playlistSchema = new Schema({
  playlistName: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  playlist: {
    songs: [
      {
        SongId: {
          type: Schema.Types.ObjectId,
          ref: "Song",
          required: true,
        },
      },
    ],
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Playlist", playlistSchema);
