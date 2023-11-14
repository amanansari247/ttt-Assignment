import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/shared/Navbar';
import { User } from './components/Users/User';
import { Footer } from './components/shared/Footer';
import UsersList from './components/Users/UsersList'; 
import usersData from './components/Resp';
import './App.css'

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<UsersList users={usersData} />} />
         
          {usersData.map(user => (
            <Route key={user.id} path={`/${user.id}`} element={<User userData={user} />} />
          ))}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
