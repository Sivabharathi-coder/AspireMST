function introduce(city, age) {
  console.log(this.name + " from " + city + ", age " + age);
}
let user = { name: "Anu" };
introduce.apply(user, ["Salem", 24]);
