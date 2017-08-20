function mustBeJson(headers) {
  if (headers['content-type'] == "application/json") {
    return true
  } else { return false }
}

module.exports = mustBeJson
