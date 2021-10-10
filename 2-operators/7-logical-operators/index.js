// Logical AND (&&)
// Return TRUE if both operands are TRUE
console.log(true && false);

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
let highInconme = false;
let goodCreditScore = false;
let eligibleForLoan = highInconme || goodCreditScore;
console.log("Eligible", eligibleForLoan);

// NOT (!)
let applicationRefused = !eligibleForLoan;
console.log("Application Refused", applicationRefused);
