export function addPoly(poly1 = [], poly2 = []) {
    return Object.values(
        poly1.concat(poly2)
            // Create object {"exponent" : ["sum of all coefficients", "exponent"]}
            // e.g. [3x^2 + 5x^-1 + 7 + 4x^-1] return { 2: [3, 2], 0: [7,0], -1: [9,-1],}
            .reduce((prev, curr) => {

                //If exponent exists in prev, then add coefficient to that
                if (prev[curr[1]]) {
                    prev[curr[1]][0] += curr[0];

                    //If exponent desnt exist in prev, then add exponent to prev
                } else {
                    prev[curr[1]] = curr;
                }

                //If coefficient = 0, remove it from prev, e.g. 0x^2=0 remove  [0,2]
                if (prev[curr[1]][0] === 0) delete prev[curr[1]];

                return prev;
            }, {})
        // Set order from the highest expontent to the lowest - is not necessary 
    ).sort((a, b) => b[1] - a[1]);
}



