# 🚀 배포 가이드 - 단계별 안내

## 방법 1: Vercel (가장 추천 ⭐)

### ✅ 장점
- 완전 무료
- 설정이 매우 간단
- GitHub 연결 시 자동 배포
- HTTPS 자동 설정
- 전 세계 CDN

### 📝 단계별 배포 방법

#### 1단계: Vercel 가입
1. 브라우저에서 [https://vercel.com](https://vercel.com) 접속
2. 오른쪽 상단 "Sign Up" 클릭
3. "Continue with GitHub" 선택
4. GitHub 계정으로 로그인

#### 2단계: 프로젝트 추가
1. Vercel 대시보드에서 "Add New Project" 클릭
2. GitHub 저장소 목록에서 **`wkp48/scc_app_site`** 선택
3. "Import" 클릭

#### 3단계: 프로젝트 설정 (대부분 자동 설정됨)
Vercel이 자동으로 감지하지만, 확인:
- **Framework Preset**: Vite (자동 감지)
- **Root Directory**: `./` (기본값)
- **Build Command**: `npm run build` (자동)
- **Output Directory**: `dist` (자동)
- **Install Command**: `npm install` (자동)

#### 4단계: 배포 시작
1. 설정 확인 후 "Deploy" 버튼 클릭
2. 약 1-2분 대기
3. 배포 완료! 🎉

#### 5단계: 사이트 확인
- 배포 완료 후 자동 생성된 URL로 접속
- 예: `https://scc-app-site.vercel.app`
- URL은 Vercel 대시보드에서 확인 가능

### 🔄 자동 배포 설정 (이미 활성화됨)
- GitHub의 `main` 브랜치에 푸시할 때마다 자동으로 재배포
- Pull Request 생성 시 프리뷰 배포도 자동 생성

### 🌐 커스텀 도메인 설정 (선택사항)
1. Vercel 대시보드 → 프로젝트 선택
2. "Settings" → "Domains" 탭
3. 원하는 도메인 입력 (예: `app.yourdomain.com`)
4. DNS 설정 안내에 따라 도메인 설정
5. 몇 분 후 도메인으로 접속 가능

---

## 방법 2: Netlify

### ✅ 장점
- 완전 무료
- 설정 간단
- GitHub 연동 자동 배포

### 📝 배포 방법

#### 1단계: Netlify 가입
1. [https://www.netlify.com](https://www.netlify.com) 접속
2. "Sign up" 클릭 → GitHub 계정으로 로그인

#### 2단계: 프로젝트 추가
1. "Add new site" → "Import an existing project" 클릭
2. GitHub 저장소 **`wkp48/scc_app_site`** 선택
3. "Connect to Git provider" 클릭

#### 3단계: 빌드 설정
- **Branch to deploy**: `main`
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- "Deploy site" 클릭

#### 4단계: 배포 완료
- 약 1-2분 후 배포 완료
- 자동 생성된 URL로 접속 가능

---

## 방법 3: GitHub Pages

### ✅ 장점
- 완전 무료
- GitHub와 통합

### ⚠️ 단점
- Vite 프로젝트는 base 경로 설정 필요
- 설정이 상대적으로 복잡

### 📝 배포 방법

#### 1단계: Vite 설정 수정

`vite.config.js` 파일을 열고 base 경로 추가:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/scc_app_site/', // 저장소 이름과 동일하게
})
```

#### 2단계: GitHub Actions 활성화

이미 `.github/workflows/deploy.yml` 파일이 있으므로:

1. GitHub 저장소 → "Settings" → "Pages"로 이동
2. "Source"에서 "GitHub Actions" 선택
3. 저장

#### 3단계: 자동 배포

`main` 브랜치에 푸시하면 자동으로 배포됩니다:

```bash
git add vite.config.js
git commit -m "GitHub Pages 배포 설정"
git push origin main
```

#### 4단계: 사이트 접속

배포 완료 후 (약 2-3분):
```
https://wkp48.github.io/scc_app_site/
```

---

## 🧪 배포 전 로컬 테스트

배포하기 전에 로컬에서 빌드 테스트:

```bash
# 의존성 설치
npm install

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

브라우저에서 `http://localhost:4173` 접속하여 확인

---

## ✅ 배포 전 체크리스트

- [ ] `public/downloads/scc_app.apk` 파일 존재 확인
- [ ] `src/data/versionInfo.json` 최신 버전 정보 확인
- [ ] `src/data/patchNotes.json` 최신 패치노트 확인
- [ ] 로컬에서 `npm run build` 성공 확인
- [ ] `npm run preview`로 사이트 정상 작동 확인

---

## 🐛 문제 해결

### 빌드 오류
```bash
npm run build
```
오류 메시지를 확인하고 수정하세요.

### 404 오류 (GitHub Pages)
- `vite.config.js`의 `base` 경로가 올바른지 확인
- 저장소 이름과 일치해야 합니다

### APK 파일 다운로드 안 됨
- `public/downloads/scc_app.apk` 파일이 존재하는지 확인
- 파일이 Git에 포함되어 있는지 확인: `git status`

### 이미지가 표시 안 됨
- `assets/logo.png` 파일 경로 확인
- 브라우저 개발자 도구(F12)에서 네트워크 오류 확인

---

## 🎉 배포 후 확인사항

1. **사이트 접속 테스트**
   - 모든 페이지가 정상 로드되는지 확인
   - 모바일에서도 접속 테스트

2. **APK 다운로드 테스트**
   - 다운로드 버튼 클릭 시 파일 다운로드 확인
   - 다운로드된 파일명 확인

3. **반응형 디자인 확인**
   - 모바일, 태블릿, 데스크톱 레이아웃 확인

---

## 💡 추천 배포 플랫폼 비교

| 플랫폼 | 난이도 | 속도 | 자동 배포 | 무료 | 추천도 |
|--------|--------|------|-----------|------|--------|
| **Vercel** | ⭐ 매우 쉬움 | ⚡ 매우 빠름 | ✅ | ✅ | ⭐⭐⭐⭐⭐ |
| **Netlify** | ⭐ 매우 쉬움 | ⚡ 빠름 | ✅ | ✅ | ⭐⭐⭐⭐ |
| **GitHub Pages** | ⭐⭐ 보통 | ⚡ 빠름 | ✅ | ✅ | ⭐⭐⭐ |

---

## 📚 추가 자료

- [Vercel 공식 문서](https://vercel.com/docs)
- [Netlify 공식 문서](https://docs.netlify.com)
- [GitHub Pages 공식 문서](https://docs.github.com/en/pages)
- [Vite 배포 가이드](https://vitejs.dev/guide/static-deploy.html)

---

## 🚀 지금 바로 시작하기

**가장 빠른 방법: Vercel**

1. [vercel.com](https://vercel.com) 접속
2. GitHub로 로그인
3. 프로젝트 추가
4. 배포 완료!

**5분 안에 배포 가능!** 🎉

