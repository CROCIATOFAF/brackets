module.exports = function check(str, bracketsConfig) {
    let brackets = bracketsConfig.flat().join('');
    let stack = [];

    for (const bracket of str) {
        let bracketsIndex = brackets.indexOf(bracket);

        if (stack.length > 0 && brackets[bracketsIndex] === brackets[stack[stack.length - 1]]) {
            stack.pop();
            continue;
        } else if (bracketsIndex % 2 === 0) {
            stack.push(bracketsIndex + 1);
        } else {
            if (stack.pop() !== bracketsIndex) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
