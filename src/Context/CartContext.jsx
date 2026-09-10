/* ========================================
   PRIMEBASKET CART CONTEXT
======================================== */

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";


const CartContext = createContext();


/* ========================================
   CART PROVIDER
======================================== */

export const CartProvider = ({ children }) => {

  /* ========================================
     LOAD CART FROM LOCAL STORAGE
  ======================================== */

  const [cart, setCart] = useState(() => {

    try {

      const savedCart =
        localStorage.getItem("primebasket-cart");

      return savedCart
        ? JSON.parse(savedCart)
        : [];

    } catch (error) {

      console.error(
        "Error loading cart:",
        error
      );

      return [];

    }

  });


  /* ========================================
     SAVE CART TO LOCAL STORAGE
  ======================================== */

  useEffect(() => {

    localStorage.setItem(
      "primebasket-cart",
      JSON.stringify(cart)
    );

  }, [cart]);


  /* ========================================
     ADD PRODUCT TO CART
  ======================================== */

  const addToCart = (product) => {

    setCart((currentCart) => {

      const existingProduct =
        currentCart.find(
          (item) => item.id === product.id
        );


      if (existingProduct) {

        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        );

      }


      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];

    });

  };


  /* ========================================
     REMOVE PRODUCT
  ======================================== */

  const removeFromCart = (productId) => {

    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.id !== productId
      )
    );

  };


  /* ========================================
     INCREASE QUANTITY
  ======================================== */

  const increaseQuantity = (productId) => {

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );

  };


  /* ========================================
     DECREASE QUANTITY
  ======================================== */

  const decreaseQuantity = (productId) => {

    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        )
    );

  };


  /* ========================================
     CLEAR CART
  ======================================== */

  const clearCart = () => {

    setCart([]);

  };


  /* ========================================
     CART COUNT
  ======================================== */

  const cartCount = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );


  /* ========================================
     CART TOTAL
  ======================================== */

  const cartTotal = cart.reduce(
    (total, item) =>
      total +
      Number(item.price) *
      item.quantity,
    0
  );


  /* ========================================
     CONTEXT PROVIDER
  ======================================== */

  return (

    <CartContext.Provider
      value={{
        cart,

        addToCart,

        removeFromCart,

        increaseQuantity,

        decreaseQuantity,

        clearCart,

        cartCount,

        cartTotal,
      }}
    >

      {children}

    </CartContext.Provider>

  );

};


/* ========================================
   CUSTOM CART HOOK
======================================== */

export const useCart = () => {

  const context = useContext(CartContext);


  if (!context) {

    throw new Error(
      "useCart must be used inside CartProvider"
    );

  }


  return context;

};