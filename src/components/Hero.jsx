import './Hero.css';
import { useState } from 'react';
import versionInfoData from '../data/versionInfo.json';

const Hero = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      
      // APK 파일 다운로드
      const response = await fetch(versionInfoData.apkUrl);
      
      if (!response.ok) {
        throw new Error('파일을 찾을 수 없습니다.');
      }
      
      // Blob으로 변환
      const blob = await response.blob();
      
      // Blob URL 생성
      const blobUrl = window.URL.createObjectURL(blob);
      
      // 동적으로 <a> 태그 생성하여 다운로드
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `scc_app_v${versionInfoData.currentVersion}.apk`;
      document.body.appendChild(link);
      link.click();
      
      // 정리
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
      
      setIsDownloading(false);
    } catch (error) {
      console.error('다운로드 실패:', error);
      setIsDownloading(false);
      
      // 실패 시 직접 링크로 시도
      alert('다운로드에 실패했습니다. 직접 다운로드를 시도합니다.');
      window.open(versionInfoData.apkUrl, '_blank');
    }
  };

  return (
    <section id="download" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            세종충북도박문제예방치유센터
            <br />
            모바일 앱
          </h1>
          <p className="hero-description">
            언제 어디서나 편리하게 이용하실 수 있는
            <br />
            세종충북도박문제예방치유센터 공식 앱입니다.
          </p>
          <div className="hero-buttons">
            <button 
              onClick={handleDownload} 
              className="download-btn primary"
              disabled={isDownloading}
            >
              <span className="btn-icon">📱</span>
              {isDownloading ? '다운로드 중...' : 'Android APK 다운로드'}
            </button>
          </div>
          <div className="hero-info">
            <p className="info-text">
              ⚠️ Android 기기에서만 설치 가능합니다
            </p>
            <p className="info-text">
              설치 시 "알 수 없는 소스" 허용이 필요할 수 있습니다
            </p>
          </div>
        </div>
        <div className="hero-image">
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="app-preview">
                <div className="preview-content">
                  <h3>앱 미리보기</h3>
                  <p>스마트폰에서 더 나은 경험을 제공합니다</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

