function counter() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
}
let countUp = counter();
countUp();
countUp();
