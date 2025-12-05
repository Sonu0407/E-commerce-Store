import { useCart } from "./CartProvider";
import "./mycart.css";
import { Link } from "react-router-dom";

export default function MyCart() {
  const { cart, removeFromCart, clearCart, increaseQty, decreaseQty } = useCart();

  // Safe subtotal
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  // GST calculation (18% example)
  const gstRate = 0.18;
  const gst = subtotal * gstRate;

  // Grand total including GST
  const grandTotal = subtotal + gst;

  return (
    <section className="cart-bg">
      <h1 className="cart-title">
        Your <span>Cart</span>
      </h1>

      {cart.length === 0 ? (
        <div className="cart-title">
          <h2 style={{ textAlign: "center", marginTop: "40px" }}>
            Your cart is empty
          </h2>
          <Link to={"/"}>
            <button className="Back-to-btn">Back To Shopping</button>
          </Link>
        </div>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>PRODUCTS</th>
                <th>NAME OF PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>REMOVE</th>
                <th>TOTAL</th>
              </tr>
            </thead>

            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} width="80" />
                  </td>

                  <td>{item.name}</td>

                  <td>${item.price}</td>

                  <td>
                    <div className="qty-box">
                      <button className="plus" onClick={() => decreaseQty(item.id)}>-</button>
                      <span>{item.qty}</span>
                      <button className="minus" onClick={() => increaseQty(item.id)}>+</button>
                    </div>
                  </td>

                  <td>
                    <i
                      className="fa-solid fa-trash trash-icon"
                      onClick={() => removeFromCart(item.id)}
                    ></i>
                  </td>

                  <td>
                    <strong>${item.price * item.qty}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <button className="clear-btn" onClick={clearCart}>
              CLEAR CART
            </button>

            <p>SUBTOTAL : ${subtotal.toFixed(2)}</p>
            <p>GST (18%) : ${gst.toFixed(2)}</p>
            <p>GRAND TOTAL : ${grandTotal.toFixed(2)}</p>
          </div>
        </>
      )}
    </section>
  );
}
