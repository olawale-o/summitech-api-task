const router = require('express').Router();
const controller = require('./controller');

/**
* @swagger
*   /stocks:
*     post:
*       summary: Create a new stock for a product
*       tags: [Stock]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/NewStockRequest'
*       responses:
*         200:
*           description: Product created successfully
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Stock'
*         500:
*           description: Internal server error
*/
router.post('/', controller.newStock);

/**
* @swagger
*   /stocks:
*     get:
*       summary: Get all products
*       tags: [Stock]
*       responses:
*         200:
*           description: Fetch all stocks successfully
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   $ref: '#/components/schemas/Stock'
*         500:
*           description: Internal server error
*/
router.get('/', controller.findAllStocks);

module.exports = router;
