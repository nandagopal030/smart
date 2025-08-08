import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import { useState,useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import './AppLayout.css'
const AppLayout: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className='layout-container' >
       <button
        id="toTop"
        className={showTopBtn ? "show" : "show"}
        onClick={scrollToTop}
        title="Go to Top"
      >
        ↑
      </button>
      <Sidebar />
      <Navbar />
    </div>
  )
}


export default AppLayout