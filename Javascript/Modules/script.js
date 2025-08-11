import { jobs } from './modules/jobs.js';
import { renderJobs } from './modules/render.js';
import { filterBySkill } from './modules/utils.js';

const filteredJobs = filterBySkill(jobs, "React");

renderJobs(filteredJobs);
