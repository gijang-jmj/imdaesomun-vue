// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDIy5WQIy2311YtFIRFG4wfbWLu8Xl_8z0',
  authDomain: 'imdaesomun.firebaseapp.com',
  projectId: 'imdaesomun',
  storageBucket: 'imdaesomun.firebasestorage.app',
  messagingSenderId: '317443316119',
  appId: '1:317443316119:web:eb1a9c764f6bec48b10cd2',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

// You can also export the app instance if needed
export { app, auth }
