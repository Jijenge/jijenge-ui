const { stripe } = require("../config/stripe");
const { success, error } = require("../lib/log");

const monthlyDonation = {
  post: async (req, res) => {
    const input = JSON.parse(req.body);
    console.log(typeof input, input);
    try {
      let { status } = await stripe.charges.create({
        receipt_email: input.email,
        amount: input.amount,
        currency: "usd",
        description: "Jijenge Donation",
        source: input.token
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

module.exports = monthlyDonation;
