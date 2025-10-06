import { useState } from "react";
import Navbar from '../../components/Navbar'
import Hero from "./Hero";
import SignupPopup from "./SignupPopup";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Navbar onSignupClick={() => setShowModal(true)} />
      <Hero />
      {showModal && <SignupPopup onClose={() => setShowModal(false)} />}
    </div>
  );
}
