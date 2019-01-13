declare type Utility = {
    possibility: number;
    value: number;
};
declare type Value = {
    average: number;
    sum: number;
};
declare type Utilities = Utility[];
export declare class UtilityFunction {
    utilities: Utilities;
    value: Value;
    add: (possibility: number, value: number) => void;
    calculate: () => void;
    reset: () => void;
    constructor(...utilities: Utility[]);
}
export {};
