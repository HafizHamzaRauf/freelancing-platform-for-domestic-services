// UserTypeContext.js
import { createContext, useState } from "react";

const initialState = false;

export const UserTypeContext = createContext({
  isFreelancer: initialState,
  setIsFreelancer: () => {}, // Placeholder function for now
});

export const UserTypeProvider = ({ children }) => {
  const [isFreelancer, setIsFreelancer] = useState(initialState);

  const toggleUserType = () => {
    setIsFreelancer((prevIsFreelancer) => !prevIsFreelancer);
  };

  const contextValues = {
    isFreelancer,
    setIsFreelancer: toggleUserType,
  };

  return (
    <UserTypeContext.Provider value={contextValues}>
      {children}
    </UserTypeContext.Provider>
  );
};
