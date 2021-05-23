const express = require('express');

const controller = require('../controllers/LegendariesController');
const validator = require('../middlewares/LegendariesValidator');

const router = express.Router();

/* GET legendaries. */
router.get('/', controller.index);
router.post('/', validator, controller.create);
router.get('/listlegendaries', controller.read);
router.put('/listlegendaries/:id', controller.update);
router.delete('/listlegendaries/:id', controller.delete)


module.exports = router;
