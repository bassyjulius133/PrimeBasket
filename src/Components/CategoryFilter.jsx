import React from "react";

const CategoryFilter = ({ setCategory }) => {
  return (
    <div className="categories">
      <button onClick={() => setCategory("All")}>All</button>

      <button onClick={() => setCategory("Groceries")}>
        Groceries
      </button>

      <button onClick={() => setCategory("Beverages")}>
        Beverages
      </button>

      <button onClick={() => setCategory("Snacks")}>
        Snacks
      </button>

      <button onClick={() => setCategory("Household")}>
        Household
      </button>

      <button onClick={() => setCategory("Fruits")}>
        Fruits
      </button>

      <button onClick={() => setCategory("Vegetables")}>
        Vegetables
      </button>

      <button onClick={() => setCategory("Dairy")}>
        Dairy
      </button>

      <button onClick={() => setCategory("Frozen Foods")}>
        Frozen Foods
      </button>
    </div>
  );
};

export default CategoryFilter;