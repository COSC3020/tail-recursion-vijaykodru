const fs = require("fs");
const assert = require("assert");
eval(fs.readFileSync('code.js').toString());

assert(tailrecursiveFIB(1) === 0)
assert(tailrecursiveFIB(2) === 1)
assert(tailrecursiveFIB(3) === 1)
assert(tailrecursiveFIB(4) === 2)
assert(tailrecursiveFIB(5) === 3)
assert(tailrecursiveFIB(7) === 8)
assert(tailrecursiveFIB(9) === 21)
assert(tailrecursiveFIB(10) === 34)
assert(tailrecursiveFIB(30) === 832040)

