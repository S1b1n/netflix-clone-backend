const  mongoose = require("mongoose")



const watchlistSchema = new mongoose.Schema({

    movies: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie',
      required: true
    }],
  
  });

  const Watchlist = mongoose.model('Watchlist', watchlistSchema);
  module.exports=Watchlist
