import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import FoodDetails from './pages/FoodDetails';
import Compare from './pages/Compare';
import GoalFilter from './pages/GoalFilter';
import Categories from './pages/Categories';
import About from './pages/About';
import ImageScanner from './pages/ImageScanner';
import BarcodeScanner from './pages/BarcodeScanner';
import SelectRole from './pages/SelectRole';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './admin/AdminDashboard';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/food/:id" element={<FoodDetails />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/filter" element={<GoalFilter />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/scan/image" element={<ImageScanner />} />
          <Route path="/scan/barcode" element={<BarcodeScanner />} />
          <Route path="/select-role" element={<SelectRole />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
