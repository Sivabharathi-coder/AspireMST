function fetchDataWithCallback(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "Siva" };
    callback(data);
  }, 1000);
}

function handleData(data) {
  console.log("Callback result:", data);
}

fetchDataWithCallback(handleData); 

function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; 
      if (success) {
        resolve({ status: "Success", user: "Siva" });
      } else {
        reject("Something went wrong!");
      }
    }, 1000);
  });
}

fetchDataWithPromise()
  .then((result) => {
    console.log("Promise resolved:", result);
  })
  .catch((error) => {
    console.log("Promise rejected:", error);
  });

function getUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 2, name: "Bharathi" });
    }, 1500);
  });
}

async function displayUserData() {
  console.log("Fetching user...");
  const user = await getUserData();
  console.log("Async/Await result:", user);
}

displayUserData();