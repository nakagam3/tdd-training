import { IntegerClosedRange } from "../lib/IntegerClosedRange";

describe("IntegerClosedRange Test", () => {
    test("整数閉区間オブジェクトは下端点を返す", () => {
        const integerClosedRange = new IntegerClosedRange(1, 2);
        expect(1).toBe(integerClosedRange.underPoint);
    });

    test("整数閉区間オブジェクトは上端点を返す", () => {
        const integerClosedRange = new IntegerClosedRange(1, 2);
        expect(2).toBe(integerClosedRange.topPoint);
    });
});
