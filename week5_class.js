// Create functions for the Calculator class that can do the following:

// Add two numbers.
// Subtract two numbers.
// Multiply two numbers.
// Divide two numbers.

// Example:
// var calculator = new Calculator()
// calculator.add(10, 5) ➞ 15
// calculator.subtract(10, 5) ➞ 5
// calculator.multiply(10, 5) ➞ 50
// calculator.divide(10, 5) ➞ 2


class Calculator {
    add(number1, number2)
{
  return number1 + number2;
}

subtract(number1, number2)
{
  return number1 - number2;
}

multiply(number1, number2)
{
  return number1 * number2;
}

divide(number1, number2)
{
  return number1 / number2;
}
}

const calculator = new Calculator();
console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));



// Create a class that takes the following four arguments for a particular football player:

// name
// age
// height
// weight

class SportPlayer {
    constructor(name, age, height, weight) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }
}
// Also, create three functions for the class that returns the following strings:

describe() {
    return `${this.name} is ${this.age}.`;
}

describe() {
    return `${this.name} is ${this.height}`;
}

describe() {
    return `${this.name} weighs ${this.weight}`;
}
// getAge() returns "name is age age"
// getHeight() returns "name is heightcm"
// getWeight() returns "name weighs weightkg"

// notes:
// name will be passed in as a string and age, height and weight will be integers.

// example:
// p1 = new Player("David Jones", 25, 175, 75)

// p1.getAge() ➞ "David Jones is age 25"
// p1.getHeight() ➞ "David Jones is 175cm"
// p1.getWeight() ➞ "David Jones weighs 75kg"


// create at least two methods, on the child class, if you want add properties that only the child will have

class Swimming extends Swimmer {

}