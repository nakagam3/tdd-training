export class IntegerClosedRange {
    private readonly _lowerEndPoint: number;
    private readonly _upperEndPoint: number;

    constructor(lower: number, upper: number) {
        this._lowerEndPoint = lower;
        this._upperEndPoint = upper;
    }

    get lowerEndPoint(): number {
        return this._lowerEndPoint;
    }

    get upperEndPoint(): number {
        return this._upperEndPoint;
    }

    getRange() {
        return `[${this.lowerEndPoint},${this.upperEndPoint}]`;
    }
}
