function f() {
  console.log('f()');
}

const names = new Map();
names.set(1, { name: 'james', last: 'bond' });
names.set(100, { model: 'intel', year: '2020' });
names.set(2, { model: 'amd', year: 2004 });
names.set(4, f);

console.log(names);
for (n of names) {
  [key, val] = n;
  console.log(n[0], ':', n[1], '  -- ', key, ':', val);
}

// names.delete(1);

console.log(names.get(1));
console.log(names);

console.log(names.get(4));
const func = names.get(4);
func();
// console.log(key, ',', val);

const behavior = new Map([
  [
    'jump',
    function () {
      console.log('jump');
    },
  ],
  [
    'walk',
    function () {
      console.log('walk');
    },
  ],
]);

console.log(behavior);
behavior.get('walk')();
behavior.get('jump')();

function print() {
  console.log('print');
}

const behaveObj = { obj: print, name: 'john' };
behaveObj.obj();

const text = JSON.stringify(behaveObj);

console.log(text);
