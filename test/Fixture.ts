import { IntegerClosedRange } from "../lib/IntegerClosedRange";

export class Fixture {
    static generateIntegerClosedRange(param?: {
        lowerEndPoint?: number;
        upperEndPoint?: number;
    }): IntegerClosedRange {
        const val = {
            lowerEndPoint: 1,
            upperEndPoint: 2,
            ...param,
        };
        const { lowerEndPoint, upperEndPoint } = val;
        return new IntegerClosedRange(lowerEndPoint, upperEndPoint);
    }
}
