export default class ApiResult {
    constructor(status, data, message) {
        this.status = status;
        this.data = data;
        this.message = message;
    }
}