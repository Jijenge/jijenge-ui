const router = require("express").Router();
const oneTimeDonation = require("../controllers/oneTimeDonation");
const serveStatic = require("../controllers/serveStatic");

router.route("/api/stripe/checkout").post(oneTimeDonation.post);
router.route("/").get(serveStatic.get);

module.exports = router;
