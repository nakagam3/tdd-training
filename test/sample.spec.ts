import { Sample, hello } from "../lib/sample";

describe("test sample", () => {
    test("say with mock", () => {
        // Arrange
        let actual;

        // Act
        const print = (str: string) => (actual = str);
        const sample = new Sample(print);
        sample.say();

        // Assert
        expect("Hello TDDBC!").toBe(actual);
    });

    test("private method", () => {
        expect(hello()).toBe("Hello TDDBC!");
    });
});
