# APK 다운로드 설정 가이드

## 📥 다운로드 방식

현재 구현된 다운로드 방식은 **Blob을 이용한 파일 다운로드**입니다. 이 방식의 장점:

- ✅ 브라우저에서 직접 파일을 다운로드
- ✅ 파일명을 동적으로 설정 가능 (버전 포함)
- ✅ 다운로드 진행 상태 표시 가능
- ✅ 에러 처리 및 대체 방법 제공

## 🔧 설정 방법

### 1. APK 파일 배치

APK 파일을 다음 경로에 배치하세요:

```
public/downloads/scc_app.apk
```

**중요:** 파일명이 정확히 일치해야 합니다. 다른 이름을 사용하려면 `src/data/versionInfo.json`의 `apkUrl`을 수정하세요.

### 2. 버전 정보에 APK URL 확인

`src/data/versionInfo.json` 파일에서 APK 경로를 확인/수정:

```json
{
  "apkUrl": "/downloads/scc_app.apk"
}
```

### 3. 파일명 커스터마이징 (선택사항)

현재 다운로드되는 파일명 형식: `scc_app_v{버전}.apk`

예: `scc_app_v0.9.0.apk`

다른 이름을 원한다면 `src/components/Hero.jsx`의 다음 부분을 수정:

```javascript
link.download = `원하는_파일명.apk`;
```

## 🎯 다운로드 작동 방식

### 현재 구현 (Blob 방식)

```javascript
1. 사용자가 버튼 클릭
2. fetch로 APK 파일 가져오기
3. Blob으로 변환
4. 동적으로 <a> 태그 생성
5. download 속성으로 파일명 설정
6. 자동으로 클릭하여 다운로드 시작
7. 메모리 정리
```

### 대체 방법들

#### 방법 1: 직접 링크 (가장 간단)

```jsx
<a 
  href="/downloads/scc_app.apk" 
  download="scc_app.apk"
  className="download-btn primary"
>
  Android APK 다운로드
</a>
```

**장점:**
- 가장 간단
- 추가 JavaScript 불필요

**단점:**
- 파일명을 동적으로 변경하기 어려움
- 다운로드 상태 표시 어려움

#### 방법 2: 서버에서 다운로드 헤더 설정

백엔드에서 `Content-Disposition` 헤더 설정:

```javascript
Content-Disposition: attachment; filename="scc_app.apk"
```

이 경우 간단한 링크로도 다운로드됩니다.

#### 방법 3: 외부 CDN 사용

APK 파일을 CDN에 올리고 URL만 변경:

```json
{
  "apkUrl": "https://cdn.example.com/downloads/scc_app.apk"
}
```

## 🐛 문제 해결

### 파일을 찾을 수 없음

**증상:** 콘솔에 "파일을 찾을 수 없습니다" 에러

**해결:**
1. `public/downloads/` 폴더에 APK 파일이 있는지 확인
2. 파일명이 `versionInfo.json`의 `apkUrl`과 일치하는지 확인
3. 개발 서버 재시작: `npm run dev`

### 다운로드가 시작되지 않음

**증상:** 버튼 클릭해도 아무 반응 없음

**해결:**
1. 브라우저 콘솔 확인 (F12)
2. CORS 문제일 수 있음 - 같은 도메인에서 제공되는지 확인
3. 파일이 실제로 존재하는지 확인

### 모바일에서 다운로드 안 됨

**증상:** 모바일 브라우저에서 다운로드가 안 됨

**해결:**
- 모바일에서는 브라우저 설정에 따라 자동 다운로드가 막힐 수 있음
- 사용자에게 "길게 누르고 링크 저장" 안내 추가
- 또는 모바일용 별도 다운로드 페이지 제공

## 📱 모바일 최적화

모바일에서 더 나은 경험을 위해 추가할 수 있는 기능:

```jsx
const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
  // 모바일에서는 직접 링크로 열기
  window.open(versionInfoData.apkUrl, '_blank');
} else {
  // 데스크톱에서는 Blob 다운로드
  // ... 기존 코드
}
```

## ✅ 체크리스트

다운로드 기능을 사용하기 전에 확인:

- [ ] `public/downloads/scc_app.apk` 파일 존재
- [ ] `src/data/versionInfo.json`의 `apkUrl`이 올바른 경로
- [ ] 개발 서버에서 `/downloads/scc_app.apk` 접근 가능
- [ ] 브라우저 콘솔에 에러 없음
- [ ] 다운로드 버튼 클릭 시 파일 다운로드 시작

## 🚀 프로덕션 배포 시 주의사항

1. **파일 크기:** APK 파일이 크면(100MB 이상) CDN 사용 고려
2. **HTTPS:** 프로덕션에서는 HTTPS 필수
3. **MIME 타입:** 서버에서 `.apk` 파일의 MIME 타입이 올바른지 확인
   - 올바른 MIME 타입: `application/vnd.android.package-archive`

## 📚 참고 자료

- [MDN: Blob](https://developer.mozilla.org/ko/docs/Web/API/Blob)
- [MDN: URL.createObjectURL](https://developer.mozilla.org/ko/docs/Web/API/URL/createObjectURL)
- [Vite: Static Asset Handling](https://vitejs.dev/guide/assets.html)

