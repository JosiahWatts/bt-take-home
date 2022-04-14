import React from "react";
import "./error.scss";

export interface ErrorProps {
  title: string;
  description?: string;
}

export function Error({ title, description }: ErrorProps) {
  return (
    <div className="error-container">
      <h3 className="error-title">{title}</h3>
      {description && <p className="error-description">{description}</p>}
    </div>
  );
}
