import { IntegerClosedRange } from "../lib/IntegerClosedRange";

export class Fixture {
    static createデフォルトの整数閉区間(param?: {
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

    static create1点のみの整数閉区間(endpoint: number): IntegerClosedRange {
        return new IntegerClosedRange(endpoint, endpoint);
    }
}
