import { Link } from "react-router-dom";

function Product_7_Component() {
    return (
        <div>
            <div class="container mt-5">
                <h1 style={{ textAlign: "center", marginBottom: "45px" }}>Iphone 7</h1>
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <img src="https://reactjsphonestore.netlify.app/img/product-7.png" alt="Product" class="img-fluid rounded mb-3 product-image" id="mainImage" style={{ marginLeft: "70px" }} />
                    </div>
                    <div class="col-md-6">
                        <h2 class="mb-3">Model: Iphone 7</h2>
                        <p class="text-muted mb-4" style={{ fontSize: "1.5rem" }}>Made by: Apple</p>
                        <div class="mb-3">
                            <span class="h4 me-2" style={{ fontSize: "1.6rem" }}>$30</span>
                            <span class="text-muted"><s>$50</s></span>
                        </div>
                        <div class="mb-3">
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-half text-warning"></i>
                            <span class="ms-2">4.5 (120 reviews)</span>
                        </div>
                        <p class="mb-4" style={{ fontSize: "1.25rem" }}>Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.</p>
                        <Link to={"/"}>
                            <button class="btn btn-outline-secondary btn-lg mb-3">
                                <i></i> Back To Products
                            </button>
                        </Link>
                        <button class="btn btn-primary btn-lg mb-3 me-2">
                            <i class="bi bi-cart-plus"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product_7_Component;