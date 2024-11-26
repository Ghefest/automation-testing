class Pizza {
  private size: string;
  private name: string;
  private price: number;

  constructor(size: string, name: string, price: number) {
    this.size = size;
    this.name = name;
    this.price = price;
  }

  toString(): string {
    return `Pizza{size='${this.size}', name='${this.name}', price=${this.price}}`;
  }
}

function bootstrap() {
  const pizza = new Pizza('Large', 'Pepperoni', 320);

  // Use reflection to get fields of the class
  const fields = Object.getOwnPropertyNames(pizza);

  console.log('All fields and their types:');
  fields.forEach((field) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fieldType = typeof (pizza as any)[field];
    console.log(`Field name: ${field}, Type: ${fieldType}`);
  });

  console.log('\nBefore changes:', pizza.toString());

  // Modify the value of the "price" field
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (pizza as any).price = 350;

  console.log('After changes:', pizza.toString());
}

bootstrap();
