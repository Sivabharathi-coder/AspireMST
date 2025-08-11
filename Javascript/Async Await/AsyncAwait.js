function orderPizza(flavor, callback) {
  console.log(`Ordering ${flavor} pizza...`);

  setTimeout(() => {
    console.log(`${flavor} pizza is ready!`);
    callback();
  }, 2000);
}

function eatPizza() {
  console.log("Eating pizza 😋");
}

orderPizza("Margherita", eatPizza);
