import { FiLink } from "react-icons/fi";
import './home.css';
import Menu from "../../components/Menu/Menu";

export default function Home() {
  return (
    <div className="container-home">
      <div className="logo">
        <img src="/logo.png" alt="Meu Link Logo" height="100px" />
        <h1>Meu-link</h1>
        <span>Cole seu link para encurtar</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#fff" />
          <input placeholder="Cole o seu link aqui..." />
        </div>
        <button>Encurtar Link</button>
      </div>
      <Menu/>
    </div>
  );
}
