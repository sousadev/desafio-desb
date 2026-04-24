import "./navbar.css";
import Logo from "../../assets/logo-github.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" width={150} />
      </div>
    </div>
  );
};

export default Navbar;