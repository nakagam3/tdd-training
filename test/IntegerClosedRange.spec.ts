import { IntegerClosedRange } from "../lib/IntegerClosedRange";
import { Fixture } from "./Fixture";

describe("IntegerClosedRange Test", () => {
    describe("整数閉区間を示す", () => {
        test.each`
            lower                      | description
            ${Number.MAX_SAFE_INTEGER} | ${"下端点として整数の最大値である9007199254740991を返す"}
            ${Number.MIN_SAFE_INTEGER} | ${"下端点として整数の最小値である-9007199254740991を返す"}
            ${0}                       | ${"下端点として0を返す"}
            ${1}                       | ${"下端点として境界値である1を返す"}
            ${-1}                      | ${"下端点として境界値である-1を返す"}
        `("$description", ({ lower }) => {
            const integerClosedRange = Fixture.generateIntegerClosedRange({
                lowerEndPoint: lower,
            });
            expect(lower).toBe(integerClosedRange.lowerEndPoint);
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
