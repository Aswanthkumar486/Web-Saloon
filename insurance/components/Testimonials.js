export default function Testimonials({ testimonials }) {
  return (
    <section className="py-5 bg-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">What Our Clients Say</h2>
          <p className="text-muted">Trusted by thousands of satisfied customers</p>
        </div>

        <div className="row g-4">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay={testimonial.id * 100}
            >
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i} 
                        className={`fas fa-star ${i < testimonial.rating ? 'text-warning' : 'text-secondary'}`}
                      ></i>
                    ))}
                  </div>
                  <p className="fst-italic mb-4">"{testimonial.comment}"</p>
                  <div className="d-flex align-items-center">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <i className="fas fa-user"></i>
                    </div>
                    <h5 className="mb-0">{testimonial.name}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}