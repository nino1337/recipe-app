const express = require('express');

const router = express.Router();
const exerciseController = require('../controller/exercises');
const authorization = require('../middleware/authorization');

router.post('/', authorization, exerciseController.addExercise);
router.get('/', authorization, exerciseController.getExercises);
router.delete('/', authorization, exerciseController.deleteExercise);

module.exports = router;
