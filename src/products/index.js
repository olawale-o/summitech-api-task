const router = require('express').Router();
const controller = require('./controller');

router.post('/', controller.newProduct);
router.get('/:id', controller.findProduct);
router.get('/', controller.findAllProducts);

module.exports =  router;
