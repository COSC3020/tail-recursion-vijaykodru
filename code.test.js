const fs = require("fs");
const assert = require("assert");
eval(fs.readFileSync('code.js').toString());

equate1 = tailrecursiveFIB(2);
result1 = 1;
assert(equate1 == result1)