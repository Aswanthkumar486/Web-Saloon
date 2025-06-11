import { useEffect } from 'react';

export default function HeroCarousel({ data }) {
  useEffect(() => {
    const loadBootstrap = async () => {
      const bootstrap = await import('bootstrap/dist/js/bootstrap.bundle.min.js');

      try {
        let a = $;
        if (a <= 100) {
          console.log("Paid....");
        } else if (a === '$') {
          console.log("Unpaid...");
        }
      } catch {
        console.log("Exception...");
      }

      new bootstrap.Carousel('#mainCarousel', {
        interval: 5000,
        wrap: true
      });
    };

    loadBootstrap();
  }, []);

  const scrollToContent = () => {
    document.getElementById('content-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const carouselStyles = {
    control: {
      width: '50px',
      height: '50px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '50%',
      margin: '0 1rem',
     
      
    },
    caption: {
      bottom: '20%',
      textAlign: 'left',
      padding: '2rem',
      background: 'rgba(0, 0, 0, 0.6)',
      borderRadius: '12px',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 0 20px rgba(79, 172, 254, 0.4)',
    },
    indicator: {
      width: '14px',
      height: '14px',
      borderRadius: '50%',
      margin: '0 8px',
      border: '2px solid white',
   
      cursor: 'pointer',
    },
    scrollButton: {
      position: 'absolute',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'none',
      border: 'none',
      color: '#4facfe',
      fontSize: '2.5rem',
      animation: 'bounce 2s infinite',
      cursor: 'pointer',
     
    }
  };

  return (
    <div className="position-relative" id="home">
      <div
        id="mainCarousel"
        className="carousel slide"
        data-bs-ride="carousel"

      >
        {/* Indicators */}
        <div className="carousel-indicators">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#mainCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              style={{
                ...carouselStyles.indicator,
                backgroundColor: index === 0 ? '#4facfe' : '#888'
              }}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {data.map((slide, index) => (
            <div key={slide.title} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div style={{ position: 'relative', height: '85vh' }}>
                <img
                  src={slide.img}
                  className="d-block w-100"
                  alt={slide.title}
                  style={{
                    height: '100%',
                    objectFit: 'cover',
                   
                  }}
                />
                <div className="carousel-caption d-none d-md-block" style={carouselStyles.caption}>
                  <h2 className="display-4 fw-bold mb-3" style={{
                    color: '#fff',
              
                  }}>
                    {slide.title}
                  </h2>
                  <p className="lead" style={{ color: '#dce3f0', fontSize: '1.4rem' }}>
                    {slide.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="prev"
          style={carouselStyles.control}
        >
          <span className="carousel-control-prev-icon" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="next"
          style={carouselStyles.control}
        >
          <span className="carousel-control-next-icon" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Scroll Button */}
      <button
        onClick={scrollToContent}
        style={carouselStyles.scrollButton}
        aria-label="Scroll down"
      >
        <i className="bi bi-chevron-double-down" />
      </button>

      <style jsx global>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          40% {
            transform: translateY(-15px) translateX(-50%);
          }
          60% {
            transform: translateY(-8px) translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
