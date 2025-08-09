function isChar(ch) {
    return (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z");
}

function EvaluateExpression(expr, vari, val) {
    let result = 0.0;
    let stack = [];
    let newVal = {};

    for (let i = 0; i < vari.length; i++) {
        newVal[vari[i]] = val[i];
    }

    let replacedExpr = "";
    let temp = "";

    for (let j = 0; j < expr.length; j++) {
        let ch = expr[j];

        if (isChar(ch)) {
            temp += ch;
        } else {
            if (temp.length > 0) {
                stack.push(temp);

                if (temp === "sqrt") {
                    replacedExpr += "safeSqrt";  // changed from Math.sqrt
                } else if (temp in newVal) {
                    replacedExpr += newVal[temp];
                } else {
                    replacedExpr += temp;
                }

                temp = "";
            }
            replacedExpr += ch;
        }
    }

    if (temp.length > 0) {
        stack.push(temp);

        if (temp === "sqrt") {
            replacedExpr += "safeSqrt";  // changed from Math.sqrt
        } else if (temp in newVal) {
            replacedExpr += newVal[temp];
        } else {
            replacedExpr += temp;
        }
    }

    // Define safeSqrt that throws error for negative input
    function safeSqrt(x) {
        if (x < 0) throw new Error("Negative input for sqrt");
        return Math.sqrt(x);
    }

    try {
        result = eval(replacedExpr);
        if (typeof result === "number" && !isNaN(result)) {
            // Round float result to 2 decimals if needed
            return Number.isInteger(result) ? result : +result.toFixed(2);
        }
        return -1;
    } catch (e) {
        // If error (like sqrt negative), return -1
        return -1;
    }
}

// Tests
console.log(EvaluateExpression('sqrt(a - b) + c', ["a", "b", "c"], [9, 4, 3])); // 6
console.log(EvaluateExpression('sqrt(x * y) - z', ["x", "y", "z"], [2, -3, 1])); // -1
console.log(EvaluateExpression('sqrt(m) + sqrt(n)', ["m", "n"], [16,9]));       // 7
