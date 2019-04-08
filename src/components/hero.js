import React from "react";

export default function Hero({
  children,
  headline,
  subHeadline,
  firstDesc,
  secondDesc,
  className,
}) {
  return (
    <section className="hero container">
      <div className={className}>
        {headline && (
          <h1>
            <span style={{ textAlign: "center" }}>
              {headline}
              <big style={{ color: "#59cbb9" }}>.</big>
            </span>
          </h1>
        )}

        {subHeadline && <h3>{subHeadline}</h3>}

        {firstDesc && (
          <p className="description">
            {firstDesc}
          </p>
        )}

        {secondDesc && (
          <p className="description">
            {secondDesc}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}
