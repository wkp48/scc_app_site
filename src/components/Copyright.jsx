import './Copyright.css';

const Copyright = () => {
  const handleBack = () => {
    window.location.hash = '';
    window.scrollTo(0, 0);
  };

  return (
    <div className="copyright-page">
      <div className="copyright-container">
        <button onClick={handleBack} className="back-button">
          ← 홈으로 돌아가기
        </button>
        
        <div className="copyright-content">
          <h1 className="copyright-title">저작권 정보</h1>
          <p className="copyright-effective-date">시행일자: 2025년 12월 3일</p>

          <div className="policy-intro">
            <p>
              세종충북도박문제예방치유센터(이하 "센터") 웹사이트 및 모바일 애플리케이션의 저작권에 관한 정보입니다. 본 저작권 정보는 센터가 제공하는 모든 콘텐츠의 저작권 보호 및 이용에 관한 사항을 규정합니다.
            </p>
          </div>

          <section className="copyright-section">
            <h2 className="section-title">1. 저작권의 귀속</h2>
            <p className="section-content">
              센터 웹사이트 및 모바일 애플리케이션에 게시된 모든 콘텐츠(텍스트, 이미지, 그래픽, 로고, 아이콘, 소프트웨어 등)의 저작권은 세종충북도박문제예방치유센터에 귀속됩니다.
            </p>
            <p className="section-content">
              단, 센터가 제3자의 저작권을 사용하는 경우 해당 저작권은 원저작권자에게 귀속됩니다.
            </p>
          </section>

          <section className="copyright-section">
            <h2 className="section-title">2. 저작물의 이용</h2>
            
            <h3 className="subsection-title">2.1 허용되는 이용</h3>
            <p className="section-content">다음의 경우에는 센터의 허가 없이 저작물을 이용할 수 있습니다:</p>
            <ul className="section-list">
              <li>개인적인 학습, 연구, 교육 목적의 이용</li>
              <li>비상업적 목적의 인용 (출처 명시 필수)</li>
              <li>법령에 의한 이용</li>
            </ul>

            <h3 className="subsection-title">2.2 금지되는 이용</h3>
            <p className="section-content">다음의 행위는 금지됩니다:</p>
            <ul className="section-list">
              <li>상업적 목적의 무단 복제, 배포, 전송</li>
              <li>저작권 표시 및 출처 표시 없이의 이용</li>
              <li>저작물의 내용을 변경하거나 변형하여 이용</li>
              <li>제3자에게 재배포하거나 재라이선스하는 행위</li>
              <li>저작권자의 명예를 훼손하는 방식으로의 이용</li>
            </ul>
          </section>

          <section className="copyright-section">
            <h2 className="section-title">3. 저작권 표시</h2>
            <p className="section-content">
              센터의 저작물을 이용할 경우, 다음의 저작권 표시를 명시해야 합니다:
            </p>
            <div className="copyright-notice">
              <p><strong>© 2025 세종충북도박문제예방치유센터. All rights reserved.</strong></p>
            </div>
            <p className="section-content">
              출처를 명시할 때는 "세종충북도박문제예방치유센터" 또는 "SCC"로 표기할 수 있습니다.
            </p>
          </section>

          <section className="copyright-section">
            <h2 className="section-title">4. 제3자 저작물</h2>
            <p className="section-content">
              센터 웹사이트 및 모바일 애플리케이션에는 제3자가 제공한 저작물이 포함될 수 있습니다. 이러한 저작물의 저작권은 해당 제3자에게 귀속되며, 이용 시 해당 제3자의 이용약관 및 저작권 정책을 준수해야 합니다.
            </p>
            <p className="section-content">
              센터는 제3자 저작물의 사용에 대해 적절한 권한을 보유하고 있으며, 이용자에게는 해당 저작물의 사용 권한을 부여하지 않습니다.
            </p>
          </section>

          <section className="copyright-section">
            <h2 className="section-title">5. 저작권 침해 신고</h2>
            <p className="section-content">
              센터의 저작권이 침해되었다고 판단되는 경우, 아래 연락처로 신고해 주시기 바랍니다. 신고 시 다음 정보를 제공해 주시기 바랍니다:
            </p>
            <ul className="section-list">
              <li>침해된 저작물의 명칭 및 위치</li>
              <li>침해 행위의 구체적 내용</li>
              <li>신고자의 연락처 정보</li>
              <li>저작권 소유 증빙 자료</li>
            </ul>
            <div className="contact-info">
              <p><strong>저작권 침해 신고</strong></p>
              <p><strong>소속:</strong> 세종충북도박문제예방치유센터</p>
              <p><strong>주소:</strong> 충청북도 청주시 흥덕구 경산로 1, 5층</p>
              <p><strong>연락처:</strong> 042-000-0000</p>
            </div>
          </section>

          <section className="copyright-section">
            <h2 className="section-title">6. 이용 허락 신청</h2>
            <p className="section-content">
              센터의 저작물을 상업적 목적으로 이용하고자 하는 경우, 사전에 센터의 서면 허가를 받아야 합니다. 이용 허락 신청 시 다음 정보를 제공해 주시기 바랍니다:
            </p>
            <ul className="section-list">
              <li>이용하고자 하는 저작물의 명칭 및 위치</li>
              <li>이용 목적 및 방법</li>
              <li>이용 기간 및 범위</li>
              <li>신청자의 연락처 정보</li>
            </ul>
            <p className="section-content">
              센터는 신청 내용을 검토한 후 허가 여부를 결정하며, 허가 시 이용 조건을 명시합니다.
            </p>
          </section>

          <section className="copyright-section">
            <h2 className="section-title">7. 저작권 보호 조치</h2>
            <p className="section-content">
              센터는 저작권을 보호하기 위해 다음과 같은 조치를 취하고 있습니다:
            </p>
            <ul className="section-list">
              <li>디지털 저작권 관리(DRM) 기술의 적용</li>
              <li>저작권 침해 모니터링 및 대응</li>
              <li>법적 절차를 통한 권리 보호</li>
              <li>이용자에 대한 저작권 교육 및 안내</li>
            </ul>
          </section>

          <section className="copyright-section">
            <h2 className="section-title">8. 면책 조항</h2>
            <p className="section-content">
              이용자가 본 저작권 정보를 위반하여 발생한 모든 법적 책임은 이용자에게 있습니다. 센터는 이용자의 저작권 위반 행위로 인해 발생한 제3자와의 분쟁에 대해 책임을 지지 않습니다.
            </p>
          </section>

          <section className="copyright-section">
            <h2 className="section-title">9. 저작권 정보의 변경</h2>
            <p className="section-content">
              센터는 법령의 변경이나 정책의 변경에 따라 본 저작권 정보를 수정할 수 있으며, 변경사항은 웹사이트를 통해 공지합니다. 변경사항의 시행 7일 전부터 공지하며, 중요한 변경사항의 경우 더 긴 기간 동안 공지할 수 있습니다.
            </p>
          </section>

          <div className="copyright-footer">
            <p className="last-updated">최종 수정일: 2025년 12월 3일</p>
            <div className="copyright-summary">
              <p><strong>웹사이트 소유자:</strong> 세종충북도박문제예방치유센터</p>
              <p><strong>저작권 소유자:</strong> 세종충북도박문제예방치유센터</p>
              <p><strong>저작권 연도:</strong> 2025년</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;

