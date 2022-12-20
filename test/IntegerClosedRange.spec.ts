import { Fixture } from "./Fixture";

describe("IntegerClosedRange Test", () => {
    describe("整数閉区間を示す", () => {
        test.each`
            lower                      | description
            ${Number.MAX_SAFE_INTEGER} | ${"下端点として整数の最大値である9007199254740991を返せる"}
            ${0}                       | ${"下端点として境界値である0を返せる"}
            ${Number.MIN_SAFE_INTEGER} | ${"下端点として整数の最小値である-9007199254740991を返せる"}
        `("$description", ({ lower }) => {
            const integerClosedRange = Fixture.generateデフォルトの整数閉区間({
                lowerEndPoint: lower,
            });
            expect(lower).toBe(integerClosedRange.lowerEndPoint);
        });

        test.each`
            upper                      | description
            ${Number.MAX_SAFE_INTEGER} | ${"上端点として整数の最大値である9007199254740991を返せる"}
            ${0}                       | ${"上端点として0を返せる"}
            ${Number.MIN_SAFE_INTEGER} | ${"上端点として整数の最小値である-9007199254740991を返せる"}
        `("$description", ({ upper }) => {
            const integerClosedRange = Fixture.generateデフォルトの整数閉区間({
                upperEndPoint: upper,
            });
            expect(upper).toBe(integerClosedRange.upperEndPoint);
        });

        test.each`
            lower                      | upper                      | description
            ${Number.MIN_SAFE_INTEGER} | ${Number.MAX_SAFE_INTEGER} | ${"境界値の最大と最小の場合、その両方を文字列にして返す"}
            ${0}                       | ${Number.MAX_SAFE_INTEGER} | ${"境界値の0と最大の場合、その両方を文字列にして返す"}
            ${Number.MIN_SAFE_INTEGER} | ${0}                       | ${"境界値の0と最小の場合、その両方を文字列にして返す"}
        `("$description", ({ lower, upper }) => {
            const integerClosedRange = Fixture.generateデフォルトの整数閉区間({
                lowerEndPoint: lower,
                upperEndPoint: upper,
            });
            expect(`[${lower},${upper}]`).toBe(integerClosedRange.getRange());
        });

        describe("1点のみの区間もアリ", () => {
            test("整数閉区間オブジェクトは下端点を返す", () => {
                const integerClosedRange = Fixture.create1点のみの整数閉区間(4);
                expect("[4,4]").toBe(integerClosedRange.getRange());
            });
        });
    });
});
