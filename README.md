# 세종충북도박문제예방치유센터 애플리케이션 다운로드 페이지

세종충북도박문제예방치유센터 애플리케이션의 공식 다운로드 페이지입니다.

## 기능

- 📱 버전 정보 표시
- 📥 안드로이드 및 iOS 다운로드 링크
- 📝 패치노트 및 업데이트 내역
- 📱 반응형 디자인 (모바일, 태블릿, 데스크톱 지원)

## 설치 및 실행

### 필수 요구사항

- Node.js 16 이상
- npm 또는 yarn

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173`을 열어 확인하세요.

### 프로덕션 빌드

```bash
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

### 빌드 미리보기

```bash
npm run preview
```

## 설정

### 다운로드 링크 설정

APK 파일과 iOS App Store 링크를 설정하는 방법은 두 가지가 있습니다:

#### 방법 1: 환경 변수 사용 (권장)

프로젝트 루트에 `.env` 파일을 생성하고 다음 내용을 추가하세요:

```env
VITE_APK_URL=https://your-server.com/downloads/scc_app.apk
VITE_IOS_URL=https://apps.apple.com/app/id123456789
```

#### 방법 2: 코드에서 직접 수정

`src/components/DownloadSection.jsx` 파일의 `APK_URL`과 `IOS_STORE_URL` 변수를 직접 수정하세요.

#### APK 파일 호스팅 방법

APK 파일은 다음 중 하나의 방법으로 호스팅할 수 있습니다:

1. **웹 서버**: 자체 웹 서버에 APK 파일 업로드
2. **GitHub Releases**: GitHub 저장소의 Releases에 APK 업로드
   - 예: `https://github.com/username/repo/releases/download/v1.0.0/scc_app.apk`
3. **클라우드 스토리지**: AWS S3, Google Cloud Storage 등
4. **파일 호스팅 서비스**: Dropbox, Google Drive (공개 링크)

### 버전 정보 수정

`src/components/VersionInfo.jsx` 파일에서 버전 정보를 수정하세요.

### 패치노트 추가

`src/components/PatchNotes.jsx` 파일의 `patchNotes` 배열에 새로운 패치노트를 추가하세요.

## 기술 스택

- React 18
- Vite
- CSS3 (반응형 디자인)

## 라이선스

© 2024 세종충북도박문제예방치유센터. All rights reserved.

