function minOnes(n) {
    let count = 1;
    let ones = 11;
    if(n == 1) return count;
    while(ones % n != 1) {
        ones = (ones % n) * 10 + 1;
        count += 1;
    }
    return count;
}

const readline = require("readline");
rl =  readline.createInterface(process.stdin);

rl.on("line", (num) => {
    console.log(minOnes(num));
});
