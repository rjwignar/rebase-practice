/**
 * The original program wasn't huge, but it was larger than it needs to be.
 * The Data class should really be separate from the main program.
 * Let's put the Data class in its own file
 */
class Data {
    constructor(...numbers) {
      this.numbers = numbers;
    }
  
    // Calculate the total for the set of numbers
    sum() {
      let numbers = this.numbers;
      let total = 0;
      let count = numbers.length;
      for(let i = 0; i < count; i++) {
        total += numbers[i];
      }
      return total;
    }      
  
    // Calculate the average for the set of numbers
    average() {
      return this.sum() / this.numbers.length;
    }
  }
  
  // Export our Data class
  module.exports.Data = Data;