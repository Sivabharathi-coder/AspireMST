// Server Component


import React from 'react';

async function fetchData() {
    const JobList = await fetch('https://dummyjson.com/users').then(res => res.json());

    return (
        <div>
            <h1>Job List</h1>
            <ul>
                {JobList.users.map(user => (
                    <li key={user.id}>
                        {user.firstName} {user.lastName} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}



// Server Function 

async function applyToJob(formData) {
    "use server";
    const jobId = formData.get("jobId");
    const applicant = formData.get("name");

    console.log(` Application received for Job ID ${jobId} from ${applicant}`);
}



// Client Component (browser form)
"use client";
function ApplyJobForm({ jobId }) {
    return (
        <form action={applyToJob}>
            <input type="hidden" name="jobId" value={jobId} />
            <input type="text" name="name" placeholder="Your name" required />
            <button type="submit">Apply</button>
        </form>
    );
}