// //1. kono ekti letter vowel kina ta nirnoy kora jay kivabe

// var input = 'u';
// var letter = input.toLowerCase(); //kono word ke small letter e rupantorikorte hole 'toLowerCase' use korte hobe.

// if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
//     // console.log(letter, 'is vowel');
// }
// else {
//     // console.log(letter, 'is not vowel');
// }

// //2.  3 ti sonkhar moddhe boro sonkha ti ber kora
// var number1 = 300;
// var number2 = 500;
// var number3 = 1000;

// if (number1 > number2) {
//     if (number1 > number3) {
//         // console.log('number1 is big');
//     }
// }
// else if (number2 > number3) {
//     if (number2 > number1) {
//         // console.log('number2 is big')
//     }
// }
// else {
//     // console.log('number3 is big')
// }

// //3.  1-100 porjonto jor sonkha ber korar nuyom

// for (var i = 0; i <= 100; i += 2) {
//     // var number = i [2];
//     // console.log(i);
// }
// // even numbers 
// for (var i = 0; i <=100; i++) {
//     if (i % 2 == 0) {
//         // console.log(i);
//     }
// }
// //  odd number 
// for (var i = 0; i <= 100; i--) {
//     if (i % 2 ==  1) {
//         // console.log(i);

//     }
// }
// //4... loop er sahajje 7er namta.... loop

// var number = 7;

// for (var i = 1; i <= 10; i++) {
//     var result = number * i;
//     var muliplicationTable = number + ' * ' + i + ' = ' + result;
//     console.log(muliplicationTable);
// }

// for loop array 

var number = [10, 11, 12, 13, 14, 15, 17, 18, 19, 99, 100, 499];

for (var i = 0; i < number.length; i++) {
    var numbers = number [i];
    console.log(numbers);
}

