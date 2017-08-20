const assert  = require("assert")
const handler = require("../handler")

describe("when end-user posts to the root of the site", function () {

  describe("and request content-type is application/json", function () {

    it('returns a json object with `status` set to `OK`', function () {
      // Assign result to null initially
      let result = null

      // Stub request
      req = {
        headers: {
          'content-type': 'application/json'
        }
      }

      // Stub response
      res = {
        send: function (response) {
          result = response.status
        }
      }

      // Call handler with stubs
      handler(req, res)

      // Result should be OK
      assert(result === "OK")
    })

  })

  describe("and their request content-type is NOT application/json", function () {

    it('returns a json object with `status` set to `BAD`', function () {
      // Assign result to null initially
      let result = null

      // Stub request
      req = {
        headers: {
          'content-type': 'text/plain'
        }
      }

      // Stub response
      res = {
        send: function (response) {
          result = response.status
        }
      }

      // Call handler with stubs
      handler(req, res)

      // Result should be BAD
      assert(result === "BAD")
    })

  })

})
