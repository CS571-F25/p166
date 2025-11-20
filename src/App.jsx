import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import MainNavbar from "./components/MainNavbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import TeamsPage from "./pages/TeamsPage.jsx";
import TasksPage from "./pages/TasksPage.jsx";

function App() {
  return (
    <Router>
      <MainNavbar />
      <Container className="mt-4 mb-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/tasks" element={<TasksPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
