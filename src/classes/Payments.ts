import { HasFormatter } from "../interfaces/HasFormatter";

export class Payment implements HasFormatter {
    constructor( readonly recipient: string, private details: string, public amout: number){}

    format() {
        return `${this.recipient} is owed $${this.amout} for ${this.details}`
    }
}