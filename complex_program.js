/********************************************
 * Filename: complex_program.js
 * Content: A complex and elaborate JavaScript program
 * that performs various mathematical operations
 * and displays interactive visualizations.
 ********************************************/

// Import required modules
const { Chart, Point } = require('chart.js');
const math = require('mathjs');

// Define a complex object
class Complex {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  // Addition of two complex numbers
  add(other) {
    const realPart = this.real + other.real;
    const imaginaryPart = this.imaginary + other.imaginary;
    return new Complex(realPart, imaginaryPart);
  }

  // Subtraction of two complex numbers
  subtract(other) {
    const realPart = this.real - other.real;
    const imaginaryPart = this.imaginary - other.imaginary;
    return new Complex(realPart, imaginaryPart);
  }

  // Multiplication of two complex numbers
  multiply(other) {
    const realPart = this.real * other.real - this.imaginary * other.imaginary;
    const imaginaryPart = this.real * other.imaginary + this.imaginary * other.real;
    return new Complex(realPart, imaginaryPart);
  }

  // Division of two complex numbers
  divide(other) {
    const denominator = math.pow(other.real, 2) + math.pow(other.imaginary, 2);
    const realPart = (this.real * other.real + this.imaginary * other.imaginary) / denominator;
    const imaginaryPart = (this.imaginary * other.real - this.real * other.imaginary) / denominator;
    return new Complex(realPart, imaginaryPart);
  }

  // Compute the magnitude of a complex number
  magnitude() {
    return Math.sqrt(math.pow(this.real, 2) + math.pow(this.imaginary, 2));
  }
}

// Function to plot a scatter chart using Chart.js
function plotScatterChart(data) {
  const ctx = document.getElementById('scatterChart').getContext('2d');
  new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'Scatter Plot',
        data: data,
        pointBackgroundColor: 'blue',
        pointBorderColor: 'transparent',
        pointRadius: 5,
      }],
    },
    options: {
      scales: {
        x: { type: 'linear', position: 'bottom' },
        y: { type: 'linear', position: 'left' },
      },
    },
  });
}

// Generate random complex numbers
function generateRandomComplexNumbers(count) {
  const numbers = [];
  for (let i = 0; i < count; i++) {
    const realPart = Math.random() * 10 - 5;
    const imaginaryPart = Math.random() * 10 - 5;
    numbers.push(new Complex(realPart, imaginaryPart));
  }
  return numbers;
}

// Main program
function main() {
  // Perform complex computations
  const complexNumber1 = new Complex(2, 3);
  const complexNumber2 = new Complex(4, -1);
  const complexNumber3 = complexNumber1.add(complexNumber2);
  const complexNumber4 = complexNumber1.multiply(complexNumber2);
  const complexNumber5 = complexNumber1.subtract(complexNumber2);
  const complexNumber6 = complexNumber4.divide(complexNumber3);
  
  console.log(`Complex Number 1: ${complexNumber1.real} + ${complexNumber1.imaginary}i`);
  console.log(`Complex Number 2: ${complexNumber2.real} + ${complexNumber2.imaginary}i`);
  console.log(`Addition: ${complexNumber3.real} + ${complexNumber3.imaginary}i`);
  console.log(`Multiplication: ${complexNumber4.real} + ${complexNumber4.imaginary}i`);
  console.log(`Subtraction: ${complexNumber5.real} + ${complexNumber5.imaginary}i`);
  console.log(`Division: ${complexNumber6.real} + ${complexNumber6.imaginary}i`);
  
  // Generate and plot random complex numbers
  const randomComplexNumbers = generateRandomComplexNumbers(100);
  const scatterData = randomComplexNumbers.map((num) => new Point(num.real, num.imaginary));
  plotScatterChart(scatterData);
}

// Initialize the program
main();
