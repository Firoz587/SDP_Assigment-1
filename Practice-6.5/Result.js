var result = 65;

if (result < 40) {
  console.log("F");
} else if (result >= 40 && result < 45) {
  console.log("D");
} else if (result >= 45 && result < 50) {
  console.log("C");
} else if (result >= 50 && result < 55) {
  console.log("C+");
} else if (result >= 55 && result < 60) {
  console.log("B-");
} else if (result >= 60 && result < 65) {
  console.log("B");
} else if (result >= 65 && result < 70) {
  console.log("B+");
} else if (result >= 70 && result < 75) {
  console.log("A-");
} else if (result >= 75 && result < 80) {
  console.log("A");
} else if (result >= 80 && result < 100) {
  console.log("A+");
} else {
  console.log("invalid");
}
