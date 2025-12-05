import { Link } from "react-router-dom";
import "./modal.css";

export default function Modal({ show, item, onClose }) {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Item Added To The Cart</h2>
        <img src={item?.image} alt={item?.name} className="modal-img" />
        <h3>{item?.name}</h3>
        <p style={{fontSize: "1.25rem"}}>Price : ${item?.price}</p>

        {/* <div className="modal-buttons"> */}
          <button className="continue-btn" onClick={onClose}>
            Continue Shopping
          </button>

          <Link to="/mycart">
            <button className="cart-btn">Go To Cart</button>
          </Link>
        {/* </div> */}
      </div>
    </div>
  );
}
