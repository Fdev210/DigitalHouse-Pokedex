const express = require('express');
const router = express.Router();
const controller = require('../controllers/LegendariesController');

/* GET legendaries. */
router.get('/', controller.index);
router.post('/', controller.create);
router.get('/listlegendaries', controller.read);
router.put('/listlegendaries/:id', controller.update);
router.delete('/listlegendaries/:id', controller.delete)


module.exports = router;
