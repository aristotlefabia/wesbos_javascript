function outer() {
  const outerVar = 'outer var';
  let score = 0;

  function inner() {
    const innerVar = 'inner var';
    // console.log(innerVar);
    // console.log(outerVar);
    console.log(`${innerVar} - ${outerVar} ${score}`);
    score += 1;
  }

  return inner;
}

const innerFn = outer();
innerFn();
innerFn();
innerFn();
