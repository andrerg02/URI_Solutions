function stacks(m,n) {
    while (true) {
        if (m === 1 || n === 1) {
            return 1;
        }
        if (m === 0) {
            return n;
        }
        if (n === 0) {
            return m;
        }
        (m > n) ? m -= Math.floor(m/n)*n : n -= Math.floor(n/m)*m;
    }
}

const readline = require("readline");
rl =  readline.createInterface(process.stdin);

let count;
rl.on("line", (num) => {
    let values = num.split(" ")
    if(values.length == 1) {
        count = parseInt(num);
    }
    else {
        console.log(stacks(values[0], values[1]));
        count -= 1;
        if(count === 0) {
            rl.close();
        }
    }
});

rl.on("close", () => {
    process.exit(0);
});