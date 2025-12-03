import './VersionInfo.css';
import versionInfoData from '../data/versionInfo.json';

const VersionInfo = () => {
  const versionInfo = versionInfoData;

  return (
    <section id="version" className="version-info">
      <div className="version-container">
        <h2 className="section-title">버전 정보</h2>
        <div className="version-card">
          <div className="version-header">
            <div className="version-badge">현재 버전</div>
            <h3 className="version-number">v{versionInfo.currentVersion}</h3>
          </div>
          <div className="version-details">
            <div className="detail-item">
              <span className="detail-label">릴리즈 날짜</span>
              <span className="detail-value">{versionInfo.releaseDate}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">파일 크기</span>
              <span className="detail-value">{versionInfo.fileSize}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">최소 Android 버전</span>
              <span className="detail-value">{versionInfo.minAndroidVersion}</span>
            </div>
          </div>
          <div className="requirements">
            <h4 className="requirements-title">시스템 요구사항</h4>
            <ul className="requirements-list">
              {versionInfo.requirements.map((req, index) => (
                <li key={index} className="requirement-item">
                  <span className="requirement-icon">✓</span>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VersionInfo;

