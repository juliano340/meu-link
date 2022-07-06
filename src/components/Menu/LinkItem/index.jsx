import "./link-item.css";
import { FiX, FiClipboard } from "react-icons/fi";

export default function LinkItem({closeModal}) {
  return (
    <div className="modal-container">

      <div className="modal-header">
        
        <h2>Link Encurtado</h2>
        <button onClick={closeModal}>
          <FiX size={28} color="#000" />
        </button>
        
      </div>

      <span>https://juliano340.com</span>

      <button className="modal-link">

        https://bit.ly/tesesese
        <FiClipboard size={20} color="#fff" />

      </button>

    </div>
  );
}
