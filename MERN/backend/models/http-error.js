class HttpError extends Error {
    constructor(message, errorCode) {
        super(message); // forwards the "message" property to Error class
        this.code = errorCode; // adds a code property

    }
}

module.exports = HttpError;