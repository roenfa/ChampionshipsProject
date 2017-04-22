import http from 'http';
let statusCodes = http.STATUS_CODES;

/**
 * Define methods for handle errors.
 */
export default class ErrorHandler {

    /**
     * Creates an error http.
     * @param {Number} status related to status response code http.
     * @param {String} message description alternative for response.
     * @returns {Function} for express.
     */
    static httpError(status, message) {
        let error = new Error();
        error.status = status;
        error.message = message || statusCodes[status] || 'Internal Server Error';
        return (req, res, next) => {
            next(error);
        };
    }
}