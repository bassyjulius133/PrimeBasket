import { useEffect, useReducer, useState } from "react";
import { useSearchParams } from "react-router-dom";

import ProductCard from "../Components/ProductCard";
import products from "../Data/Products";

import shopReducer, {
  initialState,
} from "../Reducers/shopReducer.js";

import "./Products.css";


const Products = () => {

  // ========================================
  // LOADING STATE WITH useReducer
  // ========================================

  const [loadingState, dispatch] = useReducer(
    shopReducer,
    initialState
  );


  // ========================================
  // URL SEARCH PARAMETERS
  // ========================================

  const [searchParams, setSearchParams] =
    useSearchParams();


  // ========================================
  // SEARCH STATE
  // ========================================

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );


  // ========================================
  // SORT STATE
  // ========================================

  const [sortOption, setSortOption] = useState(
    "featured"
  );


  // ========================================
  // CATEGORY STATE
  // ========================================

  const [category, setCategory] = useState(
    searchParams.get("category") || "All"
  );


  // ========================================
  // LOAD PRODUCT IMAGES
  // ========================================

  useEffect(() => {

    const loadImages = async () => {

      dispatch({
        type: "LOADING",
      });


      try {

        const imagePromises = products.map(
          (product) => {

            return new Promise((resolve) => {

              const image = new Image();

              image.src = product.image;

              image.onload = resolve;

              // If image fails, continue loading
              image.onerror = resolve;

            });

          }
        );


        await Promise.allSettled(
          imagePromises
        );


        dispatch({
          type: "SUCCESS",
        });


      } catch (error) {

        dispatch({
          type: "ERROR",
        });

      }

    };


    loadImages();

  }, []);


  // ========================================
  // UPDATE SEARCH AND CATEGORY FROM URL
  // ========================================

  useEffect(() => {

    const searchFromUrl =
      searchParams.get("search") || "";

    const categoryFromUrl =
      searchParams.get("category") || "All";


    setSearchTerm(searchFromUrl);

    setCategory(categoryFromUrl);

  }, [searchParams]);


  // ========================================
  // PRODUCT CATEGORIES
  // ========================================

  const categories = [
    "All",
    "Groceries",
    "Fruits & Vegetables",
    "Beverages",
    "Dairy",
    "Bakery",
    "Snacks",
    "Household",
    "Personal Care",
    "Frozen Foods",
    "Meat & Protein",
    "Baby Care",
  ];


  // ========================================
  // HANDLE SEARCH
  // ========================================

  const handleSearch = (e) => {

    const value = e.target.value;

    setSearchTerm(value);


    const newParams = {};


    // Keep category in URL
    if (category !== "All") {

      newParams.category = category;

    }


    // Add search to URL
    if (value.trim() !== "") {

      newParams.search = value;

    }


    setSearchParams(newParams);

  };


  // ========================================
  // CLEAR SEARCH
  // ========================================

  const clearSearch = () => {

    setSearchTerm("");


    if (category !== "All") {

      setSearchParams({
        category: category,
      });

    } else {

      setSearchParams({});

    }

  };


  // ========================================
  // HANDLE CATEGORY
  // ========================================

  const handleCategory = (selectedCategory) => {

    setCategory(selectedCategory);


    const newParams = {};


    // Keep search if one exists
    if (searchTerm.trim() !== "") {

      newParams.search = searchTerm;

    }


    // Add category unless All
    if (selectedCategory !== "All") {

      newParams.category =
        selectedCategory;

    }


    setSearchParams(newParams);

  };


  // ========================================
  // CLEAR ALL FILTERS
  // ========================================

  const clearFilters = () => {

    setSearchTerm("");

    setCategory("All");

    setSearchParams({});

  };


  // ========================================
  // FILTER PRODUCTS
  // ========================================

  const filteredProducts =
    products.filter((product) => {

      const search =
        searchTerm
          .toLowerCase()
          .trim();


      // ----------------------------------------
      // SEARCH MATCH
      // ----------------------------------------

      const matchesSearch =

        product.name
          .toLowerCase()
          .includes(search)

        ||

        product.category
          .toLowerCase()
          .includes(search)

        ||

        (product.description || "")
          .toLowerCase()
          .includes(search);


      // ----------------------------------------
      // CATEGORY MATCH
      // ----------------------------------------

      const matchesCategory =

        category === "All"

        ||

        product.category === category;


      return (
        matchesSearch &&
        matchesCategory
      );

    });


  // ========================================
  // SORT PRODUCTS
  // ========================================

  const sortedProducts =
    [...filteredProducts].sort((a, b) => {

      switch (sortOption) {

        // ----------------------------------------
        // FEATURED
        // ----------------------------------------

        case "featured":
          return 0;


        // ----------------------------------------
        // PRICE LOW TO HIGH
        // ----------------------------------------

        case "price-low":
          return a.price - b.price;


        // ----------------------------------------
        // PRICE HIGH TO LOW
        // ----------------------------------------

        case "price-high":
          return b.price - a.price;


        // ----------------------------------------
        // NAME A-Z
        // ----------------------------------------

        case "name":
          return a.name.localeCompare(b.name);


        // ----------------------------------------
        // DEFAULT
        // ----------------------------------------

        default:
          return 0;

      }

    });


  // ========================================
  // LOADING SCREEN
  // ========================================

  if (loadingState.loading) {

    return (

      <main className="shop-loading-page">

        <div className="shop-loader">

          <div className="basket-loader">
            🛒
          </div>


          <h1>
            Preparing PrimeBasket
          </h1>


          <p>
            Please wait a moment while we
            load our products for you.
          </p>


          <div className="loading-spinner"></div>

        </div>

      </main>

    );

  }


  // ========================================
  // ERROR SCREEN
  // ========================================

  if (loadingState.error) {

    return (

      <main className="shop-loading-page">

        <div className="shop-loader">

          <div className="error-icon">
            ⚠️
          </div>


          <h1>
            Something went wrong
          </h1>


          <p>
            Unable to load products.
          </p>

        </div>

      </main>

    );

  }


  // ========================================
  // SHOP PAGE
  // ========================================

  return (

    <main className="products-page">


      {/* ========================================
          SHOP HEADER
      ======================================== */}

      <section className="shop-header">

        <div className="shop-header-content">

          <span className="shop-label">
            PRIMEBASKET COLLECTION
          </span>


          <h1>

            Shop Everything

            <span>
              {" "}You Love.
            </span>

          </h1>


          <p>
            Discover premium groceries,
            fresh produce, beverages and
            everyday essentials carefully
            selected for you.
          </p>

        </div>

      </section>



      {/* ========================================
          SHOP CONTENT
      ======================================== */}

      <section className="shop-content">


        {/* ========================================
            SEARCH & CATEGORIES
        ======================================== */}

        <div className="shop-controls">


          {/* ========================================
              SEARCH
          ======================================== */}

          <div className="product-search">

            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearch}
            />


            {searchTerm && (

              <button
                type="button"
                onClick={clearSearch}
                className="clear-search"
              >
                ✕ Clear Search
              </button>

            )}

          </div>



          {/* ========================================
              CATEGORIES
          ======================================== */}

          <div className="category-buttons">

            {categories.map((item) => (

              <button
                key={item}
                type="button"

                className={
                  category === item
                    ? "active"
                    : ""
                }

                onClick={() =>
                  handleCategory(item)
                }
              >

                {item}

              </button>

            ))}

          </div>

        </div>



        {/* ========================================
            PRODUCTS HEADER
        ======================================== */}

        <div className="products-top">

          <div>

            <span>

              {searchTerm
                ? `SEARCH RESULTS FOR: "${searchTerm}"`
                : category !== "All"
                ? category.toUpperCase()
                : "OUR PRODUCTS"}

            </span>


            <h2>

              {searchTerm
                ? "Search Results"
                : category !== "All"
                ? category
                : "Fresh & Premium"}

            </h2>

          </div>


          {/* ========================================
              SORTING
          ======================================== */}

          <div className="products-sort">

            <span>
              Sort by:
            </span>


            <select
              value={sortOption}
              onChange={(e) =>
                setSortOption(e.target.value)
              }
            >

              <option value="featured">
                Featured
              </option>

              <option value="price-low">
                Price: Low to High
              </option>

              <option value="price-high">
                Price: High to Low
              </option>

              <option value="name">
                Name: A–Z
              </option>

            </select>

          </div>

        </div>



        {/* ========================================
            PRODUCT COUNT
        ======================================== */}

        <div className="products-count">

          {filteredProducts.length}{" "}

          {filteredProducts.length === 1
            ? "product"
            : "products"}

        </div>



        {/* ========================================
            PRODUCT GRID
        ======================================== */}

        {sortedProducts.length > 0 ? (

          <div className="products-grid">

            {sortedProducts.map(
              (product) => (

                <ProductCard
                  key={product.id}
                  product={product}
                />

              )
            )}

          </div>

        ) : (

          /* ========================================
             NO PRODUCTS
          ======================================== */

          <div className="no-products">

            <div className="no-products-icon">
              🛒
            </div>


            <h3>
              No products found
            </h3>


            <p>
              We couldn't find products
              matching your search or
              selected category.
            </p>


            <button
              type="button"
              onClick={clearFilters}
            >
              View All Products
            </button>

          </div>

        )}

      </section>

    </main>

  );

};


export default Products;