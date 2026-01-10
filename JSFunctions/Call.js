function introduce(city) {
  console.log(this.name + " from " + city);
}
let person = { name: "Kavin" };
introduce.call(person, "Chennai");
