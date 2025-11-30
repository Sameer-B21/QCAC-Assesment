import React from 'react';

export default function Features() {
  const features = [
    { icon: '📚', title: 'Includes 7 books', description: 'Complete collection from Philosopher\'s Stone to Deathly Hallows' },
    { icon: '🌍', title: 'Rich world-building', description: 'Immersive magical universe with detailed lore and history' },
    { icon: '🏆', title: 'Award-winning fantasy storytelling', description: 'Recognized globally for exceptional narrative and character development' },
    { icon: '👶', title: 'Suitable for ages 8+', description: 'Perfect for readers of all ages, growing with the characters' },
    { icon: '✨', title: 'Iconic characters', description: 'Beloved characters like Harry, Hermione, and Ron' }
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
