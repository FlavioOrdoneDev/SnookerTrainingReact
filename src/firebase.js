import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCEQYaF8xEumNoMnOSFZrnhuiyH9628vs0",
    authDomain: "snooker-fl-training.firebaseapp.com",
    databaseURL: "https://snooker-fl-training.firebaseio.com",
    projectId: "snooker-fl-training",
    storageBucket: "snooker-fl-training.appspot.com",
    messagingSenderId: "172404314103",
    appId: "1:172404314103:web:889862b102415a21"
  };
  
  firebase.initializeApp(firebaseConfig);

  const firebaseDB = firebase.database();
  const firebaseRotinasTemplate = firebaseDB.ref('rotinasTemplate');
  const firebaseCategorias = firebaseDB.ref('categorias');
      
export {
    firebase,
    firebaseRotinasTemplate,
    firebaseCategorias,
    firebaseDB
}