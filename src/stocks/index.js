const router = require('express').Router();
    
const { newStockRequestSchema } = require('./validation/stock-schema');
const {
  validateNewStockRequest
} = require('./validation/validate-stock');
  
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
*         404:
*           description: Unauthorized
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   message:
*                     type: string
*                     example: Plesase ensure product exist before adding to stock
*         409:
*           description: Stock already exists
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   message:
*                     type: string
*                     example: Stock already created for this product or you update the stock
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
router.post('/', validateNewStockRequest(newStockRequestSchema), controller.newStock);

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
