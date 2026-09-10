import { Routes, Route } from "react-router-dom";

import { CartProvider } from "./Context/CartContext";
import { WishlistProvider } from "./Context/WishlistContext";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Wishlist from "./Pages/Wishlist";
import TrackOrder from "./Pages/TrackOrder";
import OrderHistory from "./Pages/OrderHistory";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {

  return (

    <WishlistProvider>

      <CartProvider>

        <Navbar />

        <Routes>

          {/* ==============================
              HOME
          ============================== */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* ==============================
              PRODUCTS
          ============================== */}

          <Route
            path="/products"
            element={<Products />}
          />


          {/* ==============================
              PRODUCT DETAILS
          ============================== */}

          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />


          {/* ==============================
              CART
          ============================== */}

          <Route
            path="/cart"
            element={<Cart />}
          />


          {/* ==============================
              CHECKOUT
          ============================== */}

          <Route
            path="/checkout"
            element={<Checkout />}
          />


          {/* ==============================
              TRACK ORDER
          ============================== */}

          <Route
            path="/track-order"
            element={<TrackOrder />}
          />


          {/* ==============================
              WISHLIST
          ============================== */}

          <Route
            path="/wishlist"
            element={<Wishlist />}
          />


          {/* ==============================
              ORDER HISTORY
          ============================== */}

          <Route
            path="/order-history"
            element={<OrderHistory />}
          />

        </Routes>


        {/* ==============================
            FOOTER
        ============================== */}

        <Footer />


        {/* ==============================
            TOAST NOTIFICATIONS
        ============================== */}

        <ToastContainer
          position="top-right"
          autoClose={2000}
          theme="light"
        />

      </CartProvider>

    </WishlistProvider>

  );

};


export default App;