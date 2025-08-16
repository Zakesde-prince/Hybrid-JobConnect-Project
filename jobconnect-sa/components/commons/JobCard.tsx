import React from "react";
import { JobProps } from "../../interfaces";

const JobCard: React.FC<JobProps> = ({
  title,
  company,
  location,
  type,
  salary,
  postedDate,
}) => {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{company}</p>
      <p>{location} • {type}</p>
      <p className="text-green-600 font-semibold">{salary}</p>
      <p className="text-sm text-gray-500">Posted: {postedDate}</p>
    </div>
  );
};

export default JobCard;
