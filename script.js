function setFizzBuzzColor(element, text) { // This function sets the color of the FizzBuzz output.
    if (text === 'FizzBuzz') {
        element.style.color = 'blue';
    } else if (text === 'Fizz') {
        element.style.color = 'red';
    } else if (text === 'Buzz') {
        element.style.color = 'green';
    }
}

document.getElementById('fizzbuzzButton').addEventListener('click', function() {
    const outputDiv = document.getElementById('output'); // Get the output div.
    outputDiv.innerHTML = ''; // Clear previous output.
    for (let i = 1; i <= 100; i++) {
    let text = '';
    if (i % 3 === 0 && i % 5 === 0) { // Check for FizzBuzz.
      text = 'FizzBuzz';
    } else if (i % 3 === 0) { // Check for Fizz.
      text = 'Fizz';
    } else if (i % 5 === 0) { // Check for Buzz.
      text = 'Buzz';
    } else { // if neither Fizz nor Buzz is found then display the number.
      text = i;
    }
    const p = document.createElement('p'); // Create a new paragraph element.
    p.textContent = text; // Set the text content of the paragraph.
    outputDiv.appendChild(p); // Append the paragraph to the output div.
    setFizzBuzzColor(p, text); // Set color based on FizzBuzz rules.
    }
  });