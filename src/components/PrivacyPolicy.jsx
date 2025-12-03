import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const handleBack = () => {
    window.location.hash = '';
    window.scrollTo(0, 0);
  };

  return (
    <div className="privacy-policy-page">
      <div className="privacy-container">
        <button onClick={handleBack} className="back-button">
          ← 홈으로 돌아가기
        </button>
        
        <div className="privacy-content">
          <h1 className="privacy-title">개인정보 처리 방침</h1>
          <p className="privacy-effective-date">시행일자: 2025년 12월 3일</p>

          <div className="policy-intro">
            <p>
              세종충북도박문제예방치유센터(이하 "센터")는 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하기 위해 다음과 같은 방침을 시행하고 있습니다.
            </p>
          </div>

          <section className="privacy-section">
            <h2 className="section-title">1. 개인정보의 처리 목적</h2>
            <p className="section-content">
              센터는 다음의 목적을 위하여 개인정보를 처리합니다:
            </p>
            <ul className="section-list">
              <li>모바일 애플리케이션 다운로드 서비스 제공</li>
              <li>이용자 문의사항 처리 및 응대</li>
              <li>서비스 개선 및 통계 분석</li>
            </ul>
            <p className="section-note">
              <strong>참고:</strong> 현재 웹사이트는 앱 다운로드만 제공하며, 개인정보를 수집하지 않습니다.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="section-title">2. 개인정보의 처리 및 보유 기간</h2>
            <p className="section-content">
              센터는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
            </p>
            <p className="section-note">
              <strong>현재:</strong> 웹사이트 자체에서는 개인정보를 수집하지 않습니다.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="section-title">3. 처리하는 개인정보의 항목</h2>
            <p className="section-content">현재 웹사이트는 다음의 정보를 처리할 수 있습니다:</p>
            
            <h3 className="subsection-title">자동 수집 정보</h3>
            <ul className="section-list">
              <li>IP 주소, 쿠키, 방문 일시, 서비스 이용 기록 등</li>
              <li>단, 이는 서비스 제공 및 통계 목적으로만 사용됩니다.</li>
            </ul>

            <h3 className="subsection-title">모바일 앱에서 수집하는 정보</h3>
            <p className="section-content">
              앱 내에서 별도로 수집하는 정보는 앱의 개인정보 처리 방침을 참조하시기 바랍니다.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="section-title">4. 개인정보의 파기 절차 및 방법</h2>
            <p className="section-content">
              센터는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
            </p>
            <p className="section-content"><strong>파기 방법:</strong></p>
            <ul className="section-list">
              <li>전자적 파일 형태: 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제</li>
              <li>기록물, 인쇄물 등: 분쇄하거나 소각</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="section-title">5. 정보주체의 권리·의무 및 행사방법</h2>
            <p className="section-content">이용자는 다음과 같은 권리를 행사할 수 있습니다:</p>
            <ul className="section-list">
              <li>개인정보 열람 요구</li>
              <li>개인정보 정정·삭제 요구</li>
              <li>개인정보 처리정지 요구</li>
            </ul>
            <p className="section-content"><strong>권리 행사 방법:</strong></p>
            <ul className="section-list">
              <li>전화, 이메일, 서면 등을 통한 요청</li>
              <li>처리 기간: 10일 이내</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="section-title">6. 개인정보 보호책임자</h2>
            <p className="section-content">
              센터는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            </p>
            <div className="contact-info">
              <p><strong>개인정보 보호책임자</strong></p>
              <p><strong>소속:</strong> 세종충북도박문제예방치유센터</p>
              <p><strong>주소:</strong> 충청북도 청주시 흥덕구 경산로 1, 5층</p>
              <p><strong>연락처:</strong> 042-000-0000</p>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="section-title">7. 개인정보의 안전성 확보 조치</h2>
            <p className="section-content">
              센터는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:
            </p>
            <ul className="section-list">
              <li><strong>관리적 조치:</strong> 내부관리계획 수립·시행, 정기적 직원 교육 등</li>
              <li><strong>기술적 조치:</strong> 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치</li>
              <li><strong>물리적 조치:</strong> 전산실, 자료보관실 등의 접근통제</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="section-title">8. 개인정보 처리방침 변경</h2>
            <p className="section-content">
              이 개인정보 처리방침은 법령·정책 또는 보안기술의 변경에 따라 내용의 추가·삭제 및 수정이 있을 시에는 변경사항의 시행 7일 전부터 웹사이트를 통해 고지할 것입니다.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="section-title">9. 쿠키 사용에 관한 사항</h2>
            
            <h3 className="subsection-title">쿠키의 사용 목적</h3>
            <ul className="section-list">
              <li>방문 및 이용형태 파악</li>
              <li>서비스 개선 및 통계 분석</li>
            </ul>

            <h3 className="subsection-title">쿠키 설정 거부</h3>
            <p className="section-content">
              이용자는 쿠키 설치에 대한 선택권을 가지고 있으며, 웹 브라우저에서 옵션을 설정하여 쿠키 허용 여부를 결정할 수 있습니다.
            </p>
          </section>

          <div className="privacy-footer">
            <p className="last-updated">최종 수정일: 2025년 12월 3일</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
