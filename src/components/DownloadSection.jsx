import React from 'react'
import './DownloadSection.css'

const DownloadSection = () => {
  // APK 파일 URL을 여기에 설정하세요
  // 방법 1: 환경 변수 사용 (.env 파일에 VITE_APK_URL=https://your-url.com/scc_app.apk)
  // 방법 2: 아래 URL을 직접 수정
  const APK_URL = import.meta.env.VITE_APK_URL || 'https://your-apk-url-here.com/scc_app.apk'
  
  // iOS App Store 링크를 여기에 설정하세요
  const IOS_STORE_URL = import.meta.env.VITE_IOS_URL || 'https://apps.apple.com/app/id123456789'

  const handleAndroidDownload = () => {
    // APK 파일 직접 다운로드
    const link = document.createElement('a')
    link.href = APK_URL
    link.download = 'scc_app.apk'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleIOSDownload = () => {
    // App Store로 이동
    window.open(IOS_STORE_URL, '_blank')
  }

  return (
    <section className="download-section">
      <div className="download-container">
        <h2 className="download-title">다운로드</h2>
        <p className="download-subtitle">지금 바로 다운로드하여 이용하세요</p>
        
        <div className="download-buttons">
          <button 
            className="download-btn android-btn"
            onClick={handleAndroidDownload}
          >
            <div className="btn-icon">🤖</div>
            <div className="btn-content">
              <span className="btn-label">Android</span>
              <span className="btn-subtitle">APK 다운로드</span>
            </div>
            <div className="btn-arrow">→</div>
          </button>

          <button 
            className="download-btn ios-btn"
            onClick={handleIOSDownload}
          >
            <div className="btn-icon">🍎</div>
            <div className="btn-content">
              <span className="btn-label">iOS</span>
              <span className="btn-subtitle">App Store</span>
            </div>
            <div className="btn-arrow">→</div>
          </button>
        </div>

        <div className="download-info">
          <p className="info-text">
            💡 <strong>안드로이드:</strong> APK 파일을 다운로드하여 설치하세요.<br />
            💡 <strong>iOS:</strong> App Store에서 다운로드하세요.
          </p>
        </div>
      </div>
    </section>
  )
}

export default DownloadSection

