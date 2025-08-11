// Reusable display function (not inside any object)
function displayUser(city, age) {
  document.getElementById("outputApply").textContent =
    this.name + " from " + city + ", age " + age;
}

// User objects
let user1 = { name: "Anu" };
let user2 = { name: "Karan" };
let user3 = { name: "Meera" };

// Wrapper function to apply displayUser on different users
function showUser(user, args) {
  displayUser.apply(user, args);
}
