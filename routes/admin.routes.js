const adminController = require("../controller/admin.controller");
const checkUser = require("../tools/checkUserToken.js")

var express = require("express");

var router = express.Router();

router.post("/runCommand", checkUser, adminController.runCommand);

/**
 * @swagger
 * /admin/runCommand:
 *   post:
 *      description: Used to run a command
 *      tags:
 *          - admin
 *      parameters:
 *          - in: body
 *            name: Command
 *            description: Command
 *            schema:
 *              type: object
 *              required:
 *                 - command
 *              properties:
 *                  command:
 *                      type: string
 *                      example: ls -la
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.post("/getFile", checkUser, adminController.getFile);
/**
 * @swagger
 * /admin/getFile:
 *   post:
 *      description: Get file content
 *      tags:
 *          - admin
 *      parameters:
 *          - in: body
 *            name: Get file
 *            description: flename
 *            schema:
 *              type: object
 *              required:
 *                 - filename
 *              properties:
 *                  filename:
 *                      type: string
 *                      example: ../index.js
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


module.exports = router;