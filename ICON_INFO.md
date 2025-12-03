# 아이콘 크기 정보

## 📍 확인 위치 요약

### 1. 이미지 파일 원본 크기

**파일 위치:**
- 안드로이드: `assets/android.png` → **225px × 225px**
- 애플: `assets/apple logo.png` → **270px × 148px**

### 2. 화면에 표시되는 크기 (CSS 설정)

**파일 위치:** `src/components/Hero.css`

**현재 설정:**
- **데스크톱/태블릿**: 40px × 40px
- **작은 모바일**: 35px × 35px

**코드 위치:**
```87:92:src/components/Hero.css
.btn-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
  flex-shrink: 0;
}
```

### 3. 컴포넌트에서 사용되는 곳

**파일 위치:** `src/components/Hero.jsx`

```120:120:src/components/Hero.jsx
              <img src={androidLogo} alt="Android" className="btn-icon" />
```

```128:128:src/components/Hero.jsx
              <img src={appleLogo} alt="iOS" className="btn-icon" />
```

## 🔍 빠른 확인 방법

### 방법 1: 브라우저 개발자 도구 (가장 정확)

1. `npm run dev` 실행
2. 브라우저에서 사이트 열기
3. **F12** (또는 **Cmd+Option+I**) 눌러서 개발자 도구 열기
4. **Elements** 탭 → 다운로드 버튼 클릭
5. **Computed** 탭에서 실제 렌더링 크기 확인

### 방법 2: 파일 속성 확인

터미널에서:
```bash
cd /Users/parkkeonryul/Desktop/scc_page
file assets/android.png assets/apple\ logo.png
```

### 방법 3: 코드 파일 확인

- **CSS 크기**: `src/components/Hero.css` 87-92번째 줄
- **이미지 import**: `src/components/Hero.jsx` 5-6번째 줄

## 📐 현재 설정 요약

| 항목 | 값 |
|------|-----|
| **안드로이드 로고 원본** | 225px × 225px |
| **애플 로고 원본** | 270px × 148px |
| **화면 표시 크기** | 40px × 40px |
| **모바일 표시 크기** | 35px × 35px |
| **CSS 클래스** | `.btn-icon` |

## 🔧 크기 변경하려면?

`src/components/Hero.css` 파일의 88-89번째 줄을 수정하세요:

```css
.btn-icon {
  width: 48px;    /* 원하는 크기 */
  height: 48px;   /* 원하는 크기 */
}
```

