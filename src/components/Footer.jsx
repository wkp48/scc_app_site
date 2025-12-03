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
          </div>
          <div className="footer-section">
            <h4 className="footer-title">문의</h4>
            <p className="footer-text">
              앱 관련 문의사항이 있으시면<br />
              센터로 연락주시기 바랍니다.
            </p>
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
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 세종충북도박문제예방치유센터. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

