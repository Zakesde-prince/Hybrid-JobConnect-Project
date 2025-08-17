import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { JobProps } from "../../interfaces";
import { FaMapMarkerAlt, FaClock, FaMoneyBillWave } from "react-icons/fa";

// Dummy jobs (all 14 jobs)
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

const JobDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const job = dummyJobs.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-900 text-white">
        <Navbar />
        <main className="flex-grow max-w-4xl mx-auto pt-20 px-8">
          <p className="text-gray-400 text-center mt-20 text-xl">Job not found.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto pt-20 px-8">
        <h1 className="text-4xl font-bold mb-2">{job.title}</h1>
        <p className="text-blue-400 text-lg mb-4">{job.company}</p>

        <div className="flex flex-wrap gap-6 mb-6 text-gray-300">
          <span className="flex items-center gap-2"><FaMapMarkerAlt /> {job.location}</span>
          <span className="flex items-center gap-2"><FaClock /> {job.type}</span>
          <span className="flex items-center gap-2"><FaMoneyBillWave /> {job.salary}</span>
          <span className="text-gray-500">Posted: {job.postedDate}</span>
        </div>

        <p className="text-gray-300 leading-relaxed mb-6">{job.description}</p>

        <button className="px-6 py-3 bg-blue-500 rounded hover:bg-blue-600 transition">
          Apply Now
        </button>
      </main>

      <Footer />
    </div>
  );
};

export default JobDetails;
