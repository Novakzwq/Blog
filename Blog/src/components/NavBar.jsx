import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div
      className="
         w-screen
         mt-6
         flex
         justify-center
         gap-16
      "
    >
      <Link to="/home">
        <div style={{fontSize: '15px'}} className="transition duration-200 border-b border-transparent hover:border-sky-500">
          Home
        </div>
      </Link>
      <Link to="/social">
        <div style={{fontSize: '15px'}} className="transition duration-200 border-b border-transparent hover:border-sky-500">
          Social
        </div>
      </Link>
      <Link to="/projects">
        <div style={{fontSize: '15px'}} className="transition duration-200 border-b border-transparent hover:border-sky-500">
          Projects
        </div>
      </Link>
    </div>
  )
}

export default NavBar