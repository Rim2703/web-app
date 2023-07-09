// import React, { useEffect, useState } from 'react';
// import './App.css';
// import UserList from './components/UserList';
// import SearchBar from './components/SearchBar';

// function App() {
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/users');
//         const data = await response.json();
//         setUsers(data);
//         setFilteredUsers(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSearch = query => {
//     const filtered = users.filter(user => {
//       const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
//       return fullName.includes(query.toLowerCase())
//     });
//     setFilteredUsers(filtered);
//   };




//   return (
//     <div className="App">
//       <h1>User Management Application</h1>
//       <SearchBar handleSearch={handleSearch} />

//       <UserList users={filteredUsers} />

//     </div>
//   )
// }

// export default App;

import React from 'react'
import './App.css';
import UserList from './components/UserList'

const App = () => {
  return (
    <div className='App'>
      <UserList />
    </div>
  )
}

export default App


