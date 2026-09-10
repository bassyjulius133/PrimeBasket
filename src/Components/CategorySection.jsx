import { Link } from "react-router-dom";
import {
  FaShoppingBasket,
  FaAppleAlt,
  FaWineBottle,
  FaCheese,
  FaBreadSlice,
  FaCookieBite,
  FaHome,
  FaPumpSoap,
  FaSnowflake,
  FaDrumstickBite,
  FaBaby,
} from "react-icons/fa";

import "./CategorySection.css";


const CategorySection = () => {

  const categories = [
    {
      name: "Groceries",
      icon: <FaShoppingBasket />,
      description: "Everyday essentials",
    },

    {
      name: "Fruits & Vegetables",
      icon: <FaAppleAlt />,
      description: "Fresh & healthy",
    },

    {
      name: "Beverages",
      icon: <FaWineBottle />,
      description: "Drinks & refreshments",
    },

    {
      name: "Dairy",
      icon: <FaCheese />,
      description: "Fresh dairy products",
    },

    {
      name: "Bakery",
      icon: <FaBreadSlice />,
      description: "Freshly baked",
    },

    {
      name: "Snacks",
      icon: <FaCookieBite />,
      description: "Tasty treats",
    },

    {
      name: "Household",
      icon: <FaHome />,
      description: "Home essentials",
    },

    {
      name: "Personal Care",
      icon: <FaPumpSoap />,
      description: "Care & hygiene",
    },

    {
      name: "Frozen Foods",
      icon: <FaSnowflake />,
      description: "Frozen favourites",
    },

    {
      name: "Meat & Protein",
      icon: <FaDrumstickBite />,
      description: "Quality protein",
    },

    {
      name: "Baby Care",
      icon: <FaBaby />,
      description: "For your little ones",
    },
  ];


  return (

    <section className="category-section">

      {/* ========================================
          SECTION HEADER
      ======================================== */}

      <div className="category-header">

        <span className="category-label">
          SHOP BY CATEGORY
        </span>

        <h2>
          Everything You Need,
          <span> All In One Place.</span>
        </h2>

        <p>
          Explore our carefully selected categories
          and find everything you need for your home
          and everyday life.
        </p>

      </div>


      {/* ========================================
          CATEGORY GRID
      ======================================== */}

      <div className="category-grid">

        {categories.map((category) => (

          <Link
            key={category.name}
            to={`/products?category=${encodeURIComponent(
              category.name
            )}`}
            className="category-card"
          >

            <div className="category-icon">
              {category.icon}
            </div>

            <div className="category-info">

              <h3>
                {category.name}
              </h3>

              <p>
                {category.description}
              </p>

            </div>

            <span className="category-arrow">
              →
            </span>

          </Link>

        ))}

      </div>


      {/* ========================================
          VIEW ALL BUTTON
      ======================================== */}

      <div className="category-footer">

        <Link
          to="/products"
          className="category-view-all"
        >
          View All Products
          <span>→</span>
        </Link>

      </div>

    </section>

  );
};


export default CategorySection;