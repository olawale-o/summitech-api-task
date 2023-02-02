const router = require('express').Router();

const {
  newProductRequestSchema,
} = require('./validation/product-schema');
  
const {
  validateNewProductRequest
} = require('./validation/validate-product');

const controller = require('./controller');

/**
* @swagger
*   /products:
*     post:
*       summary: Create a new product
*       tags: [Product]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/NewProductRequest'
*       responses:
*         200:
*           description: Product created successfully
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Product'
*         401:
*           description: Unauthorized
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   message:
*                     type: string
*                     example: Please create an account to have a product in stock
*         409:
*           description: Product already exists
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   message:
*                     type: string
*                     example: Product already created by this user
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
*                     example: Invalid field name
*         500:
*           description: Internal server error
*/
router.post('/', validateNewProductRequest(newProductRequestSchema), controller.newProduct);

/**
* @swagger
*   /products/{id}:
*     get:
*       summary: Get a product
*       tags: [Product]
*       parameters:
*         - in: path
*           name: id
*           schema:
*             type: integer
*           required: true
*           description: The product id
*       responses:
*         200:
*           description: Fetch a product successfully
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Product'
*         500:
*           description: Internal server error
*/
router.get('/:id', controller.findProduct);

/**
* @swagger
*   /products:
*     get:
*       summary: Get all products
*       tags: [Product]
*       responses:
*         200:
*           description: Fetch all products successfully
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   $ref: '#/components/schemas/Product'
*         500:
*           description: Internal server error
*/
router.get('/', controller.findAllProducts);

module.exports =  router;
