# 아이콘 크기 확인 가이드

안드로이드와 애플 로고 아이콘의 크기를 확인하고 수정하는 방법입니다.

## 📍 아이콘 파일 위치

### 파일 경로
```
assets/
├── android.png          # 안드로이드 로고
└── apple logo.png       # 애플 로고
```

## 🔍 아이콘 크기 확인 방법

### 1. 코드에서 확인

**Hero.jsx** 파일에서 import 경로 확인:
```5:6:src/components/Hero.jsx
import androidLogo from '../../assets/android.png';
import appleLogo from '../../assets/apple logo.png';
```

**Hero.css** 파일에서 현재 설정된 크기 확인:
```87:92:src/components/Hero.css
.btn-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
  flex-shrink: 0;
}
```

### 2. 브라우저에서 확인

1. 개발 서버 실행 (`npm run dev`)
2. 브라우저에서 사이트 열기
3. **개발자 도구 열기** (F12 또는 Cmd+Option+I)
4. **Elements 탭** → 다운로드 버튼 요소 선택
5. **Computed** 탭에서 실제 렌더링 크기 확인

### 3. 파일 속성에서 확인

터미널에서 파일 정보 확인:

```bash
# 파일 크기 및 정보 확인
cd /Users/parkkeonryul/Desktop/scc_page
ls -lh assets/android.png assets/apple\ logo.png

# 이미지 실제 크기 확인 (macOS)
file assets/android.png assets/apple\ logo.png

# 이미지 크기 확인 (ImageMagick이 설치된 경우)
identify assets/android.png assets/apple\ logo.png
```

## 📏 현재 아이콘 크기 설정

### CSS에서 설정된 크기

- **데스크톱/태블릿**: `40px × 40px`
- **작은 모바일 (480px 이하)**: `35px × 35px`

### 크기 변경 방법

`src/components/Hero.css` 파일의 `.btn-icon` 클래스를 수정:

```css
.btn-icon {
  width: 40px;      /* 원하는 크기로 변경 */
  height: 40px;     /* 원하는 크기로 변경 */
  object-fit: contain;
  flex-shrink: 0;
}
```

## 🎨 아이콘 크기 권장사항

### 일반적인 다운로드 버튼 아이콘 크기

- **작은 버튼**: 16px - 24px
- **중간 버튼**: 24px - 32px (현재 설정)
- **큰 버튼**: 32px - 48px

### 현재 설정
- **40px**: 버튼 크기에 비해 적절한 크기
- **35px (모바일)**: 작은 화면에서도 잘 보임

## 🔧 크기 조정 예시

### 더 크게 만들기

```css
.btn-icon {
  width: 48px;      /* 40px → 48px */
  height: 48px;
}
```

### 더 작게 만들기

```css
.btn-icon {
  width: 32px;      /* 40px → 32px */
  height: 32px;
}
```

### 반응형으로 다르게 설정

```css
.btn-icon {
  width: 40px;
  height: 40px;
}

@media (max-width: 768px) {
  .btn-icon {
    width: 36px;    /* 태블릿 */
    height: 36px;
  }
}

@media (max-width: 480px) {
  .btn-icon {
    width: 32px;    /* 모바일 */
    height: 32px;
  }
}
```

## ✅ 체크리스트

아이콘 크기를 확인하려면:

- [ ] `assets/android.png` 파일 존재 확인
- [ ] `assets/apple logo.png` 파일 존재 확인
- [ ] `src/components/Hero.css`의 `.btn-icon` 크기 확인
- [ ] 브라우저 개발자 도구로 실제 렌더링 크기 확인
- [ ] 모바일에서도 크기가 적절한지 확인

## 💡 팁

1. **브라우저 개발자 도구 사용**: 가장 정확한 크기 확인
2. **반응형 테스트**: 다양한 화면 크기에서 확인
3. **이미지 원본 크기**: 너무 작은 이미지는 확대 시 품질 저하
4. **비율 유지**: `object-fit: contain`으로 비율 유지 중

## 📚 관련 파일

- **이미지 파일**: `assets/android.png`, `assets/apple logo.png`
- **컴포넌트**: `src/components/Hero.jsx`
- **스타일**: `src/components/Hero.css` (87-92번째 줄)

