function tailrecursiveFIB(n, n1 = 0, n2 = 1, index = 0) {
    console.log(`n: ${n}, n1: ${n1}, n2: ${n2}, index: ${index}`);
    if (index === n) {
        return n1;
    }
    return tailrecursiveFIB(n, n2, n1 + n2, index + 1);
}

console.log(tailrecursiveFIB(1));