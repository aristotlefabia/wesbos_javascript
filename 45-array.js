function CreateRange(start, end) {
  return Array.from({ length: end - start + 1 }, function (dummy, index) {
    return index + start;
  });
}

console.log(CreateRange(2, 5));

MyObject = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
};

console.log(Object.entries(MyObject));
console.log(Object.keys(MyObject));
console.log(Object.values(MyObject));

Object.entries(MyObject).forEach(([key, value]) => {
  // const [key, value] = e;
  console.log('key:', key, ' value:', value);
});

fruits = ['apple', 'banana', 'cranberry', 'durian'];

copy = fruits.slice(0);

console.log(fruits);

copy[0] = 'XXX';
console.log(fruits);
console.log(copy);

// delete 1 - 2

fruits.splice(1, 2);
console.log(fruits);
// instance

// indexOf

arrObj = [];

objs = Object.entries(MyObject);

objs.forEach(([key, val]) => {
  arrObj.push({ [key]: val });
});

console.log(arrObj);

const index = arrObj.indexOf({ 2: 'two' }, ([property, value]) => {
  if (property === 2 && value === 'two') {
    return [property, value];
  }
  return false;
});

console.log('index: ', index);
