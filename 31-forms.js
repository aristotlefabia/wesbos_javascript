console.log('it works');

const link = document.querySelector('.wes');

link.addEventListener('click', function (e) {
  e.preventDefault();

  const shouldChange = confirm('Continue?');
  if (shouldChange) {
    window.location = e.currentTarget.href;
  }
});

const src = document.querySelector('[for="name"]');
console.log(src);

const script = document.querySelector('script');
console.log(script);

const form = document.querySelector("[name='signup']");

form.addEventListener('submit', function (e) {
  console.dir(e);
  console.log(e.currentTarget.name.value);
  console.log(e.currentTarget.email.value);
  console.log(e.currentTarget.agree.checked);
  console.log(e.currentTarget.checked);
  e.preventDefault();
});
