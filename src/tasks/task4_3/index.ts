interface Printable {
  print(): void;
}

class GenericBook implements Printable {
  private title: string;

  constructor(title: string) {
    this.title = title;
  }

  print(): void {
    console.log(`Title of the book: ${this.title}`);
  }
}

function invokePrint<T extends Printable>(obj: T, methodName: keyof T): void {
  if (typeof obj[methodName] === 'function') {
    // eslint-disable-next-line @typescript-eslint/ban-types
    (obj[methodName] as Function).call(obj);
  } else {
    console.log('The object does not implement the specified method.');
  }
}

function main() {
  const book = new GenericBook("Harry Potter and the Philosopher's Stone");
  invokePrint(book, 'print');
}

main();
