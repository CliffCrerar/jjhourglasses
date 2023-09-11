// Hourglasses

const hourGlasses = require('./_readarr');

const result = (function () {
    // console.log(hourGlasses);
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

console.log(result);