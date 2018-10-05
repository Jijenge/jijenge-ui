const path = require("path");

const serveStatic = {
  get: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../index.html"));
  }
};

module.exports = serveStatic;
