function bootstrap(): void {
  const charArray: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

  charArray.forEach((char) => process.stdout.write(char + ' '));

  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const vowelCount = charArray.reduce((count, char) => {
    return vowels.has(char) ? count + 1 : count;
  }, 0);

  console.log(`\nNumber of vowels: ${vowelCount}`);
}

bootstrap();
