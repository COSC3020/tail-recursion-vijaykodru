const fs = require("fs");
const assert = require("assert");
eval(fs.readFileSync('code.js').toString());

equate1 = tailrecursiveFIB(1);
result1 = 0;
assert(equate1 == result1)