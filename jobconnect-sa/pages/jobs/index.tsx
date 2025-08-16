import React, { useState, useEffect } from "react";
import JobCard from "../../components/commons/JobCard";
import Loading from "../../components/commons/Loading";
import { JobProps } from "../../interfaces";

const JobsPage = () => {
  const [jobs, setJobs] = useState<JobProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [page, setPage] = useState(1);
  const jobsPerPage = 2; // Show 2 jobs per page

  // Dummy job data (you can replace with API later)
  const dummyJobs: JobProps[] = [
    {
      id: "1",
      title: "Admin Assistant",
      company: "ABC Company",
      location: "Johannesburg",
      type: "Full-time",
      salary: "R10,000 / month",
      description: "Assist with admin tasks",
      postedDate: "2025-08-10",
    },
    {
      id: "2",
      title: "Customer Service Rep",
      company: "XYZ Ltd",
      location: "Cape Town",
      type: "Part-time",
      salary: "R6,500 / month",
      description: "Handle customer inquiries",
      postedDate: "2025-08-12",
    },
    {
      id: "3",
      title: "Data Entry Clerk",
      company: "DataPro",
      location: "Pretoria",
      type: "Full-time",
      salary: "R8,500 / month",
      description: "Enter data accurately",
      postedDate: "2025-08-14",
    },
    {
      id: "4",
      title: "Receptionist",
      company: "Hotel Stay",
      location: "Durban",
      type: "Full-time",
      salary: "R9,000 / month",
      description: "Welcome guests and manage bookings",
      postedDate: "2025-08-13",
    },
  ];

  // Simulate loading data
  useEffect(() => {
    setTimeout(() => {
      setJobs(dummyJobs);
      setLoading(false);
    }, 1000);
  }, []);

  // Filtering logic
  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (location ? job.location === location : true) &&
      (type ? job.type === type : true) &&
      (salary ? job.salary.includes(salary) : true)
    );
  });

  // Pagination logic
  const startIndex = (page - 1) * jobsPerPage;
  const paginatedJobs = filteredJobs.slice(startIndex, startIndex + jobsPerPage);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Available Jobs</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1); // reset page on new search
        }}
        className="border p-2 rounded w-full mb-4"
      />

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Location Filter */}
        <select
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            setPage(1);
          }}
          className="border p-2 rounded"
        >
          <option value="">All Locations</option>
          <option value="Johannesburg">Johannesburg</option>
          <option value="Cape Town">Cape Town</option>
          <option value="Pretoria">Pretoria</option>
          <option value="Durban">Durban</option>
        </select>

        {/* Job Type Filter */}
        <select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            setPage(1);
          }}
          className="border p-2 rounded"
        >
          <option value="">All Types</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
        </select>

        {/* Salary Filter */}
        <select
          value={salary}
          onChange={(e) => {
            setSalary(e.target.value);
            setPage(1);
          }}
          className="border p-2 rounded"
        >
          <option value="">All Salaries</option>
          <option value="R6,500">R6,500+</option>
          <option value="R8,500">R8,500+</option>
          <option value="R10,000">R10,000+</option>
        </select>
      </div>

      {/* Jobs Display */}
      {loading ? (
        <Loading />
      ) : paginatedJobs.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {paginatedJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      ) : (
        <p>No jobs found.</p>
      )}

      {/* Pagination */}
      {!loading && filteredJobs.length > 0 && (
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default JobsPage;
