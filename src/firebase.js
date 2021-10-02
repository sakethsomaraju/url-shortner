import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBEaULYV2tapg2OYw-QT6GKaCk1CObsfsM",
    authDomain: "url-shotner-19d40.firebaseapp.com",
    projectId: "url-shotner-19d40",
    storageBucket: "url-shotner-19d40.appspot.com",
    messagingSenderId: "478804057632",
    appId: "1:478804057632:web:f2fb1781d322117ad36645",
    measurementId: "G-8WFTVEEY89"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db
  export {firebaseApp}