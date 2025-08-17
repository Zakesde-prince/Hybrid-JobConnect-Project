import React from "react";
import Link from "next/link";
import { JobProps } from "../../interfaces";

const JobCard: React.FC<JobProps> = ({
  id,
  title,
  company,
  location,
  type,
  salary,
}) => {
  return (
    <Link href={`/jobs/${id}`}>
      <div className="bg-gray-800 rounded-2xl p-4 shadow-md cursor-pointer hover:shadow-xl hover:translate-y-1 transition transform">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-blue-400">{company}</p>
        <p className="text-gray-300">{location} • {type} • {salary}</p>
      </div>
    </Link>
  );
};

export default JobCard;
