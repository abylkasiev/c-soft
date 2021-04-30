import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA_v_ayEtbYmWPRajroiOnz-4dhSjuAKYw",
    authDomain: "c-soft-b8b1c.firebaseapp.com",
    projectId: "c-soft-b8b1c",
    storageBucket: "c-soft-b8b1c.appspot.com",
    messagingSenderId: "962821807347",
    appId: "1:962821807347:web:b664c0262b2eb224332b86"
  };

  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth()

  export default firebase;