import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function Navbar() {
  const links = [
    { path: "/", label: "Home" },
    { path: "/first-generation", label: "1ª Geração Kanto" },
    { path: "/second-generation", label: "2ª Geração Johto" },
    { path: "/three-generation", label: "3ª Geração Hoenn" },
    { path: "/four-generation", label: "4ª Geração Sinnoh" },
    { path: "/five-generation", label: "5ª Geração Unova" },
    { path: "/six-generation", label: "6ª Geração Kalos" },
    { path: "/seven-generation", label: "7ª Geração Alola" },
    { path: "/eight-generation", label: "8ª Geração Galar/Hisui" },
    { path: "/nine-generation", label: "9ª Geração Paldea" },
  ];

  return (
    <nav className="navbar">
      {links.map((link) => (
        <Link key={link.path} to={link.path} className="nav-link">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
