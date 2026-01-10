// Reusable greeting function
function welcome(greeting) {
  document.getElementById("outputBind").textContent =
    greeting + ", " + this.name;
}

// Members (objects)
let member1 = { name: "Arun" };
let member2 = { name: "Divya" };
let member3 = { name: "John" };

// Bind the function to each member
let greetArun = welcome.bind(member1, "Hello");
let greetDivya = welcome.bind(member2, "Hi");
let greetJohn = welcome.bind(member3, "Welcome");
