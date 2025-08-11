import { users } from "./GeneratorJSON.js";



function* Generator(total) {

    for (let i = 1; i <= total; i++) {
        yield `https://jobapi.com/jobs?page=${i}`;
    }
}

const pages = Generator(2);



console.log(pages.next());
console.log(pages.next());

for (const url of pages) {
    console.log("url", url);
}

const jobForm = {
    fields: ["name", "email", "skills", "resume"],
    [Symbol.iterator]() {
        let i = 0;
        const fields = this.fields;
        return {
            next() {
                if (i < fields.length) {
                    return { value: fields[i++], done: false };
                }
                else {
                    return { done: true };
                }
            }
        }
    }
}


for (const field of jobForm) {
    console.log("fields", field);
}


// Generator 


const container = document.getElementById("userContainer");
const button = document.getElementById("loadBtn");

function* userContainer(users, pageSize) {
    for (let i = 0; i < users.length; i += pageSize) {
        yield users.slice(i, i + pageSize);
    }

}

const gen = userContainer(users, 3)

button.addEventListener("click", () => {
    const { value, done } = gen.next();
    if (done) {
        button.disabled = true;
        button.textContent = "No more Users";
        return;
    }
    value.forEach(user => {
        const div = document.createElement('div');
        div.textContent = `${user.name}- ${user.role}`;
        container.appendChild(div);
    });

});


// Iterator  

const Iteratorcontainer = document.getElementById("Iteratorcontainer");
const Iteratorbutton = document.getElementById("Iteratorbutton");

function Iterators(users, pageSize) {
    let index = 0;
    pageSize
    return {
        next: function () {
            if (index < users.length) {
                const value = users.slice(index, index + pageSize);
                index += pageSize;
                return { value, done: false };
            }

            return { done: true };
        }
    }
}

const genIterator = Iterators(users, 3);


Iteratorbutton.addEventListener("click", () => {
    const { value, done } = genIterator.next();
    if (done) {
        Iteratorbutton.textContent = "No More Users";
        return;
    }
    value.forEach(user => {
        const div = document.createElement('div');

        div.textContent = `${user.name} ${user.role}`;
        Iteratorcontainer.appendChild(div)
    })

})
