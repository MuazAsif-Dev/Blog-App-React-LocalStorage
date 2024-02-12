import { BrowserRouter } from "react-router-dom";

import { UserContextProvider } from "./context/UserContext";

import AppRoutes from "./routes";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <AppRoutes />
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
