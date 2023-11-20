export function treeMap() {
  const arr = [1, 2, 3, 4, 5];

  // Create a Map and populate it with key-value pairs from the array
  const treeMap = new Map<number, number>();
  arr.forEach((value, index) => {
    treeMap.set(value, index);
  });

  // a) Add a key-value pair to the map
  treeMap.set(6, 52);
  console.log(
    'Додали пару ключ-значення (6, 52):',
    Array.from(treeMap.entries()),
  );

  // b) Remove a key-value pair from the map
  treeMap.delete(2);
  console.log("Видалили елемент з ключем '2':", Array.from(treeMap.entries()));

  // c) Check if a key is in the map
  if (treeMap.has(6)) {
    console.log('Такий ключ існує');
  } else {
    console.log('Такий ключ відсутній');
  }

  // d) Find the value associated with a given key
  if (treeMap.has(3)) {
    const value = treeMap.get(3);
    console.log('Значення ключа 3:', value);
  } else {
    console.log('Ключ 3 відсутній');
  }

  // e) Print all the keys and values in the map
  console.log('Всі пари ключ-значення в мапі:', Array.from(treeMap.entries()));
}
