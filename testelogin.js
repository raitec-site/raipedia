require("dotenv").config();

const { initializeApp } = require("firebase/app");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");

const app = initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
});

const auth = getAuth(app);

signInWithEmailAndPassword(
    auth,
    "sitedoraitec@gmail.com",
    "TIME***de***Midias@ufc"
)
.then(user => {
    console.log("LOGIN FUNCIONOU:", user.user.email);
})
.catch(err => {
    console.log("ERRO:", err.code);
    console.log("MENSAGEM:", err.message);
});