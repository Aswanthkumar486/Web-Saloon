export default function Footer({ footerData }) {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container py-5">
        <div className="row">
          {/* About Section */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h3 className="mb-4">
              <i className="fas fa-shield-alt me-2 text-primary"></i>InsureTrust
            </h3>
            <p className="text-white-50">{footerData.about}</p>
            <div className="d-flex mt-4">
              {footerData.social?.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  className="btn btn-outline-light btn-sm rounded-circle me-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
            <h5 className="mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              {footerData.links?.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.url} className="text-white-50 text-decoration-none">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-4">
            <h5 className="mb-4">Contact Info</h5>
            <ul className="list-unstyled text-white-50">
              <li className="mb-3">
                <i className="fas fa-map-marker-alt me-2"></i>
                {footerData.contactInfo.address}
              </li>
              <li className="mb-3">
                <i className="fas fa-phone me-2"></i>
                {footerData.contactInfo.phone}
              </li>
              <li>
                <i className="fas fa-envelope me-2"></i>
                {footerData.contactInfo.email}
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-4">
            <h5 className="mb-4">Newsletter</h5>
            <p className="text-white-50">Subscribe for insurance tips and updates</p>
            <div className="input-group mb-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Your Email" 
                aria-label="Email" 
              />
              <button className="btn btn-primary" type="button">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>

        <hr className="my-5 border-secondary" />

        {/* Footer Bottom */}
        <div className="text-center text-white-50">
          <p>{footerData?.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
