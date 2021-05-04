const express = require('express');

const router = express.Router();
const routinesController = require('../controller/routines');
const authorization = require('../middleware/authorization');

router.post('/', authorization, routinesController.addRoutine);
router.get('/', authorization, routinesController.getRoutines);
router.delete('/', authorization, routinesController.deleteRoutine);

module.exports = router;
