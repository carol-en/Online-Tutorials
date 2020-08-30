

let arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
//  5000000015


// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
    let reducer = ar.reduce((accu, num) => accu + num);
    console.log(reducer);
    return reducer;
}

aVeryBigSum(arr);