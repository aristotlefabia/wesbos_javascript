// console.log('0000');

const toppings = [
  'Mushrooms ',
  'Tomatoes',
  'Eggs',
  'Chili',
  'Lettuce',
  'Avocado',
  'Chiles',
  'Bacon',
  'Pickles',
  'Onions',
  'Cheese',
];

const buns = ['egg', 'wonder', 'brioche'];

const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};

const prices = {
  hotDog: 453,
  burger: 765,
  sausage: 634,
  corn: 234,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

function find(key, field, array) {
  return array.find((element) => {
    if (element[field] === key) {
      return true;
    }
  });
}

function wordFind(word) {
  return function (element) {
    return element.comment.includes(word);
  };
}

function genericWordFinder(word, field) {
  return function (element) {
    console.log(word, '(', field, ')');
    return element[field].includes(word);
  };
}

function genericNumberPropertyFilter(n, field) {
  return function (element) {
    return element[field] > n;
  };
}

const like = feedback.find(wordFind('like'));
const index = feedback.findIndex(wordFind('like'));
console.log('index:', index, ' object:', like);

const withThe = feedback.filter(genericWordFinder('the', 'comment'));
console.log(withThe);

// remove the one star rating however you like

const above1star = feedback.filter(genericNumberPropertyFilter(1, 'rating'));
console.log(above1star);

console.log(
  orderTotals.sort(function (a, b) {
    return a < b ? -1 : 1;
  })
); // if a < b, a comes first (-1)

const pricesList = Object.entries(prices);

console.log(
  Object.fromEntries(pricesList.sort((a, b) => (a[1] < b[1] ? -1 : 1)))
);

// console.log(
//   prices.sort(function (obj1, obj2) {
//     console.log(obj1, '-', obj2);
//     return 0;
//   })
// );

// console.log('(', find('Love the burgs', 'comment', feedback), ')');
// console.log('(', find('Love the burgsccc', 'comment', feedback), ')');
// console.log(result);

// console.log(feedback.comment.includes('Ambiance needs work'));
