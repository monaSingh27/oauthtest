   module.exports =function(router,passport)
  {


//    	 router.get('/google/info',function(req, res) {

//       var token = getOAuthAccessToken(req.headers);
//       // console.log(htoken);

//   if (token) {

// User.find({token: token},function(err, contacts) {

//       if (err)
//         res.send(err);

//       res.json(users);
//     });

//   }});
//    }


router.get('/google/usersdata', 
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
 
 var token = getOAuthAccessToken(req.headers);

  if (token) {

  User.find({token: token},function(err, contacts) {

      if (err)
        res.send(err);

      res.json(users);
    });

  }});

  }
