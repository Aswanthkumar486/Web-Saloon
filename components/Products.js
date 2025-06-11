import Image from 'next/image';
import { useState } from 'react';

export default function ProductCard({ data }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  if (!data || !Array.isArray(data)) return null;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '2rem',
        justifyContent: 'center',
        padding: '1rem',
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
      }}
      id="products"
    >
      {data.map((item, index) => (
        <article
          key={item.id}
          style={{
            border: '1px solid #e0e0e0',
            borderRadius: '12px',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            background: '#ffffff',
            width: '100%',
            cursor: 'pointer',
            transform: hoveredIndex === index ? 'translateY(-8px)' : 'none',
            boxShadow:
              hoveredIndex === index
                ? '0 12px 25px rgba(0, 153, 255, 0.15)'
                : '0 4px 12px rgba(0,0,0,0.08)',
            position: 'relative',
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            style={{
              position: 'relative',
              aspectRatio: '1/1',
              overflow: 'hidden',
              backgroundColor: '#f0f0f0',
            }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              style={{
                objectFit: 'cover',
                transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s ease',
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div style={{ padding: '1rem', color: '#222' }}>
            <h3 style={{ margin: '0.5rem 0', fontSize: '1.1rem' }}>{item.title}</h3>
            <p style={{ fontSize: '0.85rem', color: '#666' }}>{item.category}</p>
            <p
              style={{
                fontWeight: '700',
                color: '#0099ff',
                marginTop: '0.25rem',
              }}
            >
              ₹{(item.price ?? 0).toLocaleString('en-IN')}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
