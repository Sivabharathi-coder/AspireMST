function welcome(greeting) {
  console.log(greeting + ", " + this.name);
}
let member = { name: "Arun" };
let greetMember = welcome.bind(member);
greetMember("Welcome");
