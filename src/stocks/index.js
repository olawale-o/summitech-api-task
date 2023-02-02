const router = require('express').Router();
const controller = require('./controller');

router.post('/', controller.newStock);
router.get('/', controller.findAllStocks);

module.exports = router;
