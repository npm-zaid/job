import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const JobTracker = () => {
  const [company, setCompany] = useState("");
  const [link, setLink] = useState("");
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState("all");
  const [editId, setEditId] = useState(null);
  const listRefs = useRef({});

  // Load saved jobs
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("jobs") || "[]");
    setJobs(stored);
  }, []);

  // Save jobs
  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  // Animate on new addition
  useEffect(() => {
    jobs.forEach((job) => {
      const el = listRefs.current[job.id];
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out" }
        );
      }
    });
  }, [jobs]);

  // Add or Update Job
  const handleAddOrUpdate = () => {
    if (!company.trim()) return alert("Please enter a company name.");
    if (editId) {
      // Update mode
      setJobs((prev) =>
        prev.map((j) =>
          j.id === editId ? { ...j, name: company.trim(), link: link.trim() } : j
        )
      );
      setEditId(null);
      setCompany("");
      setLink("");
    } else {
      // Add new job
      const newJob = {
        id: Date.now(),
        name: company.trim(),
        link: link.trim() || null,
        status: "pending",
      };
      setJobs([...jobs, newJob]);
      setCompany("");
      setLink("");
    }
  };

  // Delete job
  const handleDelete = (id) => {
    const el = listRefs.current[id];
    if (el) {
      gsap.to(el, {
        opacity: 0,
        y: 30,
        duration: 0.4,
        onComplete: () => {
          setJobs((prev) => prev.filter((j) => j.id !== id));
        },
      });
    } else {
      setJobs((prev) => prev.filter((j) => j.id !== id));
    }
  };

  // Edit job
  const handleEdit = (job) => {
    setEditId(job.id);
    setCompany(job.name);
    setLink(job.link || "");
  };

  // Update status
  const updateStatus = (id, status) => {
    setJobs((prev) =>
      prev.map((j) => (j.id === id ? { ...j, status } : j))
    );

    const el = listRefs.current[id];
    if (el) {
      const color =
        status === "success"
          ? "rgba(34,197,94,0.4)"
          : "rgba(239,68,68,0.4)";
      gsap.fromTo(
        el,
        { boxShadow: `0 0 0px ${color}` },
        {
          boxShadow: `0 0 25px ${color}`,
          duration: 0.5,
          yoyo: true,
          repeat: 1,
        }
      );
    }
  };

  // Status color
  const getCardColor = (status) => {
    switch (status) {
      case "success":
        return "border-green-400 bg-green-900/60";
      case "rejected":
        return "border-red-400 bg-red-900/60";
      default:
        return "border-yellow-400 bg-yellow-900/60";
    }
  };

  const filtered =
    filter === "all" ? jobs : jobs.filter((j) => j.status === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white flex flex-col items-center p-6">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 drop-shadow-lg">
          💼 Job Hunt Tracker
        </h1>

        {/* Input Card */}
        <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 mb-6 backdrop-blur-lg shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company name"
              className="col-span-2 bg-gray-900/60 text-white border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Job link (optional)"
              className="bg-gray-900/60 text-white border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="flex justify-between">
            <button
              onClick={handleAddOrUpdate}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg px-5 py-2 transition-transform transform hover:scale-105 shadow-lg"
            >
              {editId ? "✏️ Update Job" : "+ Add Job"}
            </button>

            {editId && (
              <button
                onClick={() => {
                  setEditId(null);
                  setCompany("");
                  setLink("");
                }}
                className="bg-gray-700 hover:bg-gray-600 text-white rounded-lg px-4 py-2 transition"
              >
                Cancel
              </button>
            )}
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex justify-between items-center mb-5 bg-gray-800/50 border border-gray-700 rounded-xl p-3 shadow-inner">
          <span className="text-gray-400 font-medium">Filter by Status:</span>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-gray-900 text-white border border-gray-700 rounded-lg px-3 py-1 focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="success">Success</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        {/* Job List */}
        <ul className="space-y-4">
          {filtered.map((job) => (
            <li
              key={job.id}
              ref={(el) => (listRefs.current[job.id] = el)}
              className={`p-4 border rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center transition-all duration-300 hover:scale-[1.02] ${getCardColor(
                job.status
              )}`}
            >
              <div>
                {job.link ? (
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-blue-400 hover:underline"
                  >
                    {job.name}
                  </a>
                ) : (
                  <span className="text-lg font-bold text-white">
                    {job.name}
                  </span>
                )}
                <p className="text-sm text-gray-400 capitalize mt-1">
                  Status: {job.status}
                </p>
              </div>

              <div className="mt-3 md:mt-0 flex flex-wrap gap-2">
                <button
                  onClick={() => updateStatus(job.id, "success")}
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md transition-transform hover:scale-105"
                >
                  ✅
                </button>
                <button
                  onClick={() => updateStatus(job.id, "rejected")}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md transition-transform hover:scale-105"
                >
                  ❌
                </button>
                <button
                  onClick={() => handleEdit(job)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded-md transition-transform hover:scale-105"
                >
                  ✏️
                </button>
                <button
                  onClick={() => handleDelete(job.id)}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded-md transition-transform hover:scale-105"
                >
                  🗑
                </button>
              </div>
            </li>
          ))}
        </ul>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-10 text-lg">
            No job entries yet. Add one to get started!
          </p>
        )}
      </div>
    </div>
  );
};

export default JobTracker;
