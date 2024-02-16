const User = require('../models/userModel.cjs');
const Review = require('../models/reviewModel.cjs');
const userController = {};

userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  User.findOne({ username }).then(function (user) {
    console.log('SIGNUP GONNA GET HIT2222')
    console.log(user)
    if (!user) {
      console.log('USER NOT FOUND IN SIGN IN')
      return res.redirect('/signup');
    }
    console.log('MIDWAY')
    user.comparePassword(password, function (error, isMatch) {
      if (error) {
        console.log('MIDWAY ERROR')
        return next(error);
      }
      if (isMatch) {
        console.log('MIDWAY MATCH')
        res.locals.user_id = user.id;
        return next();
      } else {
        return res.redirect('/signup');
      }
    });
  });
};

userController.signUp = (req, res, next) => {
  //destructuring is important for safety here
  const { username, password } = req.body
  if (!username || !password) {
    return next({
      log: 'Express error handler caught error in userController.createUser middleware function',
      status: 400,
      message: { Error: 'Your POST request was unsuccessful' },
    });
  } else {
    const newUser = new User({ username: username, password: password });
    newUser.save().then(
      (savedDocument) => {
        console.log(savedDocument);
        res.locals.user_id = savedDocument.id;
        return next();
      }
    ).catch((err) => {
      return next(err);
    }
    );
  }
}

// venue: '', artist: '', review: '', image: ''

userController.addReview = (req, res, next) => {
  const {venue, artist, review } = req.body;
  const newReview = new Review({venue: venue, artist: artist, review: review});
  newReview.save().then((savedDocument) => {
    console.log(savedDocument);
    res.locals.venue = savedDocument.venue;
    res.locals.artist = savedDocument.artist;
    res.locals.review = savedDocument.review;
    res.locals.id = savedDocument.id;
    return next();
  }).catch((err) => {
    return next(err);
  }
  );

}
module.exports = userController