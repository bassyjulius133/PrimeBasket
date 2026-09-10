/* ========================================
   PRIMEBASKET WISHLIST CONTEXT
======================================== */

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";


const WishlistContext = createContext();


/* ========================================
   WISHLIST PROVIDER
======================================== */

export const WishlistProvider = ({ children }) => {

  /* ========================================
     LOAD WISHLIST FROM LOCAL STORAGE
  ======================================== */

  const [wishlist, setWishlist] = useState(() => {

    try {

      const savedWishlist =
        localStorage.getItem(
          "primebasket-wishlist"
        );

      return savedWishlist
        ? JSON.parse(savedWishlist)
        : [];

    } catch (error) {

      console.error(
        "Error loading wishlist:",
        error
      );

      return [];

    }

  });


  /* ========================================
     SAVE WISHLIST TO LOCAL STORAGE
  ======================================== */

  useEffect(() => {

    localStorage.setItem(
      "primebasket-wishlist",
      JSON.stringify(wishlist)
    );

  }, [wishlist]);


  /* ========================================
     ADD PRODUCT TO WISHLIST
  ======================================== */

  const addToWishlist = (product) => {

    setWishlist((currentWishlist) => {

      const existingProduct =
        currentWishlist.find(
          (item) => item.id === product.id
        );


      /* Prevent duplicates */

      if (existingProduct) {

        return currentWishlist;

      }


      return [
        ...currentWishlist,
        product,
      ];

    });

  };


  /* ========================================
     REMOVE PRODUCT FROM WISHLIST
  ======================================== */

  const removeFromWishlist = (productId) => {

    setWishlist((currentWishlist) =>
      currentWishlist.filter(
        (item) => item.id !== productId
      )
    );

  };


  /* ========================================
     CHECK WISHLIST
  ======================================== */

  const isInWishlist = (productId) => {

    return wishlist.some(
      (item) => item.id === productId
    );

  };


  /* ========================================
     WISHLIST COUNT
  ======================================== */

  const wishlistCount = wishlist.length;


  /* ========================================
     CONTEXT PROVIDER
  ======================================== */

  return (

    <WishlistContext.Provider
      value={{
        wishlist,

        addToWishlist,

        removeFromWishlist,

        isInWishlist,

        wishlistCount,
      }}
    >

      {children}

    </WishlistContext.Provider>

  );

};


/* ========================================
   CUSTOM HOOK
======================================== */

export const useWishlist = () => {

  const context = useContext(WishlistContext);


  if (!context) {

    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );

  }


  return context;

};