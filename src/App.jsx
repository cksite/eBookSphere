import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Department from './components/Department';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';  // Import the new Services component
import ContactUs from './components/ContactUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import Disclaimer from './components/Disclaimer';
import ShippingPolicy from './components/ShippingPolicy';
import RefundPolicy from './components/RefundPolicy';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      {/* Add the ScrollToTop component here */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/department/:deptName" element={<Department />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} /> {/* New Route for Services */}
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
