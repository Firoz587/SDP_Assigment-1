function MonthlySavings(arr, val) {
    let bal = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 3000) {
            bal += (arr[i] - arr[i] * 0.2);
        } else {
            bal += arr[i];
        }
    }
    return (bal - val);
}


const r = MonthlySavings([1000, 2000, 2500], 5000);
if (r < 0) {
    console.log("earn more");
} else {
    console.log(r);
}