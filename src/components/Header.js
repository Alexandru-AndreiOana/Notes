import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


function Header() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };  

  return (
    <header>
        <div className="flex-child title">
            <h1>
                Notes
            </h1>
            <p>{user && user.email}</p>
        </div>
        <div className="flex-child logout">
            <button onClick={handleLogout} className='logoutBtn'>
                Sign Out
            </button>
        </div>
        
    </header>
  )
}

export default Header;
