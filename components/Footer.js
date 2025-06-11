

export default function Footer({ data }) {
  const {
    brand,
    tagline,
    newsletter,
    exploreLinks,
    supportLinks,
    contact,
    socialMedia,
    copyright 
  } = data;

  const styles = {
    footer: {
      backgroundColor: "#FCEF91",
      color: "#333",
      padding: "4rem 1rem 2rem",
      fontFamily: "'Montserrat', sans-serif",
      borderTop: "4px solid #3498db"
    },
    brand: {
      fontSize: "2rem",
      fontWeight: "700",
      color: "gray",
      marginBottom: "1.5rem",
      textTransform: "uppercase"
    },
    link: {
      display: "block",
      color: "#333",
      textDecoration: "none",
      marginBottom: "0.75rem",
      fontWeight: "500",
      transition: "color 0.3s ease",
    },
    linkHover: {
      color: "#3498db"
    },
    heading: {
      fontWeight: "600",
      color: "gray",
      marginBottom: "1.5rem",
      fontSize: "1.2rem",
      textTransform: "uppercase"
    },
    text: {
      fontSize: "0.9rem",
      marginTop: "2rem",
      color: "#666"
    },
    icon: {
      marginRight: "0.75rem",
      color: "gray"
    },
    socialIcon: {
      fontSize: "1.5rem",
      color: "#666",
      marginRight: "1rem",
      transition: "color 0.3s ease"
    },
    newsletterInput: {
      backgroundColor: "#ffffff",
      border: "1px solid #ccc",
      color: "#333",
      borderRadius: "0",
    },
    subscribeBtn: {
      backgroundColor: "#3498db",
      color: "white",
      borderRadius: "0",
      fontWeight: "600",
      textTransform: "uppercase",
      border: "none",
      padding: "0.75rem 2rem"
    }
  };

  return (
    <footer style={styles.footer} id="footer" className="animate__animated animate__slideInUp">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Brand and Newsletter */}
          <div className="col-lg-4 col-md-6 mb-5">
            <div style={styles.brand}>{brand}</div>
            <p className="mb-4">{tagline}</p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder={newsletter.placeholder}
                style={styles.newsletterInput}
                className="form-control mb-3"
              />
              <button style={styles.subscribeBtn} className="w-100">
                {newsletter.buttonText}
              </button>
            </div>
          </div>

          {/* Explore Links */}
          <div className="col-lg-2 col-md-6 mb-5">
            <div style={styles.heading}>Explore</div>
            {exploreLinks.map((link, index) => (
              <a
                href="#"
                key={index}
                style={styles.link}
                onMouseOver={(e) => e.target.style.color = styles.linkHover.color}
                onMouseOut={(e) => e.target.style.color = styles.link.color}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Support Links */}
          <div className="col-lg-3 col-md-6 mb-5">
            <div style={styles.heading}>Support</div>
            {supportLinks.map((link, index) => (
              <a
                href="#"
                key={index}
                style={styles.link}
                onMouseOver={(e) => e.target.style.color = styles.linkHover.color}
                onMouseOut={(e) => e.target.style.color = styles.link.color}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Contact & Social */}
          <div className="col-lg-3 col-md-6 mb-5">
            <div style={styles.heading}>Connect</div>
            <p><i className="bi bi-geo-alt-fill" style={styles.icon}></i>{contact.location}</p>
            <p><i className="bi bi-envelope-fill" style={styles.icon}></i>{contact.email}</p>
            <p><i className="bi bi-telephone-fill" style={styles.icon}></i>{contact.phone}</p>
            <div className="mt-4">
              {socialMedia.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  style={styles.socialIcon}
                  className={item.iconClass}
                  onMouseOver={(e) => e.target.style.color = "#3498db"}
                  onMouseOut={(e) => e.target.style.color = styles.socialIcon.color}
                ></a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <p style={styles.text}>
            {copyright.text} | Designed with{" "}
            <i className="bi bi-heart-fill text-danger"></i> by {copyright.designer}
          </p>
        </div>
      </div>
    </footer>
  );
}
