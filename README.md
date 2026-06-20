# Minhub Auth

Firebase Authentication을 사용해 Google 로그인을 제공하기 위한 React 웹 앱입니다.

## 기술 스택

- React
- TypeScript
- Vite
- Firebase Authentication

## Firebase 설정

Firebase 앱 설정은 [`src/firebase.ts`](src/firebase.ts)에 있습니다. 인증 도메인은 배포 주소인 `hello-world-minhub.netlify.app`으로 설정되어 있습니다.

Google 로그인을 사용하려면 Firebase Console에서 Google 로그인 제공자를 활성화하고 `hello-world-minhub.netlify.app`을 승인된 도메인에 추가해야 합니다.

App Check를 사용하려면 `.env.local`과 배포 환경에 `VITE_RECAPTCHA_SITE_KEY`를 설정해야 합니다. 값은 Firebase Console의 App Check에 등록한 reCAPTCHA v3 site key를 사용합니다.

## 로컬 실행

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```
