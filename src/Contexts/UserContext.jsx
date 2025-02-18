import { createContext, useState } from 'react';

const UserContext = createContext();

const getUserFromToken = () => {
  const token = localStorage.getItem('token');

  if (!token) return null;

  return JSON.parse(atob(token.split('.')[1])).payload; 
  // token.split('.)[1] will get the part of the token containing user details
  // atob will convert the token into a string containing the details
  // JSON.parse will convert this string into a json object
  // we will get the .payload property of this object
};

function UserProvider({ children }) {
  const [user, setUser] = useState(getUserFromToken());

  const value = { user, setUser };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
