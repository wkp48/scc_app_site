import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
  const handleLogoClick = () => {
    window.location.hash = '';
    window.scrollTo(0, 0);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-wrapper" onClick={handleLogoClick}>
          <img src={logo} alt="세종충북도박문제예방치유센터" className="logo" />
        </div>
        <nav className="nav">
          <a href="#download" className="nav-link">다운로드</a>
          <a href="#version" className="nav-link">버전 정보</a>
          <a href="#patchnotes" className="nav-link">패치노트</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

