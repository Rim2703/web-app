import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';
import SearchBar from './SearchBar';

function UserList() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const usersPerPage = 20;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/users?page=${currentPage}`);
        const data = await response.json();
        console.log(data);
        setUsers(data.users);
        setFilteredUsers(data.users);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleSearch = query => {
    const filtered = users.filter(user => {
      const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
      return fullName.includes(query.toLowerCase());
    });
    setFilteredUsers(filtered);
  };

  const goToPage = page => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <h1>User Management Application</h1>
      <SearchBar handleSearch={handleSearch} />

      <div className="user-list">
        {filteredUsers.map(user => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>

      <div className="pagination">
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>

        {Array.from({ length: usersPerPage }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}

        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default UserList;




