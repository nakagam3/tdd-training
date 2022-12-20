import { IntegerClosedRange } from "../lib/IntegerClosedRange";

describe("IntegerClosedRange Test", () => {
    test("整数閉区間オブジェクトは下端点を返す", () => {
        const integerClosedRange = new IntegerClosedRange();
        expect(1).toBe(integerClosedRange.underPoint);
    });
});
