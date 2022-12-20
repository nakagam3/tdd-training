export class IntegerClosedRange {
    private readonly _underPoint: number;
    private readonly _topPoint: number;

    constructor(point: number, top: number) {
        this._underPoint = point;
        this._topPoint = top;
    }

    get underPoint(): number {
        return this._underPoint;
    }

    get topPoint(): number {
        return this._topPoint;
    }
}
