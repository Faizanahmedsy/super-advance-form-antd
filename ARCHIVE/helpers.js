export default function formatNumberToTwoDecimals(number) {
  if (Number.isInteger(number)) {
    return number; // If the number is an integer, return it without decimals
  } else {
    return Math.round(number * 100) / 100; // Round to two decimal places
  }
}

//EXAMPLE USAGE--------------------------------------------------------------

// let total = 113.144;
// let formattedTotal = formatNumberToTwoDecimals(total);
// console.log(formattedTotal); // Output: 113.22

// let wholeNumber = 113.435;
// let formattedWholeNumber = formatNumberToTwoDecimals(wholeNumber);
// console.log(formattedWholeNumber); // Output: 113
