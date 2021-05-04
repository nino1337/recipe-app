const router = require('express').Router();
const routineRoutes = require('./routine');
const exerciseRoutes = require('./exercise');

router.use('/api/routine', routineRoutes);
router.use('/api/exercise', exerciseRoutes);
module.exports = router;
