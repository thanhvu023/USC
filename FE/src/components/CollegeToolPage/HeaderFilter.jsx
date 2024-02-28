import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./schoolView.scss";

export default function HeaderFilter({ setMain }) {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const handleFilterClick = (filterName) => {
    setMain(filterName);
    setSelectedFilter(filterName);
  };

  return (
    <>
      <div
        className="filter-section"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <button
          className={`filter-button ${
            selectedFilter === "Uni" ? "selected" : ""
          }`}
          onClick={() => handleFilterClick("Uni")}
        >
          Uni
        </button>
        <button
          className={`filter-button ${
            selectedFilter === "Major" ? "selected" : ""
          }`}
          onClick={() => handleFilterClick("Major")}
        >
          Major
        </button>
      </div>
    </>
  );
}
