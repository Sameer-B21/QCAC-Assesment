import React from 'react';

export default function Features() {
  const features = [
    { icon: '📚', title: 'Seven-book collection', description: 'Complete collection from Philosopher\'s Stone to Deathly Hallows' },
    { icon: '🌍', title: 'Rich magical world-building', description: 'Immersive magical universe with detailed lore and history' },
    { icon: '🏆', title: 'Award-winning fantasy series', description: 'Recognized globally for exceptional narrative and character development' },
    { icon: '✨', title: 'Iconic characters (Harry, Hermione, Ron)', description: 'Beloved characters that have captured hearts worldwide' },
    { icon: '👶', title: 'Suitable for readers 8+', description: 'Perfect for readers of all ages, growing with the characters' }
  ];

  return (
    <section className="features-section">
      <h2 className="section-title">Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
