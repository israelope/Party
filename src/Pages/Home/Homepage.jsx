import { useState } from "react";
import Navbar from '../../components/Navbar'
import Hero from "./Hero";
import SignupPopup from "./SignupPopup";



const Homepage = () => {
  return (
    <div>
      <Navbar onSignupClick={() => setShowModal(true)} />
      <Hero />
      {showModal && <SignupPopup onClose={() => setShowModal(false)} />}
    </div>
  )
}

export default Homepage
