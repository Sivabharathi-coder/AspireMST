// Reusable function using `call`
function introduce(city) {
  const output = document.getElementById("outputCall");
  output.textContent = this.name + " from " + city;
}

// Object
let person = { name: "Kavin" };

// Function to call when button is clicked
function showIntroduction() {
  introduce.call(person, "Chennai");
}
