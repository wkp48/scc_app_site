# 쿠키 구현 가이드

이 문서는 웹사이트에 쿠키를 구현하는 방법을 설명합니다. 현재는 **설명만 제공**하며 실제 구현은 하지 않습니다.

## 📋 목차

1. [쿠키 기본 개념](#1-쿠키-기본-개념)
2. [JavaScript로 쿠키 설정](#2-javascript로-쿠키-설정)
3. [쿠키 동의 배너](#3-쿠키-동의-배너)
4. [쿠키 사용 예시](#4-쿠키-사용-예시)
5. [쿠키 라이브러리](#5-쿠키-라이브러리)
6. [법적 요구사항](#6-법적-요구사항)
7. [현재 사이트 적용 가이드](#7-현재-사이트-적용-가이드)

---

## 1. 쿠키 기본 개념

### 쿠키란?
- 웹사이트가 사용자의 브라우저에 저장하는 작은 텍스트 파일
- 사용자의 설정, 로그인 정보, 방문 기록 등을 저장
- 서버와 브라우저 간 정보를 공유하는 방법

### 쿠키의 종류

#### 1.1 세션 쿠키 (Session Cookie)
- 브라우저를 닫으면 삭제됨
- 만료일 없음
- 주로 로그인 세션 관리에 사용

#### 1.2 영구 쿠키 (Persistent Cookie)
- 설정한 만료일까지 유지
- 사용자의 선호도 저장에 사용
- 예: 언어 설정, 테마 설정

#### 1.3 쿠키 분류 (목적별)

**필수 쿠키 (Essential Cookies)**
- 웹사이트 동작에 필수적
- 동의 없이도 사용 가능 (GDPR)
- 예: 세션 관리, 보안

**성능 쿠키 (Performance Cookies)**
- 웹사이트 성능 분석
- 사용자 동의 필요
- 예: Google Analytics

**기능 쿠키 (Functional Cookies)**
- 사용자 경험 개선
- 사용자 동의 필요
- 예: 언어 설정, 폰트 크기

**타겟팅 쿠키 (Targeting Cookies)**
- 광고 및 마케팅
- 사용자 동의 필수
- 예: 광고 추적, 리타겟팅

---

## 2. JavaScript로 쿠키 설정

### 2.1 기본 쿠키 함수

```javascript
// 쿠키 설정
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

// 쿠키 읽기
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// 쿠키 삭제
function deleteCookie(name) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}

// 모든 쿠키 확인
function getAllCookies() {
  return document.cookie.split(';').reduce((acc, cookie) => {
    const [name, value] = cookie.split('=').map(c => c.trim());
    if (name) acc[name] = value;
    return acc;
  }, {});
}
```

### 2.2 쿠키 옵션 설정

```javascript
function setCookieAdvanced(name, value, options = {}) {
  const {
    days = 365,           // 만료일 (일)
    path = '/',           // 경로
    domain = '',          // 도메인
    secure = false,       // HTTPS만
    sameSite = 'Lax'      // SameSite 속성
  } = options;

  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));

  let cookieString = `${name}=${value};expires=${expires.toUTCString()};path=${path}`;
  
  if (domain) cookieString += `;domain=${domain}`;
  if (secure) cookieString += `;secure`;
  cookieString += `;SameSite=${sameSite}`;

  document.cookie = cookieString;
}

// 사용 예시
setCookieAdvanced('user_id', '12345', {
  days: 30,
  secure: true,
  sameSite: 'Strict'
});
```

---

## 3. 쿠키 동의 배너

### 3.1 기본 구조

```javascript
import { useState, useEffect } from 'react';

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // 쿠키 동의 여부 확인
    const consent = getCookie('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    setCookie('cookie_consent', 'all', 365);
    setCookie('analytics_enabled', 'true', 365);
    setCookie('marketing_enabled', 'true', 365);
    setShowBanner(false);
    // 분석 쿠키 활성화
  };

  const handleAcceptEssential = () => {
    setCookie('cookie_consent', 'essential', 365);
    setCookie('analytics_enabled', 'false', 365);
    setCookie('marketing_enabled', 'false', 365);
    setShowBanner(false);
  };

  const handleReject = () => {
    setCookie('cookie_consent', 'rejected', 365);
    setCookie('analytics_enabled', 'false', 365);
    setCookie('marketing_enabled', 'false', 365);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-content">
        <h3>쿠키 사용 동의</h3>
        <p>
          이 웹사이트는 최적의 서비스를 제공하기 위해 쿠키를 사용합니다.
          쿠키 사용에 동의하시겠습니까?
        </p>
        <div className="cookie-banner-actions">
          <button onClick={handleAcceptAll}>모두 동의</button>
          <button onClick={handleAcceptEssential}>필수만 동의</button>
          <button onClick={handleReject}>거부</button>
          <a href="#cookies">쿠키 정책 자세히 보기</a>
        </div>
      </div>
    </div>
  );
};
```

### 3.2 CSS 스타일

```css
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 1.5rem;
  z-index: 1000;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
}

.cookie-banner-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cookie-banner-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.cookie-banner button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.cookie-banner a {
  color: #4CAF50;
  text-decoration: underline;
}
```

---

## 4. 쿠키 사용 예시

### 4.1 사용자 설정 저장

```javascript
// 테마 설정 저장
function saveTheme(theme) {
  setCookie('theme', theme, 365);
  document.documentElement.setAttribute('data-theme', theme);
}

// 테마 불러오기
function loadTheme() {
  const theme = getCookie('theme') || 'light';
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
}

// 언어 설정
function saveLanguage(lang) {
  setCookie('language', lang, 365);
}

// 폰트 크기
function saveFontSize(size) {
  setCookie('font_size', size, 365);
}
```

### 4.2 방문 통계

```javascript
// 방문 횟수 추적
function trackVisit() {
  const visitCount = parseInt(getCookie('visit_count')) || 0;
  setCookie('visit_count', (visitCount + 1).toString(), 365);
  
  const lastVisit = getCookie('last_visit');
  const now = new Date().toISOString();
  setCookie('last_visit', now, 365);
  
  return { visitCount: visitCount + 1, lastVisit };
}

// 첫 방문 확인
function isFirstVisit() {
  return !getCookie('visit_count');
}
```

### 4.3 다운로드 이력

```javascript
// 다운로드 버전 저장
function saveDownloadVersion(version) {
  const downloads = JSON.parse(getCookie('download_history') || '[]');
  downloads.push({
    version,
    date: new Date().toISOString()
  });
  setCookie('download_history', JSON.stringify(downloads), 365);
}

// 다운로드 이력 확인
function hasDownloadedVersion(version) {
  const downloads = JSON.parse(getCookie('download_history') || '[]');
  return downloads.some(d => d.version === version);
}
```

---

## 5. 쿠키 라이브러리

### 5.1 js-cookie (가장 인기)

```bash
npm install js-cookie
```

```javascript
import Cookies from 'js-cookie';

// 설정
Cookies.set('name', 'value', { expires: 7 });

// 읽기
Cookies.get('name');

// 삭제
Cookies.remove('name');

// 모든 쿠키
Cookies.get(); // { name: 'value', ... }

// JSON 저장
Cookies.set('user', { name: 'John', age: 30 });
const user = Cookies.getJSON('user');
```

### 5.2 react-cookie-consent

```bash
npm install react-cookie-consent
```

```javascript
import CookieConsent from "react-cookie-consent";

<CookieConsent
  location="bottom"
  buttonText="동의합니다"
  cookieName="cookie_consent"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={365}
>
  이 웹사이트는 쿠키를 사용합니다.{" "}
  <span style={{ fontSize: "10px" }}>
    <a href="#cookies">쿠키 정책 보기</a>
  </span>
</CookieConsent>
```

### 5.3 react-cookie (React Hooks)

```bash
npm install react-cookie
```

```javascript
import { useCookies } from 'react-cookie';

function MyComponent() {
  const [cookies, setCookie, removeCookie] = useCookies(['name']);

  const handleSet = () => {
    setCookie('name', 'value', { path: '/', maxAge: 3600 });
  };

  const handleRemove = () => {
    removeCookie('name', { path: '/' });
  };

  return (
    <div>
      <p>Cookie value: {cookies.name}</p>
      <button onClick={handleSet}>Set Cookie</button>
      <button onClick={handleRemove}>Remove Cookie</button>
    </div>
  );
}
```

---

## 6. 법적 요구사항

### 6.1 GDPR (유럽)

- **필수 사항:**
  - 쿠키 사용 전 명시적 동의 필수
  - 동의/거부 선택권 제공
  - 쿠키 정책 페이지 제공
  - 쿠키 목적 명확히 설명

### 6.2 개인정보보호법 (한국)

- **필수 쿠키:** 동의 없이 사용 가능
- **선택 쿠키:** 사용자 동의 필요
- 쿠키 정책 페이지 제공
- 쿠키 거부 방법 안내

### 6.3 쿠키 배너 구현 체크리스트

- [ ] 쿠키 동의 배너 표시
- [ ] 필수/선택 쿠키 구분
- [ ] 동의/거부 옵션 제공
- [ ] 쿠키 정책 링크 제공
- [ ] 동의 여부 저장
- [ ] 거부 시 선택 쿠키 비활성화
- [ ] 쿠키 설정 변경 가능하도록 제공

---

## 7. 현재 사이트 적용 가이드

### 7.1 현재 상황

- ✅ 쿠키 정책 페이지 존재
- ❌ 쿠키 동의 배너 없음
- ❌ 실제 쿠키 설정 코드 없음
- ❌ 분석 도구 사용 안 함

### 7.2 필요한 경우

**구현이 필요한 시나리오:**
1. **방문 통계 수집** (Google Analytics)
2. **사용자 설정 저장** (다크모드, 언어)
3. **다운로드 이력 추적**
4. **개인화 기능**

**구현이 필요 없는 시나리오:**
1. 단순 앱 다운로드 페이지만 제공
2. 개인정보 수집 없음
3. 최소한의 기능만 필요

### 7.3 구현 시 추가해야 할 것

#### 7.3.1 쿠키 유틸리티 함수
- `src/utils/cookies.js` 파일 생성
- 쿠키 설정/읽기/삭제 함수

#### 7.3.2 쿠키 동의 배너 컴포넌트
- `src/components/CookieConsent.jsx` 생성
- `App.jsx`에 추가

#### 7.3.3 쿠키 설정 관리 페이지
- 쿠키 정책 페이지에 설정 변경 기능 추가
- 각 쿠키별 on/off 토글

#### 7.3.4 분석 도구 통합 (선택)
- Google Analytics 설정
- 동의 후에만 로드

### 7.4 구현 단계별 가이드

**1단계: 쿠키 유틸리티 함수 만들기**
```javascript
// src/utils/cookies.js
export const setCookie = (name, value, days) => { ... };
export const getCookie = (name) => { ... };
export const deleteCookie = (name) => { ... };
```

**2단계: 쿠키 동의 배너 컴포넌트**
```javascript
// src/components/CookieConsent.jsx
const CookieConsent = () => {
  // 동의 배너 로직
};
```

**3단계: App.jsx에 배너 추가**
```javascript
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <div className="App">
      {/* ... 기존 컴포넌트 ... */}
      <CookieConsent />
    </div>
  );
}
```

**4단계: 쿠키 사용 예시**
```javascript
// 사용자 설정 저장
if (getCookie('cookie_consent') === 'all') {
  // 분석 쿠키 활성화
  // Google Analytics 로드
}
```

---

## 8. 추천 구현 순서

### 현재 사이트에 필요한 경우

1. **방문 통계가 필요한 경우**
   - Google Analytics 추가
   - 쿠키 동의 배너 필수
   - react-cookie-consent 라이브러리 사용

2. **사용자 설정 저장이 필요한 경우**
   - js-cookie 라이브러리 사용
   - 설정 페이지 추가
   - 쿠키에 설정 저장

3. **최소한의 기능만 필요한 경우**
   - 현재 상태 유지 (쿠키 없음)
   - 쿠키 정책 페이지만 유지

---

## 9. 참고 자료

- [MDN - HTTP 쿠키](https://developer.mozilla.org/ko/docs/Web/HTTP/Cookies)
- [js-cookie 문서](https://github.com/js-cookie/js-cookie)
- [react-cookie-consent 문서](https://github.com/Mastermindzh/react-cookie-consent)
- [GDPR 가이드](https://gdpr.eu/cookies/)
- [개인정보보호법 - 쿠키](https://www.privacy.go.kr/)

---

## 10. 요약

- **현재:** 쿠키 정책 페이지만 있음
- **필요 시:** 쿠키 동의 배너 + 쿠키 설정 코드 추가
- **권장 라이브러리:** js-cookie, react-cookie-consent
- **법적 요구사항:** 쿠키 사용 시 동의 배너 필수

**결론:** 현재 사이트는 단순 앱 다운로드 페이지만 제공하므로 쿠키 설정 없이도 운영 가능합니다. 향후 방문 통계나 개인화 기능이 필요할 때 추가 구현하면 됩니다.

