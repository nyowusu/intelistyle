import React from "react";

import "./styles.css";

export default function EmptyResults() {
  return (
    <div className="results">
      <span className="empty">
        Sorry! There are no garments that match your search. Please change the
        keywords and try again
      </span>
    </div>
  );
}
