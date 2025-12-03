import './CookiePolicy.css';

const CookiePolicy = () => {
  const handleBack = () => {
    window.location.hash = '';
    window.scrollTo(0, 0);
  };

  return (
    <div className="cookie-policy-page">
      <div className="cookie-container">
        <button onClick={handleBack} className="back-button">
          ← 홈으로 돌아가기
        </button>
        
        <div className="cookie-content">
          <h1 className="cookie-title">쿠키 정책</h1>
          <p className="cookie-effective-date">시행일자: 2025년 12월 3일</p>

          <div className="policy-intro">
            <p>
              세종충북도박문제예방치유센터(이하 "센터")는 이용자에게 개인화되고 맞춤화된 서비스를 제공하기 위해 쿠키를 사용합니다. 본 쿠키 정책은 센터가 어떤 쿠키를 사용하고, 어떻게 사용하며, 이용자가 쿠키 사용을 어떻게 제어할 수 있는지에 대해 설명합니다.
            </p>
          </div>

          <section className="cookie-section">
            <h2 className="section-title">1. 쿠키란?</h2>
            <p className="section-content">
              쿠키는 웹사이트를 방문할 때 사용자의 컴퓨터나 모바일 기기에 저장되는 작은 텍스트 파일입니다. 쿠키는 웹사이트가 사용자의 기기를 인식하고, 사용자의 선호도와 행동을 기억하는 데 도움을 줍니다.
            </p>
          </section>

          <section className="cookie-section">
            <h2 className="section-title">2. 쿠키의 사용 목적</h2>
            <p className="section-content">센터는 다음의 목적으로 쿠키를 사용합니다:</p>
            <ul className="section-list">
              <li><strong>필수 쿠키:</strong> 웹사이트의 기본 기능을 제공하고 안전하게 작동하도록 하는 데 필요합니다.</li>
              <li><strong>성능 쿠키:</strong> 웹사이트의 성능을 분석하고 개선하는 데 사용됩니다.</li>
              <li><strong>기능 쿠키:</strong> 사용자의 선호도를 기억하여 더 나은 사용자 경험을 제공합니다.</li>
              <li><strong>분석 쿠키:</strong> 웹사이트 방문자 수, 페이지 조회수, 사용자 행동 패턴 등을 분석합니다.</li>
            </ul>
          </section>

          <section className="cookie-section">
            <h2 className="section-title">3. 사용하는 쿠키의 종류</h2>
            
            <h3 className="subsection-title">3.1 필수 쿠키</h3>
            <p className="section-content">
              이러한 쿠키는 웹사이트의 기본 기능을 제공하는 데 필수적입니다. 웹사이트가 제대로 작동하려면 이러한 쿠키가 필요합니다.
            </p>
            <ul className="section-list">
              <li><strong>세션 쿠키:</strong> 사용자가 웹사이트를 탐색하는 동안 일시적으로 저장되는 쿠키</li>
              <li><strong>보안 쿠키:</strong> 웹사이트의 보안을 유지하는 데 사용되는 쿠키</li>
            </ul>

            <h3 className="subsection-title">3.2 성능 및 분석 쿠키</h3>
            <p className="section-content">
              이러한 쿠키는 웹사이트의 성능을 측정하고 분석하는 데 사용됩니다. 웹사이트가 어떻게 사용되는지 이해하는 데 도움을 줍니다.
            </p>
            <ul className="section-list">
              <li><strong>방문 통계:</strong> 페이지 조회수, 방문자 수, 평균 체류 시간 등</li>
              <li><strong>사용자 행동 분석:</strong> 사용자가 어떤 페이지를 방문하고, 어떤 링크를 클릭하는지 추적</li>
            </ul>

            <h3 className="subsection-title">3.3 기능 쿠키</h3>
            <p className="section-content">
              이러한 쿠키는 사용자의 선호도를 기억하여 더 개인화된 경험을 제공합니다.
            </p>
            <ul className="section-list">
              <li><strong>언어 설정:</strong> 사용자가 선택한 언어 설정 기억</li>
              <li><strong>화면 설정:</strong> 사용자의 화면 크기 및 해상도 설정 기억</li>
            </ul>
          </section>

          <section className="cookie-section">
            <h2 className="section-title">4. 쿠키의 보유 기간</h2>
            <p className="section-content">센터가 사용하는 쿠키의 보유 기간은 다음과 같습니다:</p>
            <ul className="section-list">
              <li><strong>세션 쿠키:</strong> 브라우저를 닫을 때까지 유지되며, 이후 자동으로 삭제됩니다.</li>
              <li><strong>영구 쿠키:</strong> 설정된 만료일까지 유지되며, 최대 2년까지 보유할 수 있습니다.</li>
            </ul>
            <p className="section-content">
              쿠키는 만료일이 지나면 자동으로 삭제되며, 사용자가 직접 삭제할 수도 있습니다.
            </p>
          </section>

          <section className="cookie-section">
            <h2 className="section-title">5. 쿠키 설정 관리</h2>
            <p className="section-content">
              이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 웹 브라우저에서 옵션을 설정하여 쿠키 허용 여부를 결정할 수 있습니다.
            </p>
            
            <h3 className="subsection-title">5.1 브라우저별 쿠키 설정 방법</h3>
            <ul className="section-list">
              <li><strong>Chrome:</strong> 설정 → 개인정보 및 보안 → 쿠키 및 기타 사이트 데이터</li>
              <li><strong>Firefox:</strong> 설정 → 개인정보 및 보안 → 쿠키 및 사이트 데이터</li>
              <li><strong>Safari:</strong> 환경설정 → 개인정보 보호 → 쿠키 및 웹 사이트 데이터</li>
              <li><strong>Edge:</strong> 설정 → 쿠키 및 사이트 권한 → 쿠키 및 사이트 데이터</li>
            </ul>

            <h3 className="subsection-title">5.2 쿠키 거부 시 영향</h3>
            <p className="section-content">
              쿠키를 거부하거나 삭제할 경우, 웹사이트의 일부 기능이 제대로 작동하지 않을 수 있습니다. 특히 필수 쿠키를 거부하면 웹사이트의 기본 기능을 사용할 수 없을 수 있습니다.
            </p>
          </section>

          <section className="cookie-section">
            <h2 className="section-title">6. 제3자 쿠키</h2>
            <p className="section-content">
              현재 센터 웹사이트는 제3자 쿠키를 사용하지 않습니다. 향후 제3자 서비스(예: Google Analytics 등)를 도입할 경우, 이 정책을 업데이트하여 공지하겠습니다.
            </p>
          </section>

          <section className="cookie-section">
            <h2 className="section-title">7. 쿠키 정책의 변경</h2>
            <p className="section-content">
              센터는 법령·정책 또는 기술의 변경에 따라 쿠키 정책을 변경할 수 있습니다. 변경사항이 있을 경우 웹사이트를 통해 공지하며, 변경사항의 시행 7일 전부터 공지합니다.
            </p>
          </section>

          <section className="cookie-section">
            <h2 className="section-title">8. 문의</h2>
            <p className="section-content">
              쿠키 정책에 대한 문의사항이 있으시면 아래로 연락해 주시기 바랍니다.
            </p>
            <div className="contact-info">
              <p><strong>소속:</strong> 세종충북도박문제예방치유센터</p>
              <p><strong>주소:</strong> 충청북도 청주시 흥덕구 경산로 1, 5층</p>
              <p><strong>연락처:</strong> 042-000-0000</p>
            </div>
          </section>

          <div className="cookie-footer">
            <p className="last-updated">최종 수정일: 2025년 12월 3일</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;

