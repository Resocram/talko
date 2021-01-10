const Router = require('express-promise-router');
const getCartController = require('./controllers/getCartController');
const addCartController = require('./controllers/addCartController');
const getItemsController = require('./controllers/getItemsController');
const addItemController = require('./controllers/addItemController');

const router = Router();

router.get('/cart/get', getCartController);
router.post('/cart/add', addCartController);
router.get('/item/get', getItemsController);
router.post('/item/add', addItemController);

module.exports = router;

