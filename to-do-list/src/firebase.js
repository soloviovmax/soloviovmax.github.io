import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDGd0VMLGf60CDi4KLyNqScInU6Cfy2DY8",
  authDomain: "todolist-keen.firebaseapp.com",
  databaseURL: "https://todolist-keen.firebaseio.com",
  projectId: "todolist-keen",
  storageBucket: "todolist-keen.appspot.com",
  messagingSenderId: "765224625565"
};

firebase.initializeApp(config);
export default firebase;