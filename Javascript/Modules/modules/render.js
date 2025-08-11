export function renderJobs(jobs) {
  const container = document.getElementById("job-list");
  container.innerHTML = "";

  if (jobs.length === 0) {
    container.innerHTML = "<p>No jobs found for selected skills.</p>";
    return;
  }

  jobs.forEach(job => {
    const jobCard = document.createElement("div");
    jobCard.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Skills:</strong> ${job.skills.join(", ")}</p>
      <hr/>
    `;
    container.appendChild(jobCard);
  });
}
