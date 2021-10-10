// In JS with have two types of conditional statements:
// If..else and Switch...case

// If hour is beween 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Oherwise: Good evening

// if (hour >= 6 && hour < 12) {
//   console.log(morning);
// } else if (hour >= 12 && hour <= 18) {
//   console.log(afternoon);
// } else if (hour >= 0 && hour <= 5) {
//   console.log(backToBed);
// } else {
//   console.log(evening);
// }

function message(time) {
  if (time >= 6 && time < 12) {
    return "Bom dia!";
  } else if (time >= 12 && time <= 18) {
    return "Boa tarde!";
  } else if (time >= 0 && time <= 5) {
    return "Volte para a cama";
  } else {
    return "Boa noite!";
  }
}
console.log(message(21));
