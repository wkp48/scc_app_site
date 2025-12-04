import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4 className="footer-title">세종충북도박문제예방치유센터</h4>
            <p className="footer-description">
              세종충북도박문제예방치유센터 공식 모바일 애플리케이션입니다.
            </p>
            <div className="footer-contact">
              <p className="footer-text">
                <strong>주소:</strong> 충청북도 청주시 흥덕구 경산로 1, 5층
              </p>
              <p className="footer-text">
                <strong>문의:</strong> 043-275-0051
              </p>
            </div>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">다운로드</h4>
            <a href="#download" className="footer-link">
              Android APK 다운로드
            </a>
            <a href="#version" className="footer-link">
              버전 정보
            </a>
            <a href="#patchnotes" className="footer-link">
              패치노트
            </a>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">법적 정보</h4>
            <a href="#privacy" className="footer-link">
              개인정보 처리 방침
            </a>
            <a href="#terms" className="footer-link">
              사이트 이용 약관
            </a>
            <a href="#cookies" className="footer-link">
              쿠키 정책
            </a>
            <a href="#copyright" className="footer-link">
              저작권 정보
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2025 세종충북도박문제예방치유센터. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

