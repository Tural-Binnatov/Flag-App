import React from "react";
import "./CountryCard.css";

export default function SkeletonCard({ count }) {
  return (
    <div className="skeleton-container">
      {Array.from({ length: count }).map((_, index) => (
        <div className="skeleton-card" key={index}>
          <div className="skeleton-flag-card"></div>
          <div className="skeleton-information-card">
            <p className="skeleton-name-card">
              <span className="skeleton-name"></span>
            </p>
            <p className="skeleton-details-card">
              <strong>Population:</strong>
            </p>
            <p className="skeleton-details-card">
              <strong>Region:</strong>
            </p>
            <p className="skeleton-details-card">
              <strong>Capital:</strong>
            </p>
            <span className="focus-hover-highlight"></span>
          </div>
        </div>
      ))}
    </div>
  );
}