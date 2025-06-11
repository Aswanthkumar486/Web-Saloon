export default function ContactForm({ contactData }) {
  if (!contactData) return null; // Optional: prevent render if data missing

  return (
    <section className="bg-light py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
            <h2 className="display-5 fw-bold mb-4">{contactData.title}</h2>
            <p className="lead mb-4">{contactData.subtitle}</p>
            {/* Your other contact form fields here */}
          </div>
        </div>
      </div>
    </section>
  );
}
