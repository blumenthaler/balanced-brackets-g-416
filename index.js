// function isBalanced(string) {
//     const pairs = [
//         ["(", ")"],
//         ["[", "]"],
//         ["{", "}"]
//     ]

//     for (let i = 0; i<string.length; i++) {
//         for (const pair of pairs) {
//             if (string[i] === pair[0]) {
//                 if (string[i+1] === pair[1] || string[string.length - (i+1)] === pair[1]) {
//                     return true
//                 }
//                 else return false
//             }
//         }
//     }
// }


function isBalanced(string) {
    let matches = {
        '(': ')',
        '{': '}',
        '[': ']',
        ')': '(',
        '}': '{',
        ']': '['
    }
    let unmatched = []

    for (let i = 0; i<string.length; i++) {
        if (unmatched.includes(matches[string[i]])) {
            if (unmatched.slice(-1)[0] === matches[string[i]]) {
                unmatched.pop()
            }
            else {
                return false
            }
        }
        else {
            unmatched.push(string[i])
        }
    }
    if (unmatched.length !== 0) {
        return false
    }
    else {
        return true
    }
}

// function isBalanced(str) {
//     let unmatched = []
//     let counterpart = {
//         "[": "]",
//         "]": "[",
//         "(": ")",
//         ")": "(",
//         "{": "}",
//         "}": "{"
//     }
//     const stringAsAnArray = str.split("")

//     for (const sym of stringAsAnArray) {

//         if (unmatched.includes(counterpart[sym])) {
//             if (unmatched.slice(-1)[0] === counterpart[sym]) {
//                 unmatched.pop()
//             } else {
//                 return false 
//             }
//         } else {
//             unmatched.push(sym)
//         }
//     }

//     if (unmatched.length !== 0) {
//         return false 
//     } else {
//         return true 
//     }
// }