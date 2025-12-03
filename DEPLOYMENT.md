# 배포 가이드

이 프로젝트를 배포하는 여러 방법을 안내합니다.

## 🚀 추천 배포 방법

### 1. Vercel (가장 추천) ⭐

**장점:**
- ✅ 완전 무료 (개인/비상업적 사용)
- ✅ GitHub 연결 시 자동 배포
- ✅ HTTPS 자동 설정
- ✅ 전 세계 CDN
- ✅ 커스텀 도메인 지원
- ✅ Vite/React 프로젝트 최적화

**배포 방법:**

1. **Vercel 가입 및 프로젝트 연결**
   - [https://vercel.com](https://vercel.com) 접속
   - "Sign Up" 클릭 → GitHub 계정으로 로그인
   - "Add New Project" 클릭
   - GitHub 저장소 `wkp48/scc_app_site` 선택

2. **프로젝트 설정**
   - **Framework Preset**: Vite (자동 감지됨)
   - **Root Directory**: `./` (기본값)
   - **Build Command**: `npm run build` (자동 설정됨)
   - **Output Directory**: `dist` (자동 설정됨)
   - **Install Command**: `npm install` (자동 설정됨)

3. **배포 시작**
   - "Deploy" 버튼 클릭
   - 약 1-2분 후 배포 완료!
   - 자동으로 생성된 URL로 사이트 접속 가능

4. **자동 배포 설정**
   - GitHub에 `main` 브랜치에 푸시할 때마다 자동으로 재배포됩니다
   - Pull Request 생성 시 프리뷰 배포도 자동 생성됩니다

**커스텀 도메인 설정 (선택사항):**
1. Vercel 대시보드 → 프로젝트 선택 → Settings → Domains
2. 원하는 도메인 추가
3. DNS 설정 안내에 따라 도메인 설정

---

### 2. Netlify

**장점:**
- ✅ 완전 무료
- ✅ GitHub 연동 자동 배포
- ✅ HTTPS 자동 설정
- ✅ 폼 처리 기능 제공

**배포 방법:**

1. **Netlify 가입 및 프로젝트 연결**
   - [https://www.netlify.com](https://www.netlify.com) 접속
   - "Sign up" 클릭 → GitHub 계정으로 로그인
   - "Add new site" → "Import an existing project" 클릭
   - GitHub 저장소 `wkp48/scc_app_site` 선택

2. **빌드 설정**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - "Deploy site" 클릭

3. **자동 배포**
   - 기본적으로 GitHub 푸시 시 자동 배포됩니다

---

### 3. GitHub Pages (무료, 하지만 설정 복잡)

**장점:**
- ✅ 완전 무료
- ✅ GitHub와 통합

**단점:**
- ⚠️ Vite 프로젝트는 base 경로 설정 필요
- ⚠️ HTTPS만 지원 (HTTP는 리다이렉트)
- ⚠️ 설정이 상대적으로 복잡

**배포 방법:**

1. **Vite 설정 수정**

`vite.config.js`에 base 경로 추가:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/scc_app_site/', // 저장소 이름과 동일하게
})
```

2. **GitHub Actions 설정**

`.github/workflows/deploy.yml` 파일이 이미 있으면 사용하고, 없으면 생성:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        if: github.ref == 'refs/heads/main'
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

3. **GitHub 저장소 설정**
   - 저장소 → Settings → Pages
   - Source: "GitHub Actions" 선택
   - 저장하면 자동으로 배포 시작

4. **사이트 접속**
   - `https://wkp48.github.io/scc_app_site/` 형태로 접속

---

## 📦 수동 배포 방법

### 빌드 후 파일 업로드

1. **로컬에서 빌드**
   ```bash
   npm run build
   ```
   `dist` 폴더에 빌드된 파일이 생성됩니다.

2. **호스팅 서비스에 업로드**
   - `dist` 폴더의 모든 내용을 호스팅 서비스에 업로드
   - 일반적인 웹 호스팅 서비스 사용 가능

**주의사항:**
- APK 파일은 `dist/downloads/scc_app.apk` 경로에 있어야 합니다
- `dist` 폴더 전체를 업로드해야 합니다

---

## 🔧 배포 전 체크리스트

배포하기 전에 확인할 사항:

- [ ] `public/downloads/scc_app.apk` 파일이 존재하는가?
- [ ] `src/data/versionInfo.json`의 버전 정보가 최신인가?
- [ ] `src/data/patchNotes.json`의 패치노트가 업데이트되었는가?
- [ ] 로컬에서 `npm run build`가 성공적으로 완료되는가?
- [ ] 빌드 후 `npm run preview`로 사이트가 정상 작동하는가?

---

## 🌐 배포 후 확인사항

배포 후 다음을 확인하세요:

1. **사이트 접속 테스트**
   - 모든 페이지가 정상적으로 로드되는지 확인
   - 모바일에서도 접속 테스트

2. **APK 다운로드 테스트**
   - 다운로드 버튼 클릭 시 파일이 다운로드되는지 확인
   - 다운로드된 파일명이 올바른지 확인

3. **반응형 디자인 확인**
   - 모바일, 태블릿, 데스크톱에서 레이아웃 확인

---

## 🐛 문제 해결

### 빌드 오류

```bash
npm run build
```

오류 메시지를 확인하고 수정하세요.

### 404 오류 (GitHub Pages)

- `vite.config.js`에서 `base` 경로가 올바른지 확인
- 모든 경로가 상대 경로로 설정되어 있는지 확인

### APK 파일 다운로드 안 됨

- `public/downloads/scc_app.apk` 파일이 존재하는지 확인
- 파일 크기가 너무 크면(100MB+) CDN 사용 고려

### 이미지가 표시 안 됨

- 이미지 경로가 올바른지 확인
- `public` 폴더의 파일들은 루트 경로로 접근 가능합니다

---

## 💡 추천 배포 플랫폼 비교

| 플랫폼 | 난이도 | 속도 | 커스텀 도메인 | 가격 |
|--------|--------|------|---------------|------|
| **Vercel** | ⭐ 매우 쉬움 | ⚡ 매우 빠름 | ✅ 무료 | 💰 무료 |
| **Netlify** | ⭐ 매우 쉬움 | ⚡ 빠름 | ✅ 무료 | 💰 무료 |
| **GitHub Pages** | ⭐⭐ 보통 | ⚡ 빠름 | ✅ 가능 | 💰 무료 |
| 수동 호스팅 | ⭐⭐⭐ 어려움 | ⚡ 보통 | ✅ 가능 | 💰 유료 |

---

## 📚 추가 자료

- [Vercel 공식 문서](https://vercel.com/docs)
- [Netlify 공식 문서](https://docs.netlify.com)
- [GitHub Pages 공식 문서](https://docs.github.com/en/pages)
- [Vite 배포 가이드](https://vitejs.dev/guide/static-deploy.html)

---

## 🎉 배포 완료 후

배포가 완료되면:

1. **URL 공유**: 생성된 URL을 팀/사용자들과 공유
2. **도메인 연결**: 필요시 커스텀 도메인 설정
3. **모니터링**: 사이트 접속 및 다운로드 통계 확인

**축하합니다! 사이트가 온라인에 게시되었습니다! 🚀**

