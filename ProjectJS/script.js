const message = document.getElementById("summary");
let allJobs = [];

fetch("data.json")
    .then(res => res.json())
    .then(data => {
        allJobs = data;
        displayJobs(data);
    });

function getAvgSalary(job) {
    return (job.salary.min + job.salary.max) / 2;
}

function showTopJob() {
    const topContainer = document.getElementById("top-job-card");

    const topJob = allJobs.reduce((a, b) =>
        getAvgSalary(a) > getAvgSalary(b) ? a : b
    );

    const avgSalary = getAvgSalary(topJob);

    topContainer.innerHTML = `
    <div class="card">
      <h3>🌟 Top Paying Job</h3>
      <h4>${topJob.title}</h4>
      <p><strong>Company:</strong> ${topJob.company.name}</p>
      <p><strong>Location:</strong> ${topJob.company.location}</p>
      <p><strong>Skills:</strong> ${topJob.skillsRequired.map(skill => `<span class="skill">${skill}</span>`).join(' ')}</p>
      <p><strong>Avg Salary:</strong> ₹${avgSalary.toLocaleString()}</p>
    </div>
  `;

    topContainer.style.display = "block";
}


function displayJobs(jobs) {
    const container = document.getElementById("job-list");
    container.innerHTML = "";
    let totalSalary = 0;

    // Get top-paying job and sort rest
    const topJob = jobs.reduce((a, b) =>
        getAvgSalary(a) > getAvgSalary(b) ? a : b
    );

    const otherJobs = jobs.filter(j => j !== topJob);
    const sortedJobs = [topJob, ...otherJobs];

    sortedJobs.forEach((job, index) => {
        const jobCard = document.createElement("div");
        jobCard.className = "job-card";

        const avgSalary = getAvgSalary(job);
        totalSalary += avgSalary;

        if (index === 0) jobCard.classList.add("highlight");

        jobCard.innerHTML = `
          <h5>${job.title}</h5>
          <p>${job.company.name}</p>
          <p>${job.skillsRequired.map(skill => `<span>${skill}</span>`).join(' ')}</p>
          <button onclick="useCall(${allJobs.indexOf(job)})">View (Call)</button>
          <button onclick="useApply(${allJobs.indexOf(job)})">Apply (Call)</button>
          <button onclick="useBind(${allJobs.indexOf(job)})">Bind (Call)</button>
          <p>₹${avgSalary.toLocaleString()}</p>
        `;

        container.appendChild(jobCard);
    });

    message.textContent = `Total Combined Avg Salary: ₹${totalSalary.toLocaleString()}`;
}

function showJobDetails(location, jobType) {
    alert(`${this.title} at ${this.company.name} (${jobType}) in ${location}`);
}

function useCall(index) {
    showJobDetails.call(allJobs[index], "Chennai", "Internship");
}

function useApply(index) {
    showJobDetails.apply(allJobs[index], ["Bangalore", "Full-time"]);
}

function useBind(index) {
    const boundFn = showJobDetails.bind(allJobs[index], "Remote", "Part-time");
    boundFn();
}

function highlightTopJob() {
    setTimeout(() => {
        let highest = allJobs.reduce((prev, curr) =>
            getAvgSalary(curr) > getAvgSalary(prev) ? curr : prev
        );
        alert(`Highest Paying Job: ${highest.title} at ${highest.company.name}`);
    }, 1000);
}

function generateSkillStats() {
    const skillCount = {};
    allJobs.forEach(job => {
        job.skillsRequired.forEach(skill => {
            skill = skill.toLowerCase();
            skillCount[skill] = (skillCount[skill] || 0) + 1;
        });
    });

    const container = document.getElementById("job-summary-portal");
    container.innerHTML = "<h3>Skill-wise Job Count</h3>";

    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    table.style.width = "100%";
    table.innerHTML = `
        <thead>
          <tr>
            <th style="border:1px solid #ddd;padding:8px;">Skill</th>
            <th style="border:1px solid #ddd;padding:8px;">Job Count</th>
          </tr>
        </thead>
        <tbody></tbody>
      `;

    const tbody = table.querySelector("tbody");

    for (let skill in skillCount) {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td style="border:1px solid #ddd;padding:8px;">${skill}</td>
          <td style="border:1px solid #ddd;padding:8px;">${skillCount[skill]}</td>
        `;
        tbody.appendChild(row);
    }

    container.appendChild(table);
}

function filterJobs() {
    const skill = document.getElementById("skillinput").value.trim().toLowerCase();
    const jobsfil = document.getElementById("jobsfilter");
    jobsfil.innerHTML = "";

    if (!skill) {
        displayJobs(allJobs);
        return;
    }

    const filteredJobs = allJobs.filter(job =>
        job.skillsRequired.some(s => s.toLowerCase().includes(skill))
    );

    filteredJobs.forEach(job => {
        const elem = document.createElement("div");
        elem.innerHTML = `
          <h1>${job.title}</h1>
          <p>${job.company.name}</p>
        `;
        jobsfil.appendChild(elem);
    });

    displayJobs(filteredJobs);
}

function generateReport() {
    const summaryContainer = document.getElementById("job-summary-portal");
    summaryContainer.innerHTML = "";

    let report = allJobs.map((job, index) => {
        const skills = job.skillsRequired.join(', ');
        const applicants = job.applications.map(app => {
            return `${app.name} (${app.status})`;
        }).join(" | ");

        const company = job.company.name.toUpperCase();

        return `Job ${index + 1}:\nTitle: ${job.title}\nCompany: ${company}\nSkills: ${skills}\nApplicants: ${applicants}\n\n`;
    }).join("----------\n");

    const pre = document.createElement("pre");
    pre.style.backgroundColor = "#f0f0f0";
    pre.style.padding = "10px";
    pre.style.border = "1px solid #ccc";
    pre.textContent = report;

    summaryContainer.appendChild(pre);
}