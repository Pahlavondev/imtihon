// string, numbers, null, undefined, bigInt, symbol, boolean, object;

// 1-masala

// let arr = ["Bahor", "Kuz", "Yoz", "Qish"];
// function textName(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(textName(arr));

// 2-masala

let fullName = "Sam Harries";
function textName(fullName) {
  let arr = fullName.split(" ");

  let result = [];

  for (const iterator of arr) {
    result.push(iterator[0].toUpperCase());
  }

  return result.join(".");
}
console.log(textName(fullName));
