const stripe = require("stripe")("sk_test_y4H1Zrtqn5ObtiKeXumvuI93");
const { success, error } = require("../lib/log");

const oneTimeDonation = {
  post: async (req, res) => {
    console.log(typeof req.body, req.body, req.params, req.query);
    try {
      let { status } = await stripe.charges.create({
        amount: 2000,
        currency: "usd",
        description: "Jijenge Donation",
        source: req.body
      });
      console.log(status);
      success("Successfully processed data from payment controller");
      res.json({ status });
    } catch (err) {
      error("Error from payment controller: ", err);
      res.status(500).end();
    }
  }
};

module.exports = oneTimeDonation;
