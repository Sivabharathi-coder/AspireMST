class Job {
    constructor(title, job) {
        this.title = title;
        this.job = job;
    }
    apply() {
        console.log(`Applied for ${this.title}`);
    }
}

const job = new Job("Mern stack", "aspire");
job.apply();

class ITjob extends Job {
    constructor(title, job, tech) {
        super(title, job);
        this.tech = tech;
    }
    calltech() {
        console.log(`Tech job ${this.tech}`);
    }
}

const techjob = new ITjob("React", "IT", "MERN");
techjob.calltech();
techjob.apply();

class User {
    #password;

    constructor(name, password) {
        this.name = name;
        this.#password = password;
    }

    checkPassword(inputPassword) {
        return inputPassword === this.#password;
    }
}

const user = new User("Siva", "mypassword123");

console.log(user.name);
console.log(user.checkPassword("wrong"));
console.log(user.checkPassword("mypassword123"));
