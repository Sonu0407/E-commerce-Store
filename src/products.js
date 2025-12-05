import "./products.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "./modal";
import { useCart } from "./CartProvider";

function ProductsComponent({ searchKeyword = "" }) {

  const { addToCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: "Google Pixel-Black", price: 10, image: "https://reactjsphonestore.netlify.app/img/product-1.png", link: "/details" },
    { id: 2, name: "Samsung S7", price: 16, image: "https://reactjsphonestore.netlify.app/img/product-2.png", link: "/details2" },
    { id: 3, name: "HTC 10 - Black", price: 8, image: "https://reactjsphonestore.netlify.app/img/product-3.png", link: "/details3" },
    { id: 4, name: "HTC 10 - White", price: 18, image: "https://reactjsphonestore.netlify.app/img/product-4.png", link: "/details4" },
    { id: 5, name: "HTC Desire 626s", price: 24, image: "https://reactjsphonestore.netlify.app/img/product-5.png", link: "/details5" },
    { id: 6, name: "Vintage Iphone", price: 17, image: "https://reactjsphonestore.netlify.app/img/product-6.png", link: "/details6" },
    { id: 7, name: "Iphone 7", price: 30, image: "https://reactjsphonestore.netlify.app/img/product-7.png", link: "/details7" },
    { id: 8, name: "Smashed Iphone", price: 2, image: "https://reactjsphonestore.netlify.app/img/product-8.png", link: "/details8" }
  ];

  const filteredProducts = products.filter(item =>
    item.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const handleAddCart = (product) => {
    addToCart(product);
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <section className="product-bg">
      <div className="our-products">
        <strong className="products">Our</strong>
        <strong className="color">Products</strong>
      </div>

      <div className="row row-cols-1 row-cols-md-3" style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <div key={p.id} className="col mb-4" style={{ width: "310px", height: "305px", textAlign: "center" }}>
              
              <div className="card" style={{ height: "310px", position: "relative", overflow: "hidden" }}>
                
                <i
                  className="fas fa-cart-plus cart_animation"
                  onClick={() => handleAddCart(p)}
                  style={{ cursor: "pointer" }}
                ></i>

                <Link to={p.link}>
                  <img className="image image-and-cart" src={p.image} alt={p.name} />
                </Link>

                <figcaption
                  className="item_name"
                  style={{
                    paddingBottom: "15px",
                    fontSize: "1.2rem",
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "0px 25px",
                    position: "absolute",
                    top: "265px",
                    width: "240px"
                  }}
                >
                  {p.name}
                  <figcaption className="cost_color" style={{ fontSize: "1.3rem", marginLeft: "70px" }}>
                    ${p.price}
                  </figcaption>
                </figcaption>

              </div>
            </div>
          ))
        ) : (
          <h3 style={{ marginTop: "50px", color: "red" }}>No Products Found ❌</h3>
        )}
      </div>

      {selectedProduct && (
        <Modal
          show={showModal}
          item={selectedProduct}
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
}

export default ProductsComponent;
