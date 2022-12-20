import { IntegerClosedRange } from "../lib/IntegerClosedRange";

export class Fixture {
    static generateIntegerClosedRange(param?: {
        lowerEndPoint?: number;
        upperEndPoint?: number;
    }): IntegerClosedRange {
        const val = {
            lowerEndPoint: 3,
            upperEndPoint: 8,
            ...param,
        };
        const { lowerEndPoint, upperEndPoint } = val;
        return new IntegerClosedRange(lowerEndPoint, upperEndPoint);
    }
}
