export function filterBySkill(jobs, skill) {
    return jobs.filter(job => job.skills.includes(skill));
}
