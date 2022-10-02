import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'

//Page imports
import Home from './pages/home';
import Login from './pages/login';
import Account from './pages/account';
import Register from './pages/register';
import Search from './pages/search';
import Property from './pages/property';

//Component imports
import NavigationBar from './components/navigation';

//Creating user context
export const UserContext = React.createContext();

function App() {
  return (
    <UserContext.Provider>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route index path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/account" element={<Account />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/property" element={<Property />}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
