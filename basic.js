const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findMaxSubarraySum(arr) {
    if (!arr || arr.length === 0) {
        return "Array kosong atau tidak valid.";
    }

    let maxSum = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return "Maximum Sum: " + maxSum;
}

rl.question('Masukkan elemen array (pisahkan dengan spasi): ', (input) => {
    const inputArray = input.split(' ').map(Number);

    const result = findMaxSubarraySum(inputArray);
    console.log("Output:", result);

    rl.close();
});
