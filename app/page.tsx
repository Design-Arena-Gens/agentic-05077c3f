'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0)

  const portraits = [
    {
      title: "Grace",
      description: "In every gesture, in every glance, there lies an elegance that transcends time.",
      color: "#FF6B9D"
    },
    {
      title: "Serenity",
      description: "A peaceful spirit that radiates beauty from within, touching all who encounter it.",
      color: "#C44569"
    },
    {
      title: "Strength",
      description: "Beauty is not just softness, but the power to persevere with dignity and grace.",
      color: "#FFA07A"
    },
    {
      title: "Wisdom",
      description: "True elegance comes from a mind that sees beauty in complexity and finds simplicity in chaos.",
      color: "#98D8C8"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % portraits.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Elegance</h1>
          <p className={styles.subtitle}>A Study in Beauty & Grace</p>
        </header>

        <div className={styles.gallery}>
          {portraits.map((portrait, index) => (
            <div
              key={index}
              className={`${styles.card} ${index === activeIndex ? styles.active : ''}`}
              style={{
                transform: `translateX(${(index - activeIndex) * 110}%)`,
                opacity: index === activeIndex ? 1 : 0.3,
              }}
            >
              <div className={styles.cardInner}>
                <div
                  className={styles.portraitCircle}
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${portrait.color}, ${portrait.color}dd)`
                  }}
                >
                  <svg viewBox="0 0 200 200" className={styles.portraitSvg}>
                    <defs>
                      <linearGradient id={`grad${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: portrait.color, stopOpacity: 0.8}} />
                        <stop offset="100%" style={{stopColor: '#ffffff', stopOpacity: 0.4}} />
                      </linearGradient>
                    </defs>

                    <ellipse cx="100" cy="80" rx="35" ry="45" fill={`url(#grad${index})`} opacity="0.9"/>

                    <path d="M 70 100 Q 100 140, 130 100" stroke="white" strokeWidth="2" fill="none" opacity="0.6"/>

                    <circle cx="85" cy="75" r="4" fill="white" opacity="0.8"/>
                    <circle cx="115" cy="75" r="4" fill="white" opacity="0.8"/>

                    <path d="M 90 95 Q 100 100, 110 95" stroke="white" strokeWidth="1.5" fill="none" opacity="0.7"/>

                    <path d="M 65 110 Q 100 150, 135 110 Q 135 180, 100 190 Q 65 180, 65 110" fill={portrait.color} opacity="0.6"/>
                  </svg>
                </div>

                <h2 className={styles.cardTitle}>{portrait.title}</h2>
                <p className={styles.cardDescription}>{portrait.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.dots}>
          {portraits.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View portrait ${index + 1}`}
            />
          ))}
        </div>

        <div className={styles.quote}>
          <p>"Beauty is not in the face; beauty is a light in the heart."</p>
          <span>— Kahlil Gibran</span>
        </div>
      </div>

      <div className={styles.background}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={styles.floatingShape}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
    </main>
  )
}
