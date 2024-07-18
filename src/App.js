import "./styles.css";
import React from "react";
import Header from "./Components/Header";
import NavigationBar from "./Components/NavigationBar";
import Vacancies from "./Components/Vacancies";
import LoginForm from "./Components/LoginForm";
import StudentRegistrationForm from "./Components/StudentRegistrationForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
const App = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Header />
            <NavigationBar />
            <Vacancies />
            <LoginForm />
            <Footer />
          </div>
        }
      />
      <Route path="/register" element={<StudentRegistrationForm />} />
    </Routes>
  </Router>
);

export default App;
