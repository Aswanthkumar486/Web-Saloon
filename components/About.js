import Image from "next/image";


export default function AboutUs({ data }) {
  return (
    <section className="bg-light text-dark py-5 border-top border-4 border-info" id="about">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-uppercase animate__animated animate__fadeInDown text-secondary">
            {data.title}
          </h2>
          <p className="lead text-muted animate__animated animate__fadeIn animate__delay-1s">
            {data.description}
          </p>
        </div>

        <div className="row align-items-center gy-5">
          {/* Left: Features as List */}
          <div className="col-lg-6 animate__animated animate__fadeInLeft animate__delay-2s">
            <h3 className="h5 fw-bold mb-4 text-info text-uppercase">
              {data.whyChooseTitle}
            </h3>
              <Image
                src={data.image.src}
                alt={data.image.alt}
                width={data.image.width}
                height={data.image.height}
                className="img-fluid rounded"
                style={{ width: "100%", height: "auto" }}
              />
          </div>

          {/* Right: Image */}
          <div className="col-lg-6 animate__animated animate__zoomIn animate__delay-2s">
            <div className="rounded overflow-hidden shadow">
            
              <ul className="list-group shadow rounded">
              {data.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="list-group-item d-flex align-items-start gap-3"
                >
                  <span className="text-success fs-5">✔</span>
                  <div>
                    <h6 className="mb-1 fw-semibold">{feature.title}</h6>
                    <p className="mb-0 text-muted">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-5 animate__animated animate__fadeInUp animate__delay-3s">
          <p className="text-muted fs-5">
            {data.footerNote}
            <i className="bi bi-stars ms-2 text-info"></i>
          </p>
        </div>
      </div>
    </section>
  );
}
