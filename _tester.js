const assert = require('assert');
const { log } = require('console');

const files = ['test-1', 'test-2', 'test-3']
const expected = [28, 13, 19];

files.forEach((test, idx) => {

    const hourGlasses = require('fs')
        .readFileSync('./' + test)
        .toString()
        .split('\n')
        .map(el => el.split(' '));

    const result = (function () {
        
        // write code below
        let ans;

        let hgSums = [];

        if (
            typeof hourGlasses === "object" &&
            hourGlasses.length === 6 &&
            hourGlasses.map(i => i.length).reduce((p, n) => p + n) === 36
        ) {
            for (let row = 0; row <= 3; row++) {
                for (let col = 0; col <= 3; col++) {
                    let sum = 0;

                    sum += +hourGlasses[row][col];
                    sum += +hourGlasses[row][col + 1];
                    sum += +hourGlasses[row][col + 2];
                    sum += +hourGlasses[row + 1][col + 1];
                    sum += +hourGlasses[row + 2][col];
                    sum += +hourGlasses[row + 2][col + 1];
                    sum += +hourGlasses[row + 2][col + 2];

                    hgSums.push(sum);
                }
            }
        }

        ans = (hgSums.length > 0) ? Math.max(...hgSums) : 0;

        return ans;
        // write code above

    })()
    
    assert(result === expected[idx], `Test ${idx} failed`);

})