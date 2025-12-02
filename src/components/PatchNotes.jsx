import React, { useState } from 'react'
import './PatchNotes.css'

const PatchNotes = () => {
  const [expandedVersion, setExpandedVersion] = useState('1.0.0')

  const patchNotes = [
    {
      version: '1.0.0',
      date: '2024.01.15',
      changes: [
        '세종충북도박문제예방치유센터 애플리케이션 첫 출시',
        '사용자 로그인 및 회원가입 기능',
        '도박문제 상담 신청 기능',
        '치유 프로그램 안내 및 신청',
        '공지사항 및 이벤트 확인',
        '마이페이지 기능',
      ],
      type: 'major'
    },
    // 향후 패치노트 추가 예시
    // {
    //   version: '1.1.0',
    //   date: '2024.02.01',
    //   changes: [
    //     '푸시 알림 기능 추가',
    //     '상담 일정 관리 기능 개선',
    //     'UI/UX 개선',
    //   ],
    //   type: 'minor'
    // },
  ]

  const toggleVersion = (version) => {
    setExpandedVersion(expandedVersion === version ? null : version)
  }

  return (
    <section className="patch-notes">
      <div className="patch-container">
        <h2 className="patch-title">패치노트</h2>
        <p className="patch-subtitle">최신 업데이트 내역을 확인하세요</p>

        <div className="patch-list">
          {patchNotes.map((note, index) => (
            <div 
              key={index} 
              className={`patch-item ${expandedVersion === note.version ? 'expanded' : ''}`}
            >
              <div 
                className="patch-header"
                onClick={() => toggleVersion(note.version)}
              >
                <div className="patch-header-left">
                  <span className={`patch-badge ${note.type}`}>
                    {note.type === 'major' ? '주요 업데이트' : '업데이트'}
                  </span>
                  <div className="patch-version-info">
                    <span className="patch-version">v{note.version}</span>
                    <span className="patch-date">{note.date}</span>
                  </div>
                </div>
                <div className="patch-toggle">
                  {expandedVersion === note.version ? '▼' : '▶'}
                </div>
              </div>
              
              {expandedVersion === note.version && (
                <div className="patch-content">
                  <ul className="patch-changes">
                    {note.changes.map((change, changeIndex) => (
                      <li key={changeIndex} className="patch-change-item">
                        {change}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PatchNotes

