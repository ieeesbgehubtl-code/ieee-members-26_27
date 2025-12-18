import { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import { m } from '../types/member';

export function Members() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<string>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');

  const courses = useMemo(() => {
    const uniqueCourses = Array.from(new Set(m.map(m => m.course)));
    return ['All', ...uniqueCourses.sort()];
  }, []);

  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(m.map(m => m.year)));
    return ['All', ...uniqueYears.sort()];
  }, []);

  const filteredMembers = useMemo(() => {
    return m.filter(member => {
      const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCourse = selectedCourse === 'All' || member.course === selectedCourse;
      const matchesYear = selectedYear === 'All' || member.year === selectedYear;
      return matchesSearch && matchesCourse && matchesYear;
    });
  }, [searchTerm, selectedCourse, selectedYear]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl shadow-2xl p-6 mb-8 border border-blue-500">
          <div className="flex items-center gap-3 mb-6">
            <Filter className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold text-white">Filter Members</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-blue-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="w-full px-4 py-3 bg-gray-900 border border-blue-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {courses.map(course => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>

            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full px-4 py-3 bg-gray-900 border border-blue-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          <div className="mt-4 text-gray-400">
            Showing {filteredMembers.length} of {m.length} members
          </div>
        </div>

        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-blue-500">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-900 bg-opacity-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-blue-300 uppercase tracking-wider">
                    S.No
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-blue-300 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-blue-300 uppercase tracking-wider">
                    Course
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-blue-300 uppercase tracking-wider">
                    Year
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-blue-300 uppercase tracking-wider">
                    Role / Position
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {filteredMembers.map((member, index) => (
                  <tr
                    key={index}
                    className="hover:bg-blue-900 hover:bg-opacity-20 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {m.indexOf(member) + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      {member.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {member.course}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {member.year}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-400 font-medium">
                      {member.position}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-400">No members found matching your filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
