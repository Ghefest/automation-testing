export function throwException() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const testObject: string | any = null;

  try {
    // Attempt to call a method on a null object, which will throw an error
    testObject.toUpperCase();
  } catch (error) {
    if (error instanceof TypeError) {
      // Handle the error and throw a custom error message
      throw new Error('You need to initialize it first');
    } else {
      // Re-throw any unexpected errors
      throw error;
    }
  }
}
