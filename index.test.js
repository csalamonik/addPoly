import { addPoly } from './';

describe('addPoly()', () => {
    it('returns empty array if there are no inputs', () => {
        expect(
            addPoly([], [])).toEqual([])
    });

    it('returns empty array when both INPUTS are not correct (coefficients = 0)', () => {
        const INPUT1 = [[0, 1]];
        const INPUT2 = [[0, 7]]
        const OUTPUT = [];

        expect(
            addPoly(INPUT1, INPUT2)).toEqual(OUTPUT)
    });
    it('returns INPUT1(ordered) when INPUT2 are not correct (coefficients = 0)', () => {
        const INPUT1 = [[7, -1], [2, 1]];
        const INPUT2 = [[0, 7]]
        const OUTPUT = [[2, 1], [7, -1]];

        expect(
            addPoly(INPUT1, INPUT2)).toEqual(OUTPUT)
    });
    it('returns INPUT2(ordered) when INPUT1 are not correct (coefficients = 0)', () => {
        const INPUT1 = [[0, 7]];
        const INPUT2 = [[2, 1], [6, 2]]
        const OUTPUT = [[6, 2], [2, 1]];

        expect(
            addPoly(INPUT1, INPUT2)).toEqual(OUTPUT)
    });

    it('returns correct OUTPUT when INPUT has not correct value (coefficients = 0)', () => {
        const INPUT1 = [[0, 1], [2, 3]];
        const INPUT2 = [[1, 3]]
        const OUTPUT = [[3, 3]];

        expect(
            addPoly(INPUT1, INPUT2)).toEqual(OUTPUT)
    });


    it('returns INPUT1(ordered) if there is empty INPUT2', () => {
        const INPUT1 = [[2, -3], [3, 0], [1, 2]];
        const INPUT2 = [];
        const OUTPUT = [[1, 2], [3, 0], [2, -3]];

        expect(
            addPoly(INPUT1, INPUT2)).toEqual(OUTPUT)
    });
    it('returns INPUT2(ordered) if there is empty INPUT1', () => {
        const INPUT1 = [];
        const INPUT2 = [[2, -3], [3, 0], [1, 2]];
        const OUTPUT = [[1, 2], [3, 0], [2, -3]];

        expect(
            addPoly(INPUT1, INPUT2)).toEqual(OUTPUT)
    });
    it('returns correct OUTPUT if there are different INPUT1 and INPUT2 ', () => {
        const INPUT1 = [[2, -3], [3, 0], [1, 2]];
        const INPUT2 = [[-3, -3], [1, 2], [2, -3]];
        const OUTPUT = [[2, 2], [3, 0], [1, -3]];

        expect(
            addPoly(INPUT1, INPUT2)).toEqual(OUTPUT)
    });
    it('returns correct OUTPUT if there are the same INPUT1 and INPUT2 ', () => {
        const INPUT1 = [[2, -3], [3, 0], [1, 2]];
        const INPUT2 = [[2, -3], [3, 0], [1, 2]];
        const OUTPUT = [[2, 2], [6, 0], [4, -3]];

        expect(
            addPoly(INPUT1, INPUT2)).toEqual(OUTPUT)
    });
    it('returns correct OUTPUT if there are INPUTS with negative exponents', () => {
        const INPUT1 = [[2, -3], [7, -10], [1, -3]];
        const INPUT2 = [[-3, -3], [5, -2], [2, -3]];
        const OUTPUT = [[5, -2], [2, -3], [7, -10]];

        expect(
            addPoly(INPUT1, INPUT2)).toEqual(OUTPUT)
    });
    it('returns correct OUTPUT if there are longer INPUTS', () => {
        const INPUT1 = [[5, 5], [-4, -4], [3, 3], [-2, -2], [1, 1], [7, 0]];
        const INPUT2 = [[-5, -5], [4, -4], [-3, -3], [2, 2], [-1, -1]];
        const OUTPUT = [[5, 5], [3, 3], [2, 2], [1, 1], [7, 0], [-1, -1], [-2, -2], [-3, -3], [-5, -5]];

        expect(
            addPoly(INPUT1, INPUT2)).toEqual(OUTPUT)
    });
    it('returns OUTPUT without polynomial when coefficients = 0, e.g. remove 0x^5 [0,5]', () => {
        const INPUT1 = [[5, 5], [-3, 2]];
        const INPUT2 = [[-5, 5], [4, 2]]
        const OUTPUT = [[1, 2]];

        expect(
            addPoly(INPUT1, INPUT2)).toEqual(OUTPUT)
    });


});


