import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import { UserContext } from './context/userContext';
import jwt_decode from 'jwt-decode'

//Page imports
import Home from './pages/home';
import Login from './pages/login';
import Account from './pages/account';
import Register from './pages/register';
import Search from './pages/search';
import Property from './pages/property';

//Component imports
import NavigationBar from './components/navigation';

function App() {
  //Establishing context from local storage
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null);

  React.useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'))
    const storedToken = JSON.parse(localStorage.getItem('token'))

    if (storedToken ) {
      try {
        const tokenExp = new Date(jwt_decode(storedToken).exp * 1000)
        if (tokenExp > Date.now()) {
          setUser(storedUser);
          setToken(storedToken);
        }
      }
      catch {
        //Fail silently
      }
    }
  }, [])

  return (
    <UserContext.Provider value={{
      user,
      token,
      setUser,
      setToken
    }}>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route index path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/account" element={<Account />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/property/:propertyId" element={<Property />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
