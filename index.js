/**
 * we renamed practice.js to index.js by running:
 *    git mv practice.js index.js
 * 
 * Now our program is made up of a few smaller units, each easy to read and can stand on their own.
 * Splitting programs across multiple files make it easier when working with Git, since there's less chance two people
 * will work on the same line(s) in the same file(s)
 */

// Import our Data class
const { Data } = require('./data');

/**
 * Names like data1 and data2 cause "bad code smell".
 * Names like this aren't helpful, it's better to have the name describe what the data is for
 * What age group would something called data2 store? You wouldn't know.
 * What age group would something called ageGroupUnder19 store? It's in the name!
 */
// age group 0-19 (formerly called data1)
let ageGroupUnder19 = new Data(15, 16, 17);
console.log(`Case data for population age group 0-19: total=${ageGroupUnder19.sum()} average=${ageGroupUnder19.average()}`);

// age group 20-39 (formerly called data2)
let ageGroup20to39 = new Data(56, 2, 67);
console.log(`Case data for population age group 20-39: total=${ageGroup20to39.sum()} average=${ageGroup20to39.average()}`);

// class Data {
//     constructor(...numbers) {
//         this.numbers = numbers;
//     }
//     /**
//      * It looks like the total and average are closely connected, as we end up needing one to calculate the other, and we have to type the same data over again.
//      * Every time you type the same thing or copy/paste code, it becomes easier to make mistakes.
//      * It might make more sense to combine this data into a single class (defined above)
//      */

//     // Calculate the total for a set of numbers
//     sum() {
//         let numbers = this.numbers;
//         let total = 0;
//         let count = numbers.length;
//         for(let i = 0; i < count; i++) {
//           total += numbers[i];
//         }
//         return total;
//       }    

//     /**
//      * In average(), we're actually repeating ourselves in a couple places:
//      * 1 - average() requires a total, which must be calculated for each age group
//      * We can extract this logic into a new reusable function to simplify average() further
//      * We will call this function `sum()`, defined above. Now we have single functions for calculating totals and averages.
//      * If we find a bug in either of these, we can fix them once and they will be fixed for the entire program.
//      */
//     // Calculate the average for a set of numbers
//     average() {
//         return this.sum() / this.numbers.length;
//       }
// }
// /**
//  * below logic calculates average in multiple places and repeats code each time.
//  * this is a bad design because if there is a mistake in one calculation, we'll have to ensure we correct each instance of this calculation.
//  * additionally, we won't be able to test this program without manually testing every instance of this calculation.
//  * 
//  * A solution would be to extract this logic into its own function which we can call in multiple places.
//  * That way, we'll only have to correct mistakes in the one function, and only test the one function.
//  * The method `average()` has been defined above. Note that giving functions appropriate names helps developers understand the purpose of your methods.
//  */
// // age group 0-19
// let data1 = new Data(15, 16, 17);
// console.log(`Case data for population age group 0-19: total=${data1.sum()} average=${data1.average()}`);

// // age group 20-39
// let data2 = new Data(56, 2, 67);
// console.log(`Case data for population age group 20-39: total=${data2.sum()} average=${data2.average()}`);