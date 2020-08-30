// Complete the compareTriplets function below.
let a = [17, 28, 30]; // 2
let b = [99, 16, 8]; // 1


function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    let result = [];

    for(let i = 0; i < a.length; i++) {
        if(a[i] > b[i]) {
            alice += 1;
        }
        else if(a[i] < b[i]) {
            bob += 1;
        }
        else if(a[i] === b[i]) {
            alice += 0;
            bob += 0;
        }
    }
    result.push(alice);
    result.push(bob);
    console.log(result);
    return result;
}

compareTriplets(a, b);