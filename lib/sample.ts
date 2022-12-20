export class Sample {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    print: (...data: any[]) => void;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(printFunc: (...data: any[]) => void) {
        this.print = printFunc || console.log;
    }

    say() {
        this.print(hello());
    }
}

export function hello() {
    return "Hello TDDBC!";
}
