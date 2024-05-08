function tailrecursiveFIB(n, n1 = 0, n2 = 1, index = 0) {
    if (index === n) {
        return n1;
    }
    return tailrecursiveFIB(n, n2, n1 + n2, index + 1);
}