import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NAVBAR from './component/NAVBAR';
import HERO from './component/HERO';
import WHYCHOOSE from './component/WHYCHOOSE'; // Import the new section here
import Footer from './component/Footer';
import Contact from './pages/Contact';
import SERVICE from './pages/SERVICE';

const App = () => {
  return (
    <BrowserRouter>
      <NAVBAR />
      
      <Routes>
        <Route path="/" element={
          <>
            <HERO />
            <WHYCHOOSE /> {/* This adds the section below your Hero */}
          </>
        } />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SERVICE" element={<SERVICE />} />
      </Routes>
      

      <Footer />
    </BrowserRouter>
  )
}

export default App;