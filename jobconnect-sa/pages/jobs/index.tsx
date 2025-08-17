import React, { useState, useEffect } from "react";
import JobCard from "../../components/commons/JobCard";
import Loading from "../../components/commons/Loading";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { JobProps } from "../../interfaces";

const JobsPage: React.FC = () => {
  const [jobs, setJobs] = useState<JobProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [page, setPage] = useState(1);
  const jobsPerPage = 4; // Show 4 jobs per page

  // Dummy job data (14 jobs)
  const dummyJobs: JobProps[] = [
    { id: "1", title: "Admin Assistant", company: "ABC Company", location: "Johannesburg", type: "Full-time", salary: "R10,000 / month", description: "Assist with admin tasks", postedDate: "2025-08-10" },
    { id: "2", title: "Customer Service Rep", company: "XYZ Ltd", location: "Cape Town", type: "Part-time", salary: "R6,500 / month", description: "Handle customer inquiries", postedDate: "2025-08-12" },
    { id: "3", title: "Data Entry Clerk", company: "DataPro", location: "Pretoria", type: "Full-time", salary: "R8,500 / month", description: "Enter data accurately", postedDate: "2025-08-14" },
    { id: "4", title: "Receptionist", company: "Hotel Stay", location: "Durban", type: "Full-time", salary: "R9,000 / month", description: "Welcome guests and manage bookings", postedDate: "2025-08-13" },
    { id: "5", title: "HR Assistant", company: "PeopleFirst", location: "Johannesburg", type: "Full-time", salary: "R9,500 / month", description: "Assist HR department", postedDate: "2025-08-15" },
    { id: "6", title: "Marketing Intern", company: "AdWorks", location: "Cape Town", type: "Part-time", salary: "R5,000 / month", description: "Support marketing team", postedDate: "2025-08-16" },
    { id: "7", title: "IT Support", company: "TechSolutions", location: "Pretoria", type: "Full-time", salary: "R12,000 / month", description: "Support IT systems", postedDate: "2025-08-17" },
    { id: "8", title: "Sales Assistant", company: "RetailCorp", location: "Durban", type: "Full-time", salary: "R7,500 / month", description: "Assist sales team", postedDate: "2025-08-18" },
    { id: "9", title: "Graphic Designer", company: "CreativeHub", location: "Johannesburg", type: "Full-time", salary: "R11,000 / month", description: "Design marketing materials", postedDate: "2025-08-19" },
    { id: "10", title: "Office Clerk", company: "AdminPro", location: "Cape Town", type: "Part-time", salary: "R6,000 / month", description: "Handle office tasks", postedDate: "2025-08-20" },
    { id: "11", title: "Junior Accountant", company: "FinExperts", location: "Pretoria", type: "Full-time", salary: "R10,500 / month", description: "Assist with accounting", postedDate: "2025-08-21" },
    { id: "12", title: "Receptionist Trainee", company: "HotelLux", location: "Durban", type: "Part-time", salary: "R5,500 / month", description: "Front desk support", postedDate: "2025-08-22" },
    { id: "13", title: "Logistics Assistant", company: "CargoFlow", location: "Johannesburg", type: "Full-time", salary: "R9,000 / month", description: "Support logistics operations", postedDate: "2025-08-23" },
    { id: "14", title: "Customer Success Rep", company: "ServiceNow", location: "Cape Town", type: "Full-time", salary: "R8,500 / month", description: "Ensure customer satisfaction", postedDate: "2025-08-24" },
  ];

  // Simulate loading
  useEffect(() => {
    setTimeout(() => {
      setJobs(dummyJobs);
      setLoading(false);
    }, 1000);
  }, []);

  // Filtering
  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (location ? job.location === location : true) &&
      (type ? job.type === type : true) &&
      (salary ? job.salary.includes(salary) : true)
    );
  });

  // Pagination
  const startIndex = (page - 1) * jobsPerPage;
  const paginatedJobs = filteredJobs.slice(startIndex, startIndex + jobsPerPage);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto pt-20 px-8">
        <h1 className="text-2xl font-bold mb-4">Available Jobs</h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="border bg-gray-800 text-white p-2 rounded w-full mb-4"
        />

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <select
            value={location}
            onChange={(e) => { setLocation(e.target.value); setPage(1); }}
            className="border bg-gray-800 text-white p-2 rounded"
          >
            <option value="">All Locations</option>
            <option value="Johannesburg">Johannesburg</option>
            <option value="Cape Town">Cape Town</option>
            <option value="Pretoria">Pretoria</option>
            <option value="Durban">Durban</option>
          </select>

          <select
            value={type}
            onChange={(e) => { setType(e.target.value); setPage(1); }}
            className="border bg-gray-800 text-white p-2 rounded"
          >
            <option value="">All Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
          </select>

          <select
            value={salary}
            onChange={(e) => { setSalary(e.target.value); setPage(1); }}
            className="border bg-gray-800 text-white p-2 rounded"
          >
            <option value="">All Salaries</option>
            <option value="R6,500">R6,500+</option>
            <option value="R8,500">R8,500+</option>
            <option value="R10,000">R10,000+</option>
          </select>
        </div>

        {/* Jobs Grid */}
        {loading ? (
          <Loading />
        ) : paginatedJobs.length > 0 ? (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {paginatedJobs.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center mt-8">No jobs found.</p>
        )}

        {/* Pagination */}
        {!loading && filteredJobs.length > 0 && (
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50 hover:bg-blue-500 transition"
            >
              Prev
            </button>
            <span>Page {page} of {totalPages}</span>
            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50 hover:bg-blue-500 transition"
            >
              Next
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default JobsPage;
