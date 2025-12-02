import React from 'react'
import './DownloadSection.css'

const DownloadSection = () => {
  // APK 파일 URL을 여기에 설정하세요
  // 방법 1: 환경 변수 사용 (.env 파일에 VITE_APK_URL=https://your-url.com/scc_app.apk)
  // 방법 2: 아래 URL을 직접 수정
  // public 폴더의 파일은 루트 경로로 접근 가능합니다
  // GitHub Pages의 경우 base 경로를 고려해야 합니다
  // APK 파일 경로 설정
  // GitHub Pages: /scc_app_site/downloads/scc_app.apk
  // 로컬 개발: /downloads/scc_app.apk
  const getAPKUrl = () => {
    // 환경 변수가 설정되어 있으면 사용
    if (import.meta.env.VITE_APK_URL) {
      return import.meta.env.VITE_APK_URL
    }
    
    // 현재 경로에서 base 경로 추출
    const currentPath = window.location.pathname
    let basePath = '/'
    
    if (currentPath.startsWith('/scc_app_site/')) {
      basePath = '/scc_app_site/'
    } else if (import.meta.env.BASE_URL) {
      basePath = import.meta.env.BASE_URL
    }
    
    return `${basePath}downloads/scc_app.apk`
  }
  
  const APK_URL = getAPKUrl()
  
  // 디버깅: 콘솔에 URL 출력
  console.log('APK URL:', APK_URL)
  console.log('Current pathname:', window.location.pathname)
  console.log('BASE_URL:', import.meta.env.BASE_URL)
  
  // iOS App Store 링크를 여기에 설정하세요
  const IOS_STORE_URL = import.meta.env.VITE_IOS_URL || 'https://apps.apple.com/app/id123456789'

  const handleAndroidDownload = () => {
    console.log('다운로드 버튼 클릭됨, URL:', APK_URL)
    try {
      // APK 파일 직접 다운로드
      const link = document.createElement('a')
      link.href = APK_URL
      link.download = 'scc_app.apk'
      link.style.display = 'none'
      document.body.appendChild(link)
      link.click()
      
      // 일정 시간 후 링크 제거
      setTimeout(() => {
        document.body.removeChild(link)
      }, 100)
      
      // 다운로드가 시작되지 않으면 새 창에서 열기
      setTimeout(() => {
        const testLink = document.createElement('a')
        testLink.href = APK_URL
        testLink.target = '_blank'
        testLink.rel = 'noopener noreferrer'
        testLink.click()
      }, 500)
    } catch (error) {
      console.error('다운로드 오류:', error)
      // 오류 발생 시 직접 링크로 열기
      window.open(APK_URL, '_blank')
    }
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

