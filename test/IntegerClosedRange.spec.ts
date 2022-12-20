import { IntegerClosedRange } from "../lib/IntegerClosedRange";
import { Fixture } from "./Fixture";

describe("IntegerClosedRange Test", () => {
    describe("整数閉区間を示す", () => {
        let integerClosedRange: IntegerClosedRange;

        beforeEach(() => {
            integerClosedRange = new IntegerClosedRange(1, 2);
        });

        test("整数閉区間オブジェクトは下端点を返す", () => {
            const integerClosedRange = Fixture.generateIntegerClosedRange({
                lowerEndPoint: 3,
            });
            expect(3).toBe(integerClosedRange.lowerEndPoint);
        });

        test("整数閉区間オブジェクトは上端点を返す", () => {
            expect(2).toBe(integerClosedRange.upperEndPoint);
        });

        test("整数閉区間オブジェクトは下端点と上端点の両方を文字列にして返す", () => {
            expect("[1,2]").toBe(integerClosedRange.getRange());
        });
    });
});
