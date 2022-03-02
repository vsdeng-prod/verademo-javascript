const usersService = require("../services/users.service");


exports.getUsers = (req, res, next) => {
  console.log('GET /users/getUsers')
  console.log('Request Data: '+JSON.stringify(req.body))
  usersService.getUsers((error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};


exports.userLogin = (req, res, next) => {
  console.log('POST /users/login')
  console.log('Request Data: '+JSON.stringify(req.body))
  if ( req.user != req.body.username){
    console.log('Requesting password for a different user, request forbidden')
    return res.status(403).send({ success: 0, data: "Forbidden" });
  }
  const data = {
    authHeader: req.headers.authorization,
    username: req.body.username,
    password: req.body.password,
  };
  usersService.userLogin(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};