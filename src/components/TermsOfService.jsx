import './TermsOfService.css';

const TermsOfService = () => {
  const handleBack = () => {
    window.location.hash = '';
    window.scrollTo(0, 0);
  };

  return (
    <div className="terms-page">
      <div className="terms-container">
        <button onClick={handleBack} className="back-button">
          ← 홈으로 돌아가기
        </button>
        
        <div className="terms-content">
          <h1 className="terms-title">사이트 이용 약관</h1>
          <p className="terms-effective-date">시행일자: 2025년 12월 3일</p>

          <div className="policy-intro">
            <p>
              세종충북도박문제예방치유센터(이하 "센터") 웹사이트 이용약관입니다. 본 약관은 센터가 제공하는 웹사이트 서비스의 이용과 관련하여 센터와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
            </p>
          </div>

          <section className="terms-section">
            <h2 className="section-title">제1조 (목적)</h2>
            <p className="section-content">
              이 약관은 세종충북도박문제예방치유센터(이하 "센터")가 운영하는 웹사이트에서 제공하는 서비스의 이용과 관련하여 센터와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="section-title">제2조 (정의)</h2>
            <p className="section-content">이 약관에서 사용하는 용어의 정의는 다음과 같습니다:</p>
            <ul className="section-list">
              <li><strong>"웹사이트"</strong>란 센터가 컴퓨터 등 정보통신설비를 이용하여 서비스를 제공할 수 있도록 설정한 가상의 영업장을 말합니다.</li>
              <li><strong>"서비스"</strong>란 센터가 웹사이트를 통해 제공하는 모바일 애플리케이션 다운로드 및 관련 정보 제공 서비스를 말합니다.</li>
              <li><strong>"이용자"</strong>란 웹사이트에 접속하여 이 약관에 따라 센터가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2 className="section-title">제3조 (약관의 게시와 개정)</h2>
            <p className="section-content">
              센터는 이 약관의 내용을 이용자가 쉽게 알 수 있도록 웹사이트 초기 화면에 게시합니다. 센터는 필요한 경우 관련 법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있으며, 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 웹사이트의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="section-title">제4조 (서비스의 제공 및 변경)</h2>
            <p className="section-content">센터는 다음과 같은 서비스를 제공합니다:</p>
            <ul className="section-list">
              <li>모바일 애플리케이션 다운로드 서비스</li>
              <li>앱 버전 정보 및 패치노트 제공</li>
              <li>기타 센터가 추가로 개발하거나 제휴계약 등을 통해 이용자에게 제공하는 일체의 서비스</li>
            </ul>
            <p className="section-content">
              센터는 서비스의 내용 및 제공일자를 변경할 수 있으며, 변경 시에는 사전에 공지합니다.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="section-title">제5조 (서비스의 중단)</h2>
            <p className="section-content">
              센터는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다. 센터는 서비스의 제공에 필요한 경우 정기점검을 실시할 수 있으며, 정기점검 시간은 서비스 제공화면에 공지한 바에 따릅니다.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="section-title">제6조 (이용자의 의무)</h2>
            <p className="section-content">이용자는 다음 행위를 하여서는 안 됩니다:</p>
            <ul className="section-list">
              <li>신청 또는 변경 시 허위내용의 등록</li>
              <li>타인의 정보 도용</li>
              <li>센터가 게시한 정보의 변경</li>
              <li>센터가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
              <li>센터와 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
              <li>센터 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
              <li>외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 공개 또는 게시하는 행위</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2 className="section-title">제7조 (저작권의 귀속 및 이용제한)</h2>
            <p className="section-content">
              센터가 작성한 저작물에 대한 저작권 기타 지적재산권은 센터에 귀속합니다. 이용자는 센터를 이용함으로써 얻은 정보를 센터의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="section-title">제8조 (면책조항)</h2>
            <p className="section-content">
              센터는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다. 센터는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다. 센터는 이용자가 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며, 그 밖의 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="section-title">제9조 (준거법 및 관할법원)</h2>
            <p className="section-content">
              이 약관의 해석 및 센터와 이용자 간의 분쟁에 대하여는 대한민국 법을 적용하며, 본 서비스와 관련하여 분쟁이 발생한 경우 관할법원은 센터 소재지를 관할하는 법원으로 합니다.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="section-title">제10조 (기타)</h2>
            <p className="section-content">
              이 약관에 명시되지 않은 사항에 대해서는 관련 법령 및 상관례에 따르며, 본 약관과 관련하여 문제가 발생할 경우 센터와 이용자는 성실히 협의하여 해결합니다.
            </p>
          </section>

          <div className="terms-footer">
            <p className="last-updated">최종 수정일: 2025년 12월 3일</p>
            <div className="contact-info">
              <p><strong>문의처</strong></p>
              <p><strong>소속:</strong> 세종충북도박문제예방치유센터</p>
              <p><strong>주소:</strong> 충청북도 청주시 흥덕구 경산로 1, 5층</p>
              <p><strong>연락처:</strong> 042-000-0000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

