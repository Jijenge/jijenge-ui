const { stripe } = require("../config/stripe");
const { success, error } = require("../lib/log");

const monthlyDonation = {
  post: async (req, res) => {
    const input = JSON.parse(req.body);
    console.log(typeof input, input);
    try {
      // Define a Product
      const product = await stripe.products.create({
        name: "Give Monthly",
        type: "service"
      });
      console.log("PRODUCT", product);
      // Define Products Plan
      const varPlan = await stripe.plans.create({
        product: product.id,
        nickname: "Give Monthly USD",
        currency: "usd",
        interval: "month",
        amount: input.amount
      });
      console.log("PLAN", varPlan);
      // Create Customer
      const customer = await stripe.customers.create({
        email: input.email,
        source: input.token
      });
      console.log("CUSTOMER", customer);
      // Store Customer Email and ID in DB
      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{ plan: varPlan.id }]
      });
      console.log("SUBSCRIPTION", subscription);
      // let { status } = await stripe.charges.create({
      //   receipt_email: input.email,
      //   amount: input.amount,
      //   currency: "usd",
      //   description: "Jijenge Donation",
      //   source: input.token
      // });
      console.log(subscription.status);
      success("Successfully processed data from payment controller");
      res.json(subscription.status);
    } catch (err) {
      error("Error from payment controller: ", err);
      res.status(500).end();
    }
  }
};

module.exports = monthlyDonation;
