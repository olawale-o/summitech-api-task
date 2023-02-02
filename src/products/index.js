const router = require('express').Router();
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
*         500:
*           description: Internal server error
*/
router.post('/', controller.newProduct);

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
