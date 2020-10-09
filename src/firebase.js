import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAnkyPqbGQSdV0cnWBOKOsJ1PKxavhe4Y0",
	authDomain: "imessage-8d16e.firebaseapp.com",
	databaseURL: "https://imessage-8d16e.firebaseio.com",
	projectId: "imessage-8d16e",
	storageBucket: "imessage-8d16e.appspot.com",
	messagingSenderId: "957011626245",
	appId: "1:957011626245:web:ecc91f318bf65a5bf20f6c",
	measurementId: "G-E162B1WWG2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
