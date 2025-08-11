const parentElement = document.getElementById("promiseall");
const errorMessage = document.getElementsByClassName("errorMessage")[0];

const parentElement2 = document.getElementById("promiseallsetteled");
const errorMessage2 = document.getElementsByClassName("errorMessage2")[0];

const parentElement3 = document.getElementById("promiseany");

function innerHTMLdata(item) {
    return `
                <div class="userData_header">
                    <h2 class="userData_header--name">${item.firstName} ${item.lastName}</h2>
                    <p class="userData_header--username">@${item.username}</p>
                </div>
                <div class="userData_accordtion">
                    <div class="accordtion_item">
                        <h3 class="item_header">Contact</h3>
                        <div class="item_content">
                            <p><a href="mailto:${item.email}">${item.email}</a></p>
                            <p><em>${item.phone}</em></p>
                        </div>
                    </div>
                    <div class="accordtion_item">
                        <h3 class="item_header">Address</h3>
                        <div class="item_content">
                            <address>
                                ${item.address.address}<br>
                                ${item.address.city}, ${item.address.state} - ${item.address.postalCode}<br>
                                ${item.address.country}
                            </address>
                        </div>
                    </div>
                    <div class="accordtion_item">
                        <h3 class="item_header">Company</h3>
                        <div class="item_content">
                            <p class="item_content--header">${item.company.name}</p>
                            <p>Dept: ${item.company.department}</p>
                            <p>Role: ${item.company.title}</p>
                            <p>Address: ${item.company.address.address}, ${item.company.address.city}</p>
                        </div>
                    </div>
                    <div class="accordtion_item">
                        <h3 class="item_header">Crypto</h3>
                        <div class="item_content">
                            <p>Coin: ${item.crypto.coin}</p>
                            <p>Network: ${item.crypto.network}</p>
                            <p>Wallet: ${item.crypto.wallet}</p>
                        </div>
                    </div>
                </div>
            `;
}

function attachAccordionHandler() {
    document.querySelectorAll('.item_header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            header.classList.toggle("active");
            if (content.style.maxHeight && content.style.maxHeight !== "0px") {
                content.style.maxHeight = "0px";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
}

async function getUserdata(id) {
    try {
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        if (response.ok) {
            return await response.json();
        } else {
            return Promise.reject(new Error(response.statusText));
        }
    } catch (error) {
        return Promise.reject(error);
    }
}

const userIDs = [1, 2, 3, 4];
const userData = userIDs.map(id => getUserdata(id));

// Promise.all
Promise.all(userData)
    .then(response => {
        response.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("userData");
            div.innerHTML = innerHTMLdata(item);
            parentElement.append(div);
        });
        attachAccordionHandler();
    })
    .catch(error => {
        errorMessage.textContent = error.message;
        errorMessage.style.display = "block";
    });

// Promise.allSettled
Promise.allSettled(userData)
    .then(results => {
        results.forEach(result => {
            const div = document.createElement("div");
            div.classList.add("userData");
            if (result.status === "fulfilled") {
                div.innerHTML = innerHTMLdata(result.value);
            } else {
                div.innerHTML = `<div class="errorMessage">Error: ${result.reason.message}</div>`;
            }
            parentElement2.append(div);
        });
        attachAccordionHandler();
    });

// Promise.any
Promise.any([getUserdata(1), getUserdata(2), getUserdata(3)])
    .then(item => {
        const div = document.createElement("div");
        div.classList.add("userData");
        div.innerHTML = innerHTMLdata(item);
        parentElement3.append(div);
        attachAccordionHandler();   
    })
    .catch(error => {
        const err = document.createElement("div");
        err.className = "errorMessage";
        err.textContent = error.message;
        parentElement3.append(err);
    });

// Promise.race

const parentElement4 = document.getElementById("promiserace");

Promise.race([ getUserdata(2), getUserdata(3)])

    .then(response => {
        const div = document.createElement("div");
        div.classList.add("userData");
        div.innerHTML = innerHTMLdata(response);
        parentElement4.append(div);
        attachAccordionHandler();


        console.log("Promise.race resolved: ", response);
    })
    .catch(error => {
        const err = document.createElement("div");
        err.className = "errorMessage";
        err.textContent = "Promise.race error: " + error.message;
        parentElement4.append(err);
    });
