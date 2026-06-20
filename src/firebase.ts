// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import {
  initializeAppCheck,
  ReCaptchaV3Provider,
} from 'firebase/app-check'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD7FxtnEx3hVj_3HG3ip-_vFbgD8AG73IU',
  authDomain: 'hello-world-minhub.netlify.app',
  projectId: 'minhub-6fab1',
  storageBucket: 'minhub-6fab1.firebasestorage.app',
  messagingSenderId: '33405314242',
  appId: '1:33405314242:web:33105634c2c13422db475b',
  measurementId: 'G-D1NPJH34CF',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY

if (!recaptchaSiteKey) {
  throw new Error('VITE_RECAPTCHA_SITE_KEY is not configured')
}

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(recaptchaSiteKey),
  isTokenAutoRefreshEnabled: true,
})

const analytics = getAnalytics(app)

export { analytics, app, appCheck }
