'use strict';

module.exports = (mongoose, models)=>{
  let Schema = mongoose.Schema;
  let UsersSchema = new Schema({
    name: String,
    authentication: {
      email:{
        type: String,
        required: true;
      },
      password: {
        type: String,
        required: true;
    }
  },
    startLocation: {
      type: String,
      required: true;
    },
    endLocation: {
      type: String,
      required: true;
    },
    locationRadius: {
      type: String,
      required: true;
    },
    userDetails: String,
    userReviews: [{
      type: Schema.Types.ObjectId,
      ref: 'Review'
    }
  ]

    highScore: Number,
    players: Number
    updated: {type: Date, default: Date.now},

  });

  let Users = mongoose.model('User', UsersSchema);
  models.User = User;
};
