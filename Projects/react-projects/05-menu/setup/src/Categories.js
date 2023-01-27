import React from "react";

const Categories = ({ filterItems, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((cat, index) => {
        return (
          <button
            className="filter-btn"
            type="button"
            key={index}
            onClick={() => filterItems(cat)}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
