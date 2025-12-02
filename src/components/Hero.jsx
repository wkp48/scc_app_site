import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h2 className="hero-title">안전하고 편리한</h2>
          <h2 className="hero-title-accent">도박문제 예방치유 서비스</h2>
          <p className="hero-description">
            세종충북도박문제예방치유센터의 공식 애플리케이션을 통해<br />
            언제 어디서나 전문적인 상담과 지원을 받으세요.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero

