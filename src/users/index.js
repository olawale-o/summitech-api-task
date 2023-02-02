const router = require('express').Router();
const {
  userSignUpRequestSchema,
  userLoginRequestSchema,
} = require('./validation/user-schema');

const {
   validateUserSignUp,
   validateUserLogin,
} = require('./validation/validate-user');
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
*         409:
*           description: User already exists
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   message:
*                     type: string
*                     example: Please login with your email and password
*         422:
*           description: Invalid request
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   message:
*                     type: string
*                     example: Invalid credentials
*                   errors:
*                     type: string
*                     example: Invalid email
*         500:
*           description: Internal server error
*/
router.post('/', validateUserSignUp(userSignUpRequestSchema),  controller.new);

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
router.post('/login', validateUserLogin(userLoginRequestSchema), controller.login);

module.exports = router;
