const user = { name: "Siva", age: 23 };
console.log(Object.keys(user)); 

console.log(Object.values(user)); 
console.log(Object.entries(user)); 
const extra = { role: "developer" };
const merged = Object.assign({}, user, extra);
console.log(merged); 

console.log(Object.hasOwn(user, "age"));
console.log(Object.hasOwn(user, "salary")); 

const frozenUser = Object.freeze({ name: "Siva" });
frozenUser.name = "Kavin";
console.log(frozenUser.name);


const sealed = Object.seal({ age: 23 });
sealed.age = 24;
sealed.newProp = "test";
console.log(sealed);

console.log(Object.is(0, -0)); 
console.log(Object.is(NaN, NaN)); 
const arr = [["lang", "JavaScript"], ["level", "advanced"]];
const obj = Object.fromEntries(arr);
console.log(obj);

