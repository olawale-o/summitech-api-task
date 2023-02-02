const router = require('express').Router();
const controller = require('./controller');

/**
* @swagger
*   /users:
*     post:
*       summary: Create a new user
*       tags: [User]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/UserSignUpRequest'
*       responses:
*         200:
*           description: Task created successfully
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/User'
*         500:
*           description: Internal server error
*/
router.post('/', controller.new);

/**
* @swagger
*   /users/login:
*     post:
*       summary: Login a user
*       tags: [User]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/UserLoginRequest'
*       responses:
*         200:
*           description: Task created successfully
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/User'
*         500:
*           description: Internal server error
*/
router.post('/login', controller.login);

module.exports = router;
