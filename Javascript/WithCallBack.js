function makePizza(flavor) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${flavor} pizza is ready!`);
    }, 2000);
  });
}

async function orderAndEatPizza() {
  console.log("Ordering pizza...");
  const pizza = await makePizza("Pepperoni");
  console.log(pizza);
  console.log("Eating pizza 😋");
}

orderAndEatPizza();
