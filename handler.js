const mustBeJson = require("./MustBeJson")

// Handler for express routes
const handler = function (req, res) {
  const { headers } = req

  if (mustBeJson(headers)){
    res.send({ "status": "OK" })
  } else { res.send({ "status": "BAD" }) }
}

module.exports = handler
