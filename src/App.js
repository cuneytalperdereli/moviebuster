import React, { useEffect } from "react";
import Register from "./pages/Register";
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContextProvider";

const App = () => {


  
  return (
    <div className="bg-grey-100 dark:bg-[#090f0b]">
      <AuthContextProvider>
      <AppRouter/>
      </AuthContextProvider>
    </div>
  );
};

export default App;
