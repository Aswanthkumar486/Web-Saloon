import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { useState } from "react";

export default function Services({ data }) {
  const [hoverIndex, setHoverIndex] = useState(null);

  const styles = {
    section: {
      backgroundColor: "#ffffff",
      color: "#333",
      padding: "6rem 1rem",
      fontFamily: "'Montserrat', sans-serif",
      borderTop: "4px solid #3498db",
      marginTop: "5rem",
      marginBottom: "5rem",
    },
    heading: {
      color: "gray",
      textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
      fontWeight: "700",
      textTransform: "uppercase",
    },
    card: (isHovered) => ({
      border: "1px solid #ddd",
      borderRadius: "10px",
      boxShadow: isHovered
        ? "0 8px 20px rgba(0, 123, 255, 0.15)"
        : "0 4px 10px rgba(0,0,0,0.05)",
      transition: "all 0.3s ease",
      backgroundColor: "#f9f9f9",
      height: "100%",
      transform: isHovered ? "translateY(-6px)" : "none",
      cursor: "pointer",
    }),
    icon: {
      fontSize: "2.5rem",
      color: "gray",
     
    
      width: "fit-content",
    },
    title: {
      fontWeight: 600,
      fontSize: "1.25rem",
      color: "#222",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },
    text: {
      color: "#555",
      fontSize: "0.95rem",
      lineHeight: "1.6",
    },
    brand: {
      background: "linear-gradient(to right, #3498db, #4aa8ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: "700",
    },
    leadText: {
      color: "#666",
      fontSize: "1.1rem",
      maxWidth: "800px",
      margin: "0 auto",
    },
  };

  return (
    <section style={styles.section} className="p-4 service-card" id="services">
      <div className="container Services">
        <div className="text-center mb-5">
          <h2
            className="display-4 fw-bold mb-3 animate__animated animate__fadeInDown"
            style={styles.heading}
          >
            Our Services
          </h2>
          <p
            className="lead animate__animated animate__fadeIn animate__delay-1s"
            style={styles.leadText}
          >
            At <span style={styles.brand}>ShopNex</span>, we deliver excellence
            through premium solutions that redefine your shopping experience.
          </p>
        </div>

        <div className="row g-4">
          {Array.isArray(data.serviceList) && data.serviceList.length > 0 ? (
            data.serviceList.map((service, idx) => (
              <div
                key={idx}
                className={`col-md-6 col-lg-3 animate__animated animate__fadeInUp animate__delay-${idx}s`}
                onMouseEnter={() => setHoverIndex(idx)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div style={styles.card(hoverIndex === idx)} className="p-4">
                  <div style={styles.icon}>{service.icon}</div>
                  <h5 style={styles.title} className="mt-3">
                    {service.title}
                  </h5>
                  <p style={styles.text}>{service.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p style={{ color: "#555" }}>No services available</p>
          )}
        </div>
      </div>
    </section>
  );
}
  