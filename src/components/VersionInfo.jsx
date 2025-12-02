import React from 'react'
import './VersionInfo.css'

const VersionInfo = () => {
  const version = "1.0.0"
  const buildNumber = "1"
  const releaseDate = "2024.01.15"

  return (
    <section className="version-info">
      <div className="version-container">
        <div className="version-card">
          <div className="version-icon">📱</div>
          <div className="version-details">
            <h3 className="version-label">현재 버전</h3>
            <p className="version-number">v{version}</p>
            <p className="version-build">Build {buildNumber}</p>
            <p className="version-date">출시일: {releaseDate}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VersionInfo

