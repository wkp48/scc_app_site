# 데이터 관리 가이드

패치노트와 버전 정보를 관리하는 방법에 대한 가이드입니다.

## 📁 현재 구조

데이터는 별도의 JSON 파일로 분리되어 관리됩니다:

```
src/
├── data/
│   ├── patchNotes.json      # 패치노트 데이터
│   └── versionInfo.json     # 버전 정보 데이터
```

## 🔧 데이터 수정 방법

### 1. 패치노트 추가/수정

`src/data/patchNotes.json` 파일을 열어서 수정하세요:

```json
[
  {
    "version": "1.1.0",           // 버전 번호
    "date": "2024-02-01",         // 릴리즈 날짜 (YYYY-MM-DD)
    "type": "release",            // "release", "beta", "alpha"
    "changes": [                   // 변경사항 배열드
      "새로운 기능 추가",
      "버그 수정",
      "성능 개선"
    ]
  }
]
```

**주의사항:**
- 가장 최신 버전이 배열의 첫 번째에 위치해야 합니다
- `type`은 다음 중 하나여야 합니다: `"release"`, `"beta"`, `"alpha"`

### 2. 버전 정보 수정

`src/data/versionInfo.json` 파일을 열어서 수정하세요:

```json
{
  "currentVersion": "1.1.0",              // 현재 버전
  "releaseDate": "2024-02-01",            // 릴리즈 날짜
  "fileSize": "26.5 MB",                  // APK 파일 크기
  "minAndroidVersion": "Android 6.0 (API 23) 이상",
  "apkUrl": "/downloads/scc_app.apk",     // APK 파일 경로
  "requirements": [                       // 시스템 요구사항
    "인터넷 연결 필요",
    "최소 100MB 이상의 저장 공간",
    "Android 6.0 이상"
  ]
}
```

### 3. APK 파일 업데이트

1. 새 APK 파일을 `public/downloads/scc_app.apk`에 배치하거나
2. `versionInfo.json`의 `apkUrl`을 새로운 파일 경로로 수정하세요

## 🚀 실무적 관리 방법

### 방법 1: JSON 파일 관리 (현재 방식) ⭐ 추천

**장점:**
- ✅ 코드 수정 없이 데이터만 수정
- ✅ Git으로 버전 관리 가능
- ✅ 빌드 과정이 단순
- ✅ 비개발자도 JSON 파일만 수정하면 됨

**사용 시나리오:**
- 소규모 프로젝트
- 패치노트가 자주 변경되지 않는 경우
- 정적 사이트 배포lk

### 방법 2: 마크다운 파일 사용

패치노트를 마크다운 형식으로 작성하고 파싱:

```markdown
## 1.1.0 (2024-02-01)

### 신규 기능
- 새로운 기능 추가

### 수정사항
- 버그 수정
```

**장점:**
- 더 읽기 쉬운 형식
- 문서화에 적합

**단점:**
- 파싱 로직 필요
- 구조화된 데이터보다 복잡

### 방법 3: API/백엔드 연동

**장점:**
- 실시간 업데이트 가능
- 관리자 페이지에서 수정 가능
- 동적 콘텐츠 관리

**단점:**
- 백엔드 서버 필요
- 인증/권한 관리 필요
- 복잡도 증가

**구현 예시:**
```javascript
// src/services/api.js
export const fetchPatchNotes = async () => {
  const response = await fetch('/api/patch-notes');
  return response.json();
};

export const fetchVersionInfo = async () => {
  const response = await fetch('/api/version-info');
  return response.json();
};
```

### 방법 4: 환경 변수 사용 (간단한 정보)

버전 번호 등 간단한 정보는 환경 변수로:

```env
VITE_APP_VERSION=1.1.0
VITE_APP_RELEASE_DATE=2024-02-01
```

```javascript
const versionInfo = {
  currentVersion: import.meta.env.VITE_APP_VERSION,
  releaseDate: import.meta.env.VITE_APP_RELEASE_DATE,
};
```

## 📝 작업 흐름 예시

### 새로운 버전 릴리즈 시:

1. **APK 파일 업데이트**
   ```bash
   # 새 APK 파일을 public/downloads/에 복사
   cp new_app.apk public/downloads/scc_app.apk
   ```

2. **버전 정보 업데이트**
   - `src/data/versionInfo.json` 열기
   - `currentVersion`, `releaseDate`, `fileSize` 업데이트

3. **패치노트 추가**
   - `src/data/patchNotes.json` 열기
   - 새 버전 정보를 배열 맨 앞에 추가

4. **빌드 및 배포**
   ```bash
   npm run build
   # dist 폴더를 배포
   ```

## 🔍 JSON 파일 검증

JSON 형식이 올바른지 확인하려면:

```bash
# Node.js로 JSON 검증
node -e "JSON.parse(require('fs').readFileSync('src/data/patchNotes.json', 'utf8'))"
```

## 💡 팁

1. **JSON 에디터 사용**: VS Code에서 JSON 파일을 열면 자동 포맷팅과 검증을 받을 수 있습니다.

2. **템플릿 사용**: 새 패치노트를 추가할 때는 이전 패치노트를 복사해서 수정하세요.

3. **날짜 형식 통일**: `YYYY-MM-DD` 형식을 유지하세요.

4. **Git 커밋**: 각 버전 업데이트를 별도의 커밋으로 관리하면 히스토리 추적이 쉽습니다.

5. **백업**: 중요한 릴리즈 전에는 데이터 파일을 백업하세요.

## 🔄 향후 확장 가능성

만약 나중에 더 복잡한 관리가 필요하다면:

1. **관리자 대시보드 구축**: React로 간단한 관리 페이지 생성
2. **CMS 연동**: Contentful, Strapi 같은 헤드리스 CMS 사용
3. **GitHub Issues/Releases 활용**: GitHub Releases API로 패치노트 자동 동기화
4. **데이터베이스 연동**: Firebase, Supabase 등으로 실시간 업데이트

