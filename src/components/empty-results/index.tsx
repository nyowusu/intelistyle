import React from "react";

import "./styles.css";

interface IProps {
  text: string;
}

export default function EmptyResults({ text }: IProps) {
  const emptyList = `Sorry! There are no garments that match your search. Please change the
  keywords and try again`;

  return (
    <div className="results">
      <span className="empty">{text || emptyList}</span>
    </div>
  );
}
