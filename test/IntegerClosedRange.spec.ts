import { IntegerClosedRange } from "../lib/IntegerClosedRange";

describe("IntegerClosedRange Test", () => {
    describe("整数閉区間を示す", () => {
        let integerClosedRange;

        test("整数閉区間オブジェクトは下端点を返す", () => {
            integerClosedRange = new IntegerClosedRange(1, 2);
            expect(1).toBe(integerClosedRange.lowerEndPoint);
        });

        test("整数閉区間オブジェクトは上端点を返す", () => {
            integerClosedRange = new IntegerClosedRange(1, 2);
            expect(2).toBe(integerClosedRange.upperEndPoint);
        });
    });
});
