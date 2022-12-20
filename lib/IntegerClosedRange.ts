export class IntegerClosedRange {
    private readonly _underPoint: number;

    constructor() {
        this._underPoint = 1;
    }

    get underPoint(): number {
        return this._underPoint;
    }
}
