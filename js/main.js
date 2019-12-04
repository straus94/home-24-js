//step 1
// let a = +prompt(`enter number one`);
// let b = +prompt(`enter number two`);
// let min, max, res = 0;
// if (a > b) {
//     max = a;
//     min = b;
// } else {
//     max = b;
//     min = a;
// }
// for (let i = min; i <= max; i++) {
//     res = res + i;
// }
// console.log(res);

function minOfTwoNumber(a, b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}
function maxofTwoNumber(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}



//step 2
// let c = +prompt(`enter number one`);
// let d = +prompt(`enter number two`);
// let min, max, res = 0;
// min = minOfTwoNumber(c, d);
// max = maxofTwoNumber(c, d);
// for (let i = min; i >= 1; i--) {
//     if (((min % i) == 0) && ((max % i) == 0)) {
//         console.log(i);
//         break;    
//     } 
// }



//step 3
// let e = +prompt(`enter number one`);

// for(let i = 1; i <= e; i++) {
//     if (e % i == 0) console.log(i);
// }

//step 4
// let f = prompt(`enter number one`);
// let count = 0;
// for (let i = 1; i <= f.length; i++) {
//     count++;
// }
// console.log(count);



//step 5
// let g;
// let inc = 0; 
// let dec = 0;
// let zero = 0;
// let pair = 0;
// let noPair = 0;
// for (let i = 1; i <= 10; i++) {
//    g = +prompt('enter numbers');
//     if (g > 0) inc++;
//     if (g < 0) dec++;
//     if (g == 0) zero++;
//     if (g % 2 == 0) pair++;
//     if (g % 2 != 0) noPair++;
// }
// console.log(`inc - ${inc} numbers, dec -${dec} numbers, zero - ${zero}, pair - ${pair} numbers, no pair - ${noPair} nubers`);


//step 6
// let k, l, o, next, res;

// do {
//     k = +prompt('enter num');
//     l = +prompt('enter second num');
//     o = prompt('enter operation + = / *');
//     switch(o) {
//         case '+':
//             res = k + l;
//             console.log(res);
//             break; 
//         case '-':
//             res = k - l;
//             console.log(res);
//             break; 
//         case '/':
//             res = k / l;
//             console.log(res);
//             break; 
//         case '*':
//             res = k * l;
//             console.log(res);
//             break; 
//         default:
//             console.log('operation is not found');
//             break;
//     }
//     next = confirm('one more time?');
// } while (next == true);


//step 7
// let digit = prompt(`enter number`);
// let shiftDigit = +prompt(`enter shift number`);
// let res = '';
// // if (shiftDigit > digit) {
//     // console.log(`shift is very big`);
// // }
// for (let i = shiftDigit; i < digit.length; i++) {
//     res += digit[i];
// }
// for (let i = 0; i < shiftDigit; i++) {
//     res += digit[i];
// }
// console.log(res);


// step 8
// let next, day;
// day = prompt('enter day of week');
// do {
//     switch(day){
//         case 'monday':
//             day = 'thuesday';
//             console.log(day);
//             break;
//         case 'thuesday':
//             day = 'wensday';
//             console.log(day);
//             break;
//         case 'wensday':
//             day = 'thursday';
//             console.log(day);
//             break;
//         case 'thursday':
//             day = 'friday';
//             console.log(day);
//             break;
//         case 'friday':
//             day = 'saturday';
//             console.log(day);
//             break;
//         case 'saturday':
//             day = 'sunday';
//             console.log(day);
//             break;
//         case 'sunday':
//             day = 'monday';
//             console.log(day);
//             break;
//         default:
//             console.log('day on not defined');
//             break;
//     }
//     next = confirm('next?');
// } while (next == true);



//step 9
// for (let i = 2; i <= 9; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(i * j);
//     }
// }

//step 10
let magic = +prompt('guess the number from 0 to 100');
let n = 50;

for (let i = 0; i <= 10; i++) {

}