const express = require('express');

const controller = require('../controllers/LegendariesController');
const validator = require('../middlewares/LegendariesValidator');

const router = express.Router();

//crud Legendaries
// router.get('/', controller.index);
router.get('/', controller.read);
router.post('/', validator, controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete)

//GET detalhado
router.get('/:id', controller.indexId)
router.get('/:id/:attribute', controller.indexIdAndAttribute)


module.exports = router;
