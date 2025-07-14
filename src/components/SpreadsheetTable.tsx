import React, { useMemo, useState } from "react";
import Badge from "./Badge";
import Avatar from "./Avatar";

const SpreadsheetTable = () => {
  const [search, setSearch] = useState("");

  const data = [
    {
      id: 1,
      job: "Launch social media campaign for product",
      submitted: "25-10-2024",
      status: "In-process",
      submitter: "Aisha Patel",
      url: "www.aishapatel.com",
      assigned: "Sophie Choudhury",
      priority: "Medium",
      dueDate: "20-11-2024",
      value: "6,200,000 ₹",
    },
    {
      id: 2,
      job: "Update press kit for company redesign",
      submitted: "30-10-2024",
      status: "Need to start",
      submitter: "Irfan Khan",
      url: "www.irfankhanpro.com",
      assigned: "Tejas Pandey",
      priority: "High",
      dueDate: "30-10-2024",
      value: "3,500,000 ₹",
    },
    {
      id: 3,
      job: "Finalize user testing feedback for app",
      submitted: "05-12-2024",
      status: "In-process",
      submitter: "Mark Johnson",
      url: "www.markjohnson.com",
      assigned: "Rachel Lee",
      priority: "Medium",
      dueDate: "10-12-2024",
      value: "4,750,000 ₹",
    },
    {
      id: 4,
      job: "Design new features for the website",
      submitted: "10-01-2025",
      status: "Complete",
      submitter: "Emily Green",
      url: "www.emilygreen.com",
      assigned: "Tom Wright",
      priority: "Low",
      dueDate: "15-01-2025",
      value: "5,900,000 ₹",
    },
    {
      id: 5,
      job: "Prepare financial report for Q4",
      submitted: "25-01-2025",
      status: "Blocked",
      submitter: "Jessica Brown",
      url: "www.jessicabrown.com",
      assigned: "Kevin Smith",
      priority: "Low",
      dueDate: "30-01-2025",
      value: "2,800,000 ₹",
    },
  ];

  // 🔍 Filtered rows based on search query
  const filteredData = useMemo(() => {
    if (!search) return data;
    return data.filter((row) =>
      Object.values(row).some((val) =>
        String(val).toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <div className="overflow-x-auto space-y-4 px-2">
      {/* Search Bar */}
      <div className="px-2">
      <input
  type="text"
  placeholder="Search in spreadsheet..."
  className="px-4 py-2 w-full max-w-md border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-400"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

      </div>

      {/* Table */}
      <table className="min-w-full border text-sm bg-white shadow rounded-md">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-2 border">#</th>
            <th className="px-4 py-2 border">Job Request</th>
            <th className="px-4 py-2 border">Submitted</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Submitter</th>
            <th className="px-4 py-2 border">URL</th>
            <th className="px-4 py-2 border">Assigned</th>
            <th className="px-4 py-2 border">Priority</th>
            <th className="px-4 py-2 border">Due Date</th>
            <th className="px-4 py-2 border">Est. Value</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{row.id}</td>
              <td className="px-4 py-2 border max-w-[200px] truncate">{row.job}</td>
              <td className="px-4 py-2 border">{row.submitted}</td>
              <td className="px-4 py-2 border">
                <Badge type="status" value={row.status} />
              </td>
              <td className="px-4 py-2 border">
                <div className="flex items-center gap-2">
                  <Avatar name={row.submitter} />
                  {row.submitter}
                </div>
              </td>
              <td className="px-4 py-2 border">
                <a
                  href={`https://${row.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {row.url}
                </a>
              </td>
              <td className="px-4 py-2 border">
                <div className="flex items-center gap-2">
                  <Avatar name={row.assigned} />
                  {row.assigned}
                </div>
              </td>
              <td className="px-4 py-2 border">
                <Badge type="priority" value={row.priority} />
              </td>
              <td className="px-4 py-2 border">{row.dueDate}</td>
              <td className="px-4 py-2 border">{row.value}</td>
            </tr>
          ))}

          {/* No results message */}
          {filteredData.length === 0 && (
            <tr>
              <td colSpan={10} className="text-center py-4 text-gray-500">
                No results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SpreadsheetTable;
