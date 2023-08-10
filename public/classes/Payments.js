export class Payment {
    constructor(recipient, details, amout) {
        this.recipient = recipient;
        this.details = details;
        this.amout = amout;
    }
    format() {
        return `${this.recipient} is owed $${this.amout} for ${this.details}`;
    }
}
