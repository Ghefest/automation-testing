import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query: string): Promise<string> {
  return new Promise((resolve) => rl.question(query, resolve));
}

export async function arraySum() {
  const sizeInput = await askQuestion('Введіть кількість чисел у масиві: ');
  const size = parseInt(sizeInput, 10);

  if (isNaN(size) || size <= 0) {
    console.log('Будь ласка, введіть дійсне число.');
    rl.close();
    return;
  }

  const arr: number[] = [];

  console.log('Введіть числа: ');
  for (let i = 0; i < size; i++) {
    const numInput = await askQuestion(`Число ${i + 1}: `);
    const num = parseInt(numInput, 10);
    if (isNaN(num)) {
      console.log('Будь ласка, введіть дійсне число.');
      i--; // Decrement i to retry the current index
    } else {
      arr.push(num);
    }
  }

  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  console.log('Сума чисел: ' + sum);

  rl.close();
}
