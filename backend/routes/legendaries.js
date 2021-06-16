const express = require('express');

const controller = require('../controllers/LegendariesController');
const validator = require('../middlewares/LegendariesValidator');

const router = express.Router();

//crud Legendaries
router.post('/', validator, controller.create);
router.get('/', controller.read);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete)

//GET detalhado
router.get('/:id', controller.indexId)
router.get('/:id/:attribute', controller.indexIdAndAttribute)


module.exports = router;
