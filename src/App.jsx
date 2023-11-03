import React  from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import RepoCards from "./components/RepoCards.jsx";
import SingleRepo from "./components/SingleRepo.jsx";
import Message from "./components/404-Message.jsx";
import "./styles/app.css";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<RepoCards />} />
        <Route path="/repos" element={<Outlet />} >
        <Route path=":id" element={<SingleRepo/>} />
        </Route>
        <Route path="*" element={<Message/>}/>
      </Routes>
    </>
  );
}

export default App;
