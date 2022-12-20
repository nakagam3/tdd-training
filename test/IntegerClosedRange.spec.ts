import { IntegerClosedRange } from "../lib/IntegerClosedRange";

describe("IntegerClosedRange Test", () => {
    describe("整数閉区間（IntegerClosedRange）を示す", () => {
        const integerClosedRange = new IntegerClosedRange(1, 2);

        test("整数閉区間オブジェクトは下端点を返す", () => {
            expect(1).toBe(integerClosedRange.underPoint);
        });

        test("整数閉区間オブジェクトは上端点を返す", () => {
            expect(2).toBe(integerClosedRange.topPoint);
        });
    });
});
