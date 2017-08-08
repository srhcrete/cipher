console.log("boobs");
var response = window.prompt('User Input');
// console.log(response);

function cipher(str) {
  var first = str
    .charAt(0)
    .toUpperCase(),

  last = str
    .charAt(str.length - 1)
    .toUpperCase(),

  x=str.charAt(str.length/2);

  return str + last + first;
}


console.log(cipher(response));
