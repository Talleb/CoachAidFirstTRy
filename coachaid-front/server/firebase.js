var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://lia-coachproject.firebaseio.com"
});

const auth = admin.auth();
const db = admin.firestore();


module.exports = { auth, db };