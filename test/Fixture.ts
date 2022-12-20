import { IntegerClosedRange } from "../lib/IntegerClosedRange";

export class Fixture {
    static generateIntegerClosedRange(param: {
        lowerEndPoint: number;
    }): IntegerClosedRange {
        const { lowerEndPoint } = param;
        return new IntegerClosedRange(lowerEndPoint, 2);
    }
}
