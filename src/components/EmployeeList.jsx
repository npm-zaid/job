import  { useEffect, useState } from "react";


const EmployeeList = () => {
  const [allEmployees, setAllEmployees] = useState([]); // Poora data store
  const [employees, setEmployees] = useState([]); // Filtered data
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("all"); // 'all' | 'male' | 'female'
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  // 1️⃣ Pehle ek baar poora data fetch karo
  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=100")
      .then(res => res.json())
      .then(data => {
        setAllEmployees(data.users);
        setEmployees(data.users);
      });
  }, []);

  // 2️⃣ Filter function (search + gender)
  useEffect(() => {
    let filtered = allEmployees;

    // Search Filter
    if (search.trim()) {
      filtered = filtered.filter(emp =>
        `${emp.firstName} ${emp.lastName}`
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    // Gender Filter with switch
    switch (gender) {
      case "male":
        filtered = filtered.filter(emp => emp.gender.toLowerCase() === "male");
        break;
      case "female":
        filtered = filtered.filter(emp => emp.gender.toLowerCase() === "female");
        break;
      default:
        break; // 'all' means no filter
    }

    setEmployees(filtered);
    setCurrentPage(1); // Filter change hone pe first page pe aao
  }, [search, gender, allEmployees]);

  // Pagination logic
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedEmployees = employees.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(employees.length / pageSize);


  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Employee Directory</h1>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          {/* Search Box */}
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 w-full md:w-1/3"
          />

          {/* Gender Filter using Switch (Dropdown) */}
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
          >
            <option value="all">All Genders</option>
            <option value="male">Male Only</option>
            <option value="female">Female Only</option>
          </select>
        </div>

        {/* Employee Cards */}
        {paginatedEmployees.length === 0 ? (
          <p className="text-center text-gray-400">No employees found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {paginatedEmployees.map((emp) => (
              <div
                key={emp.id}
                className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-2xl transition"
              >
                <img
                  src={emp.image}
                  alt={emp.firstName}
                  className="w-20 h-20 rounded-full mx-auto border-2 border-gray-700"
                />
                <h2 className="text-xl font-semibold text-center mt-3">
                  {emp.firstName} {emp.lastName}
                </h2>
                <p className="text-center text-gray-400">{emp.gender}</p>
                <p className="text-center text-sm text-gray-500">{emp.email}</p>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-8">

          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 disabled:opacity-50"
          >
            Prev
          </button>
          <span className="px-4 py-2 bg-gray-700 rounded-lg">
              {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 disabled:opacity-50"
          >
            Next
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
