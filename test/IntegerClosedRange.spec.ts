import { IntegerClosedRange } from "../lib/IntegerClosedRange";
import { Fixture } from "./Fixture";

describe("IntegerClosedRange Test", () => {
    describe("整数閉区間を示す", () => {
        test("整数閉区間オブジェクトは下端点を返す", () => {
            const integerClosedRange = Fixture.generateIntegerClosedRange({
                lowerEndPoint: 1,
            });
            expect(1).toBe(integerClosedRange.lowerEndPoint);
        });

        test("整数閉区間オブジェクトは上端点を返す", () => {
            const integerClosedRange = Fixture.generateIntegerClosedRange({
                upperEndPoint: 1,
            });
            expect(1).toBe(integerClosedRange.upperEndPoint);
        });

        test("整数閉区間オブジェクトは下端点と上端点の両方を文字列にして返す", () => {
            const integerClosedRange = Fixture.generateIntegerClosedRange();
            expect("[3,8]").toBe(integerClosedRange.getRange());
        });

        describe("1点のみの区間もアリ", () => {
            test("整数閉区間オブジェクトは下端点を返す", () => {
                const integerClosedRange = Fixture.generateIntegerClosedRange({
                    lowerEndPoint: 4,
                    upperEndPoint: 4,
                });
                expect("[4,4]").toBe(integerClosedRange.getRange());
            });
        });
    });
});
