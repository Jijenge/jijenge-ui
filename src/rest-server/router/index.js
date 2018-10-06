const router = require("express").Router();
const oneTimeDonation = require("../controllers/oneTimeDonation");
const monthlyDonation = require("../controllers/monthlyDonation");
const serveStatic = require("../controllers/serveStatic");

router.route("/api/stripe/oneTimeDonation").post(oneTimeDonation.post);
router.route("/api/stripe/monthlyDonation").post(monthlyDonation.post);
router.route("*").get(serveStatic.get);

module.exports = router;
