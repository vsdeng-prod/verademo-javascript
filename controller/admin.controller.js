const adminService = require("../services/admin.service");

exports.runCommand = (req, res, next) => {
  console.log('POST /admin/runCommand')
  console.log('Request Data: '+JSON.stringify(req.body))
  console.log('User: '+req.user)
  //check user
  if ( req.user != 'admin'){
    console.log('Not admin user, request forbidden')
    return res.status(403).send({ success: 0, data: "Forbidden" });
  }

  //check required parameters
  if ( typeof req.body.command == 'undefined' ){
    return res.status(400).send({
      success: 1,
      data: "One or more required parameters missing",
    });
  }

  const data = {
    command: req.body.command,
  };
  adminService.runCommand(data, (error, results) => {
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

exports.getFile = (req, res, next) => {
  console.log('POST /admin/getFile')
  console.log('Request Data: '+JSON.stringify(req.body))
  console.log('User: '+req.user)
  //check user
  if ( req.user != 'admin'){
    console.log('Not admin user, request forbidden')
    return res.status(403).send({ success: 0, data: "Forbidden" });
  }

  //check required parameters
  if ( typeof req.body.fileName == 'undefined' ){
    return res.status(400).send({
      success: 1,
      data: "One or more required parameters missing",
    });
  }

  const data = {
    fileName: req.body.fileName,
  };
  adminService.getFile(data, (error, results) => {
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

