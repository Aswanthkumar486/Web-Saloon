export default function Services({ services }) {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Our Insurance Services</h2>
          <p className="text-muted">Comprehensive coverage options</p>
        </div>

        <div className="row g-4">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay={service.id * 100}
            >
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <i className={`fas ${service.icon} text-primary display-4 mb-3`}></i>
                  <h3 className="h4">{service.title}</h3>
                  <p className="text-muted">{service.description}</p>
                  <button className="btn btn-outline-primary mt-2">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}