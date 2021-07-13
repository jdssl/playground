const NotImplementedException = require('../exceptions/notImplementedException')

class ViewFactory {
  createTable() {
    throw new NotImplementedException(this.createTable.name)
  }
}

module.exports = ViewFactory
