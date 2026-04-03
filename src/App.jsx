import { useState } from 'react'


export default function App() {
  const [search, setSearch] = useState("");

  const users = [
    { id: 1, name: "Akshay", role: "Developer" },
    { id: 2, name: "Sachin", role: "Junior Dev" },
    { id: 3, name: "Tiger", role: "Tester" },
  ];

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100">
      <div className="bg-white p-6 rounded-xl shadow-xl w-80">
        <input
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 w-full mb-4 rounded"
        />

        {filtered.map(user => (
          <div key={user.id} className="mb-2 p-2 bg-gray-100 rounded">
            <h3>{user.name}</h3>
            <p className="text-sm text-gray-500">{user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}