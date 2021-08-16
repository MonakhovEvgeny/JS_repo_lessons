let res = 1;

function power(val, pow) {
    res *= val;

    if (pow == 1)
        return res
    return power(val, --pow)
}

console.log(power(2, 5))