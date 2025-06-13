import React from 'react';
import './index.css';

const NumberGenerator = () => {
  // Function to check if a number is prime
  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  };

  const getColorClass = (num) => {
    if (isPrime(num)) return 'prime';
    return num % 2 === 0 ? 'even' : 'odd';
  };

  const numbers = Array.from({ length: 32 }, (_, i) => i);

  return (
    <div className="number-generator">
      <h1>30 Days Of React</h1>
      <h2>Number Generator</h2>
      <div className="number-container">
        {numbers.map((num) => (
          <div key={num} className={`number ${getColorClass(num)}`}>
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberGenerator;