class AlreadyExistError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }
}

module.exports = AlreadyExistError