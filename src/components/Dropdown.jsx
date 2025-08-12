import React, { useState, useEffect } from "react";
import "./Dropdown.css";

export default function Dropdown({ setRegion, region }) {
  const [regionSelect, setRegionSelect] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && reference.current && !reference.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  let reference = React.createRef();

  return (
    <div className={`dropdown ${isOpen ? "show" : ""}`} reference={reference}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        <label className={`dropdown-label ${isOpen || regionSelect ? "top" : ""}`}>Region</label>
        <span className="dropdown-region">{region === "all" && regionSelect ? "All" : region.substr(7)}</span>
        <svg
          className="dropdown-arrow"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path d="M7 10l5 5 5-5z"></path>
        </svg>
      </button>
      <span id="dropdown-selection"></span>
      {isOpen && (
        <ul className={`dropdown-content ${isOpen ? "show" : ""}`}>
          <li
            className="dropdown-item"
            onClick={function () {
              toggleDropdown();
              setRegion("all");
              setRegionSelect(true);
            }}
          >
            All
          </li>
          <li
            className="dropdown-item"
            onClick={function () {
              toggleDropdown();
              setRegion("region/Africa");
              setRegionSelect(true);
            }}
          >
            Africa
          </li>
          <li
            className="dropdown-item"
            onClick={function () {
              toggleDropdown();
              setRegion("region/America");
              setRegionSelect(true);
            }}
          >
            America
          </li>
          <li
            className="dropdown-item"
            onClick={function () {
              toggleDropdown();
              setRegion("region/Asia");
              setRegionSelect(true);
            }}
          >
            Asia
          </li>
          <li
            className="dropdown-item"
            onClick={function () {
              toggleDropdown();
              setRegion("region/Europe");
              setRegionSelect(true);
            }}
          >
            Europe
          </li>
          <li
            className="dropdown-item"
            onClick={function () {
              toggleDropdown();
              setRegion("region/Oceania");
              setRegionSelect(true);
            }}
          >
            Oceania
          </li>
        </ul>
      )}
    </div>
  );
}
