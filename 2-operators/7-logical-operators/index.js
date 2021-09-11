
let highInconme = false;
let goodCreditScore = false;
let eligibleForLoan = highInconme || goodCreditScore;
console.log('Eligible', eligibleForLoan);

let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);