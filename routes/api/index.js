const router = require("express").Router()
const healthTrackerRoutes = require("./healthTracker");

// routes
router.use("/healthTracker", healthTrackerRoutes);

module.exports = router;
