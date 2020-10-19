const person1 = {
  name: 'larry',
};

const person2 = Object.freeze(person1);

person2.name = 'larry2';

console.log(person1.name, person2.name);

const person3 = { ...person1 };

person3.name = 'larryx';

console.log(person1.name, person3.name);
