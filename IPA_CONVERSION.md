# .app을 .ipa로 변환하는 방법

## 📱 .app vs .ipa 차이점

### `.app` (앱 번들)
- **용도**: Mac이나 iOS 시뮬레이터에서 직접 실행
- **형태**: 폴더 구조
- **위치**: 보통 `build/` 폴더나 Xcode 아카이브에서 생성
- **웹 배포**: ❌ 웹에서 직접 다운로드/설치 불가

### `.ipa` (iOS App Store Package)
- **용도**: 실제 iOS 기기에 배포/설치
- **형태**: ZIP 압축 파일 (확장자만 .ipa)
- **구조**: `Payload/앱이름.app` 형태로 압축됨
- **웹 배포**: ✅ 웹에서 다운로드 가능

## 🔄 .app을 .ipa로 변환하는 방법

### 방법 1: 수동 변환 (가장 간단)

터미널에서 다음 명령어를 실행:

```bash
cd public/downloads

# 1. Payload 폴더 생성
mkdir -p Payload

# 2. .app 폴더를 Payload 안으로 복사
cp -r scc_app.ipa.app Payload/

# 3. Payload 폴더를 ZIP으로 압축
zip -r scc_app.ipa Payload

# 4. Payload 폴더 삭제 (선택사항)
rm -rf Payload
```

**결과**: `scc_app.ipa` 파일이 생성됩니다.

### 방법 2: Xcode에서 Archive 후 Export

1. Xcode에서 프로젝트 열기
2. **Product** → **Archive** 클릭
3. Archive 완료 후 창이 열리면 **Distribute App** 클릭
4. **Ad Hoc** 또는 **Enterprise** 선택
5. Export 후 `.ipa` 파일 생성됨

### 방법 3: 스크립트로 자동화

다음 스크립트를 사용할 수 있습니다:

```bash
#!/bin/bash
# convert-app-to-ipa.sh

APP_NAME="scc_app"
APP_PATH="public/downloads/${APP_NAME}.ipa.app"
IPA_PATH="public/downloads/${APP_NAME}.ipa"

# Payload 폴더 생성
mkdir -p Payload

# .app 복사
cp -r "${APP_PATH}" Payload/

# ZIP 압축
zip -r "${IPA_PATH}" Payload

# 정리
rm -rf Payload

echo "✅ ${IPA_PATH} 생성 완료!"
```

## ✅ 변환 확인

변환 후 `.ipa` 파일 구조 확인:

```bash
# .ipa 파일 압축 풀기 (확인용)
unzip -l scc_app.ipa
```

다음과 같은 구조가 보여야 합니다:
```
Payload/
Payload/scc_app.ipa.app/
Payload/scc_app.ipa.app/... (앱 파일들)
```

## 📋 체크리스트

- [ ] `.app` 폴더가 `public/downloads/`에 있음
- [ ] `Payload` 폴더 생성
- [ ] `.app` 폴더를 `Payload/` 안으로 복사
- [ ] `Payload` 폴더를 ZIP으로 압축하여 `.ipa` 생성
- [ ] `versionInfo.json`의 `iosUrl`이 `/downloads/scc_app.ipa`로 설정되어 있는지 확인

## 🚀 빠른 변환 명령어 (한 줄)

```bash
cd /Users/parkkeonryul/Desktop/scc_page/public/downloads && mkdir -p Payload && cp -r scc_app.ipa.app Payload/ && zip -r scc_app.ipa Payload && rm -rf Payload
```

이 명령어를 실행하면 `scc_app.ipa` 파일이 생성됩니다!

