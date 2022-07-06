import { useState } from "react";
import { FiLink } from "react-icons/fi";

import "./home.css";
import Menu from "../../components/Menu/Menu";
import LinkItem from "../../components/Menu/LinkItem";
import Api from "../../services/api";
import api from "../../services/api";


export default function Home() {
  const [link, setLink] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});
  

  async function handleShortLi() {
    
    if (link === '') {
      return  alert('Informe um link!');
      
    }

    try {
      
      const response = await api.post('/shorten', {long_url: link})
      console.log(response);
      setData(response.data);
      setShowModal(true);
      setLink('');

    } catch (error) {
      alert('Ops, parece que algo deu errado!')
    }
    
    
  }

  return (
    <div className="container-home">
      <div className="logo">
        <img src="/logo.png" alt="Meu Link Logo" />
        <h1>Meu-link</h1>
        <span>Cole seu link para encurtar</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#fff" />
          <input
            placeholder="Cole o seu link aqui..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button onClick={handleShortLi}>Encurtar Link</button>
      </div>
      <Menu />
      {showModal && (
        <LinkItem 
        closeModal={()=> setShowModal(false)}
        content={data}
        />
      )}
    </div>
  );
}
