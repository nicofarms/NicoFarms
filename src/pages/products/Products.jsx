import React from "react";
import "./products.css";

function Products() {
  return (
    <main className="products-page">
      <section className="Product-hero">
        <div className="product-hero-content">
          <span className="product-eyebrow">Quality from our farm</span>
          <h1>Our Products</h1>
          <p>Quality poultry products from Nico Farms</p>
        </div>
      </section>

      <div className="product-shell">
        <div className="product-intro">
          <span className="product-eyebrow">What we offer</span>
          <h2>Raised with care. Made for everyday needs.</h2>
          <p>
            From farm-fresh eggs to poultry and products in development, we
            focus on quality, care, and dependable supply.
          </p>
        </div>

        <section className="product-section">
          <div className="product-grid">
            <div className="product-image">
              <img src="/IMG/Fresh_Eggs.png" alt="Fresh Eggs" />
            </div>

            <div className="product-text">
              <p className="label">01 / Farm fresh</p>
              <h2>Fresh Eggs</h2>

              <p className="main-text">
                Farm fresh eggs produced from properly fed and healthy birds.
                Our eggs are nutritious and ideal for households, bakeries,
                restaurants, and food vendors.
              </p>

              <p className="sub-text">
                We take conscious action in feeding our birds with the right
                nutrients to deliver high-quality and nutritious eggs. Our
                commitment ensures superior quality and consistency.
              </p>
            </div>
          </div>
        </section>

        <section className="product-section reverse">
          <div className="product-grid">
            <div className="product-image">
              <img src="/IMG/Broiler_chicken.png" alt="Broiler Chickens" />
            </div>

            <div className="product-text">
              <p className="label">02 / Poultry</p>
              <h2>Broiler Chickens</h2>

              <p className="main-text">
                Healthy broiler chickens raised with best farming practices,
                ensuring high-quality poultry meat production.
              </p>

              <p className="sub-text">
                Our broiler birds are raised in optimal conditions with proper
                nutrition and care, resulting in premium poultry meat that
                meets high standards.
              </p>
            </div>
          </div>
        </section>

        <section className="product-section">
          <div className="product-grid">
            <div className="product-image">
              <img src="/IMG/Future_products.png" alt="Future Products" />
            </div>

            <div className="product-text">
              <p className="label">03 / In development</p>
              <h2>Future Products</h2>

              <p className="main-text">
                We are expanding into processed and packaged poultry products
                to serve a wider market across Nigeria.
              </p>

              <p className="sub-text">
                Our expansion plans include producing finished and
                semi-finished poultry products, making quality food more
                accessible nationwide.
              </p>
            </div>
          </div>
        </section>

        <section className="customers">
          <div className="customers-heading">
            <span className="product-eyebrow">Who we serve</span>
            <h2>Products for our communities</h2>
            <p>
              We work to meet the needs of customers across food service,
              retail, and households.
            </p>
          </div>

          <div className="customer-grid">
            <div className="customer-card">
              <span className="customer-number">01</span>
              <h3>Bakeries &amp; Confectioneries</h3>
              <p>Fresh eggs for baking and food production</p>
            </div>

            <div className="customer-card">
              <span className="customer-number">02</span>
              <h3>Restaurants &amp; Food Vendors</h3>
              <p>Quality poultry products for food service</p>
            </div>

            <div className="customer-card">
              <span className="customer-number">03</span>
              <h3>Households &amp; Retailers</h3>
              <p>Fresh, nutritious products for everyday use</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Products;
