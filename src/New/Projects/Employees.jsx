import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Gitlab } from 'lucide-react';

const Employees = () => {
  const [all, setAll] = useState([])
  const [filteredEmp, setFilteredEmp] = useState([])
  const [search, setSearch] = useState('')
  const [gender, setGender] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const employeesPerPage = 9

  useEffect(() => {
    const fetching = async () => {
      const res = await axios.get("https://dummyjson.com/users?limit=100")
      const data = res.data.users
      setAll(data)
      setFilteredEmp(data)
    }
    fetching()
  }, [])

  useEffect(() => {
    let filtered = structuredClone(all)
    if (search.trim()) {
      filtered = filtered.filter((emp) =>
        `${emp.firstName} ${emp.lastName}`
          .toLowerCase()
          .includes(search.toLowerCase().trim())
      )
    }
    if (gender) {
      filtered = filtered.filter((emp) => emp.gender === gender)
    }
    setFilteredEmp(filtered)
    setCurrentPage(1) // reset to first page after filtering
  }, [gender, search, all])

  // pagination calculation
  const indexOfLast = currentPage * employeesPerPage
  const indexOfFirst = indexOfLast - employeesPerPage
  const currentEmployees = filteredEmp.slice(indexOfFirst, indexOfLast)
  const totalPages = Math.ceil(filteredEmp.length / employeesPerPage)

  return (
    <div className='min-h-screen bg-zinc-900 w-full'>
      {/* Header Filters */}
      <div className='grid grid-cols-3 p-6 grid-cols-[1fr_2fr_1fr] items-center gap-6'>
        <Gitlab size={40} className='text-white' />
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder='search by name'
          className='outline-none w-full bg-zinc-700/60 focus:border border-fuchsia-300 rounded-lg p-3 text-white'
        />
        <select
          onChange={(e) => setGender(e.target.value)}
          className='outline-none bg-zinc-700/60 focus:border border-fuchsia-300 rounded-lg p-3 text-white'
        >
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </div>

      {/* Employees list */}
      <div className='grid grid-cols-3 p-4 gap-3'>
        {currentEmployees.map((item) => (
          <div className='bg-fuchsia-400 p-4 uppercase font-bold' key={item.id}>
            <div className='text-white'>
              {item.firstName} {item.lastName}{' '}
              <span className='italic text-black'>{item.gender}</span>
            </div>
            <div className='text-white'>{item.email}</div>
            <div className='text-white'>{item.company.title}</div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className='flex justify-center items-center gap-4 py-6'>
        <button
          onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className='px-4 py-2 bg-zinc-700 text-white rounded-lg disabled:opacity-50'
        >
          Prev
        </button>

        <span className='text-white'>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className='px-4 py-2 bg-zinc-700 text-white rounded-lg disabled:opacity-50'
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Employees
