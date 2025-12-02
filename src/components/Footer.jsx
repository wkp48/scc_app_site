import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3 className="footer-title">세종충북도박문제예방치유센터</h3>
          <p className="footer-description">
            도박문제 예방과 치유를 위한 전문적인 상담 및 지원 서비스를 제공합니다.
          </p>
          <div className="footer-info">
            <p>문의: support@scc.go.kr</p>
            <p>© 2024 세종충북도박문제예방치유센터. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

