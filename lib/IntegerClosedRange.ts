export class IntegerClosedRange {
    private readonly _underPoint: number;

    constructor(point: number) {
        this._underPoint = point;
    }

    get underPoint(): number {
        return this._underPoint;
    }
}
