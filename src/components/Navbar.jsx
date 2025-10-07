import Logo from '../assets/icons/Logo.png'

const Navbar = ({ onSignupClick }) => {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-transparent text-white absolute top-0 w-full">
      <img src={Logo} alt="" />
      <ul className="flex gap-6">
        <li>Home</li>
        <li>About us</li>
        <li>Features</li>
        <li>Contact us</li>
      </ul>
      <div className="flex gap-4">
        <button className="text-sm border border-white px-4 py-2 rounded-lg">Login</button>
        <button
          onClick={onSignupClick}
          className="text-sm bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold"
        >
          Sign Up
        </button>
      </div>
    </nav>
  )
}

export default Navbar
